"use client";

import { forwardRef, useState } from "react";
import type { Editor } from "@tiptap/react";

// --- Tiptap Hooks ---
import { useTiptapEditor } from "@/hooks/use-tiptap-editor";

// --- UI ---
import { Button } from "@/components/tiptap-ui-primitive/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
} from "@/components/tiptap-ui-primitive/dropdown-menu";

// --- Icons ---
import { ChevronDownIcon } from "@/components/tiptap-icons/chevron-down-icon";
import { TextColorIcon } from "@/components/tiptap-icons/text-color-icon";

import "./color-text-dropdown-menu.scss";

const COLORS = [
  "#000000",
  "#374151",
  "#6B7280",
  "#EF4444",
  "#F59E0B",
  "#10B981",
  "#3B82F6",
  "#8B5CF6",
  "#EC4899",
];

type TextColorDropdownMenuProps = {
  editor?: Editor;
  sizes?: number[];
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
};

export const TextColorDropdownMenu = forwardRef<
  HTMLButtonElement,
  TextColorDropdownMenuProps
>(
  (
    {
      editor: providedEditor,
      onOpenChange,
      ...buttonProps
    }: TextColorDropdownMenuProps,
    ref,
  ) => {
    const { editor } = useTiptapEditor(providedEditor);
    const [isOpen, setIsOpen] = useState(false);

    if (!editor) return null;

    const currentColor = editor.getAttributes("textStyle")?.color || "#000000";

    const handleOpenChange = (open: boolean) => {
      setIsOpen(open);
      onOpenChange?.(open);
    };

    const handleSelectColor = (color: string) => {
      editor.chain().focus().setColor(color).run();
      setIsOpen(false);
    };

    const handleUnset = () => {
      editor.chain().focus().unsetColor().run();
      setIsOpen(false);
    };

    return (
      <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            aria-label="Text color"
            tooltip="Text color"
            {...buttonProps}
            ref={ref}
          >
            <TextColorIcon className="tiptap-button-icon" />
            <ChevronDownIcon className="tiptap-button-dropdown-small" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start">
          <DropdownMenuGroup>
            <div className="color-text-dropdown-menu-wrapper">
              {COLORS.map((color) => (
                <button
                  key={color}
                  onClick={() => handleSelectColor(color)}
                  title={color}
                  className="color-text-dropdown-menu-item"
                  style={{
                    background: color,
                    border:
                      currentColor === color
                        ? "2px solid #111"
                        : "1px solid #ccc",
                  }}
                />
              ))}

              <button
                onClick={handleUnset}
                title="Default"
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "#fff",
                  border: "1px dashed #aaa",
                  cursor: "pointer",
                }}
              />
            </div>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
);

TextColorDropdownMenu.displayName = "TextColorDropdownMenu";
