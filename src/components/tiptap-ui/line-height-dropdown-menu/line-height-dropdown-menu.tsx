"use client";

import { forwardRef, useState } from "react";
import type { Editor } from "@tiptap/react";

// --- Tiptap Hooks ---
import { useTiptapEditor } from "@/hooks/use-tiptap-editor";

// --- Tiptap UI Primitives ---
import { Button } from "@/components/tiptap-ui-primitive/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/tiptap-ui-primitive/dropdown-menu";

// --- Icons ---
import { ChevronDownIcon } from "@/components/tiptap-icons/chevron-down-icon";
import { LineHeightIcon } from "@/components/tiptap-icons/line-height-icon";

type LineHeightDropdownMenuProps = {
  editor?: Editor;
  heights?: number[];
  onOpenChange?: (open: boolean) => void;
};

/**
 * Dropdown for selecting line height in Tiptap editor
 */
export const LineHeightDropdownMenu = forwardRef<
  HTMLButtonElement,
  LineHeightDropdownMenuProps
>(
  (
    {
      editor: providedEditor,
      heights = [1, 1.15, 1.5, 2.0, 2.5],
      onOpenChange,
      ...buttonProps
    }: LineHeightDropdownMenuProps,
    ref,
  ) => {
    const { editor } = useTiptapEditor(providedEditor);
    const [isOpen, setIsOpen] = useState(false);

    if (!editor) return null;

    const currentHeight = editor.getAttributes("textStyle")?.lineHeight || 1.6;

    const handleOpenChange = (open: boolean) => {
      setIsOpen(open);
      onOpenChange?.(open);
    };

    const handleSelectHeight = (height: number) => {
      editor.chain().focus().setLineHeight(`${height}`).run();
      setIsOpen(false);
    };

    return (
      <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            data-active-state="off"
            aria-label="Line height"
            tooltip="Line height"
            {...buttonProps}
            ref={ref}
          >
            <LineHeightIcon className="tiptap-button-icon" />
            <ChevronDownIcon className="tiptap-button-dropdown-small" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start">
          <DropdownMenuGroup>
            {heights.map((height) => (
              <DropdownMenuItem key={`line-height-${height}`} asChild>
                <Button
                  type="button"
                  variant="ghost"
                  data-active-state={+currentHeight === height ? "on" : "off"}
                  onClick={() => handleSelectHeight(height)}
                >
                  {height}
                </Button>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
);

LineHeightDropdownMenu.displayName = "LineHeightDropdownMenu";
