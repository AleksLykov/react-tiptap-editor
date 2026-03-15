"use client";

import { forwardRef, useState, useCallback } from "react";
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

type FontSizeDropdownMenuProps = {
  editor?: Editor;
  sizes?: number[];
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
};

export const FontSizeDropdownMenu = forwardRef<
  HTMLButtonElement,
  FontSizeDropdownMenuProps
>(
  (
    {
      editor: providedEditor,
      sizes = [4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 32, 48],
      onOpenChange,
      children,
      ...buttonProps
    }: FontSizeDropdownMenuProps,
    ref,
  ) => {
    const { editor } = useTiptapEditor(providedEditor);
    const [isOpen, setIsOpen] = useState(false);

    // убираем px при чтении текущего размера
    const currentSizeRaw =
      editor?.getAttributes("textStyle")?.fontSize || "16px";
    const currentSize = parseInt(currentSizeRaw, 10);

    const handleOpenChange = useCallback(
      (open: boolean) => {
        setIsOpen(open);
        onOpenChange?.(open);
      },
      [onOpenChange],
    );

    if (!editor) return null;

    const handleSelectSize = (size: number) => {
      editor.chain().focus().setFontSize(`${size}px`).run();
      setIsOpen(false);
    };

    return (
      <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            data-active-state="off"
            aria-label="Font size"
            tooltip="Font size"
            {...buttonProps}
            ref={ref}
          >
            {children ?? currentSize}
            <ChevronDownIcon className="tiptap-button-dropdown-small" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start">
          <DropdownMenuGroup className="rt-tiptap-editor-dropdown-group">
            {sizes.map((size) => (
              <DropdownMenuItem key={`font-size-${size}`} asChild>
                <Button
                  type="button"
                  variant="ghost"
                  data-active-state={currentSize === size ? "on" : "off"}
                  onClick={() => handleSelectSize(size)}
                >
                  {size}
                </Button>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
);

FontSizeDropdownMenu.displayName = "FontSizeDropdownMenu";
