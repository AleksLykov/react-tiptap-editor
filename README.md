# rt-tiptap-editor

**rt-tiptap-editor** — extensible rich text editor for React based on Tiptap.
Designed for flexibility, customization, and seamless integration into modern React + TypeScript applications.

---

## 🔹 Features

- React 18+ compatible
- Full TypeScript support
- Controlled and uncontrolled modes
- Three editor modes: **edit / readonly / view**
- Export content as **HTML** or **JSON**
- Customizable toolbar (replace, extend, or disable)
- Adjustable editor height
- Placeholder support
- Mobile-friendly behavior
- Easy styling via `className`

---

## ⚡ Installation

```bash
npm install rt-tiptap-editor
# or
yarn add rt-tiptap-editor
```

## Usage

Basic (uncontrolled)

```tsx
import { RichEditor } from "rt-tiptap-editor";

export function App() {
  return (
    <RichEditor
      defaultValue="<p>Hello world</p>"
      placeholder="Start writing..."
      height={[200, 400]}
    />
  );
}
```

Controlled

```tsx
import React, { useState } from "react";
import { RichEditor, RichEditorProps } from "rt-tiptap-editor";

export function App() {
  const [content, setContent] = useState<string>("");

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <RichEditor
        value={content}
        onChange={setContent}
        placeholder="Start writing..."
        exportType="html"
        height={[200, 400]}
      />
      <div style={{ marginTop: "20px" }}>
        <h4>Editor content:</h4>
        <pre>{content}</pre>
      </div>
    </div>
  );
}
```

Read-only / View modes

```tsx
<RichEditor value={content} mode="readonly" />
<RichEditor value={content} mode="view" />
```

---

## 🎛 Toolbar Customization

Disable toolbar

```tsx
<RichEditor toolbar={false} />
```

Provide custom toolbar component

```tsx
<RichEditor toolbar={<MyToolbar />} />
```

Render toolbar via function

```tsx
<RichEditor
  toolbar={(editor) => (
    <button onClick={() => editor.chain().focus().toggleBold().run()}>
      Bold
    </button>
  )}
/>
```

---

## Props (`RichEditorProps`)

| Prop           | Type                                                  | Default           | Description                                   |
| -------------- | ----------------------------------------------------- | ----------------- | --------------------------------------------- |
| `value`        | `string \| JSONContent`                               | —                 | Controlled content value                      |
| `defaultValue` | `string \| JSONContent`                               | —                 | Initial content (uncontrolled mode)           |
| `onChange`     | `(value: string \| JSONContent) => void`              | —                 | Callback on content change                    |
| `placeholder`  | `string`                                              | —                 | Placeholder text                              |
| `mode`         | `"edit" \| "readonly" \| "view"`                      | `"edit"`          | Editor interaction mode                       |
| `exportType`   | `"html" \| "json"`                                    | `"html"`          | Format returned in onChange                   |
| `height`       | `[number] \| [number, number]`                        | `[150]`           | Fixed editor height and maximum editor height |
| `toolbar`      | `ReactNode \| (editor: Editor) => ReactNode \| false` | `Default toolbar` | Fixed editor height and maximum editor height |
| `className`    | `string`                                              | —                 | Custom CSS class                              |

---

## 🧠 Controlled vs Uncontrolled

Controlled

- Use value
- Must handle onChange
- External state is the single source of truth

Uncontrolled

- Use defaultValue
- Editor manages its own internal state

---

## Supported Extensions

- Text color and background color
- Text highlighting
- Custom blocks and toolbar buttons for Tiptap
- Ability to add your own extensions
- Full compatibility with `viewMode` (read-only mode)

All extensions can be combined to create powerful and fully customized editors.

---

## 🔌 Content Format

```tsx
exportType = "html"; // default
exportType = "json";
```

---

## 🛠 Extensibility

Built on top of Tiptap, so you can extend functionality with custom extensions, nodes, and commands.

---

## Contributing

Contributions are welcome! To add a new feature or fix a bug:

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new extension"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/my-feature
   ```
5. Open a Pull Request

---

## License

MIT © [Aleks Lykov](https://github.com/AleksLykov)
