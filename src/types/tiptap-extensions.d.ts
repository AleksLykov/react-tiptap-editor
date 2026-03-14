import "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    nodeBackgroundColor: {
      toggleNodeBackgroundColor: (color: string) => ReturnType;
      unsetNodeBackgroundColor: () => ReturnType;
    };
  }
}
