import "./App.css";
// import GrapesJSMain from "./Components/GrapesJSMain";
import { GrapesjsReact as Editor } from "grapesjs-react";
import "../node_modules/grapesjs/dist/css/grapes.min.css";
import { plugIn } from "./Components/MyPlugin";
function App() {
  return (
    <div>
      <Editor
        id="grapesjs-react"
        plugins={["grapesjs-mjml", plugIn]}
        storageManager={{
          type: "remote",
          stepsBeforeSave: 3,
          urlStore: "http://localhost:3000/template.json",
          urlLoad: "http://localhost:3000/template.json",
        }}
      ></Editor>
    </div>
  );
}

export default App;
