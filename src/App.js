import "./App.css";
// import GrapesJSMain from "./Components/GrapesJSMain";
import { GrapesjsReact as Editor } from "grapesjs-react";
import "../node_modules/grapesjs/dist/css/grapes.min.css";
import Traits from "./traits";

function App() {
  const onInit = (editor) => {
    console.log("global", editor);
    Traits(editor);

    //update image
    editor.on("component:update", () => {
      const selected = editor.getSelected().attributes.src;
      console.log(selected);
      const element = document.getElementById("trait_image");
      console.log(element);
      if (element.src !== selected) {
        element.src = selected;
      }
    });

    editor.DomComponents.addType("mj-image", {
      model: {
        defaults: {
          traits: [
            {
              type: "change-image",
              name: "image",
              label: "Image",
            },
            {
              type: "button",
              // ...
              text: "Click me",
              full: true, // Full width button
              command: (editor) => {
                const selectedComp = editor.getSelected();
                console.log(selectedComp.attributes.src);
                console.log(selectedComp);
                editor.runCommand("open-assets", {
                  target: selectedComp,
                });
                // alert("Hello");
              },
              // or you can just specify the Command ID
              // command: 'some-command',
            },
          ],
          attributes: { type: "text", required: true },
        },
      },
    });
  };
  // editor.DomComponents.addType("mj-image", {
  //   isComponent: (el) => el.tagName === "INPUT",
  //   model: {
  //     defaults: {
  //       traits: [
  //         // Strings are automatically converted to text types
  //         "name", // Same as: { type: 'text', name: 'name' }
  //         "placeholder",
  //         {
  //           type: "select", // Type of the trait
  //           label: "Type", // The label you will see in Settings
  //           name: "type", // The name of the attribute/property to use on component
  //           options: [
  //             { id: "text", name: "Text" },
  //             { id: "email", name: "Email" },
  //             { id: "password", name: "Password" },
  //             { id: "number", name: "Number" },
  //           ],
  //         },
  //         {
  //           type: "checkbox",
  //           name: "required",
  //         },
  //       ],
  //       // As by default, traits are binded to attributes, so to define
  //       // their initial value we can use attributes
  //       attributes: { type: "text", required: true },
  //     },
  //   },
  // });
  // };
  return (
    <div>
      <Editor
        id="grapesjs-react"
        plugins={["grapesjs-mjml"]}
        onInit={onInit}
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
