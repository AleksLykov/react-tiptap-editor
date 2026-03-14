# rt-tiptap-editor

**React Tiptap Editor** — an extensible and customizable editor based on [Tiptap](https://tiptap.dev/) for React.  
Provides convenient functional enhancements, simplifies integration into projects, and is ready to use with TypeScript.

---

## 🔹 Features

- Fully compatible with React 18+ and TypeScript
- Supports **read-only mode** (`viewMode`)
- Data export in **HTML** and **JSON** (`exportType`)
- Adjustable editor height (`height`, `maxHeight`)
- Custom toolbars and buttons for Tiptap extensions (text highlight, background color, etc.)
- Automatic handling of content changes via `onChange`
- Easy integration into existing React components
- Supports CSS customization through `className`

---

## ⚡ Installation

```bash
# Using npm
npm install rt-tiptap-editor

# Using yarn
yarn add rt-tiptap-editor

## Usage
 
```tsx
import React, { useState } from 'react';
import { RichEditor, RichEditorProps } from 'rt-tiptap-editor';
 
export function App() {
  const [content, setContent] = useState<string>('');
 
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <RichEditor
        data={content}
        placeholder="Начните писать..."
        exportType="html"
        height="200px"
        onChange={(data) => setContent(data as string)}
      />
      <div style={{ marginTop: '20px' }}>
        <h4>Editor content:</h4>
        <pre>{content}</pre>
      </div>
    </div>
  );
}
```
 
---
 
## Props (`RichEditorProps`)
 
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `string` | — | Initial content of the editor |
| `placeholder` | `string` | — | Placeholder text |
| `viewMode` | `boolean` | `false` | Read-only mode |
| `exportType` | `"html" \| "json"` | `"html"` | Output format |
| `height` | `string` | `"150px"` | Editor height |
| `maxHeight` | `string` | — | Maximum editor height |
| `onChange` | `(data: string \| Record<string, unknown>) => void` | — | Callback on content change |
| `className` | `string` | — | Custom CSS class |
 
---
 
## Supported Extensions
 
- Text color and background color
- Text highlighting
- Custom blocks and toolbar buttons for Tiptap
- Ability to add your own extensions
- Full compatibility with `viewMode` (read-only mode)
 
All extensions can be combined to create powerful and fully customized editors.
 
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
