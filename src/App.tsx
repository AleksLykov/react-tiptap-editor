import { RichEditor } from "./RichEditor/rich-editor";

function App() {
  const content = `<p><strong>Welcome to the Tiptap Rich Editor!</strong></p><p>This is a simple example of a rich text editor built with Tiptap. You can use the toolbar above to format your text, insert images, and more.</p><p>Feel free to explore the features and customize it to your needs!</p>`;

  const onChange = (message: unknown) => console.log("message", message);

  return (
    <>
      <RichEditor
        data={content}
        viewMode={false}
        exportType="json"
        placeholder={"Start writing..."}
        onChange={onChange}
      />
    </>
  );
}

export default App;
