import React from "react";
import { GrapesjsReact as Editor } from "grapesjs-react";
import traits from "./traits";
import "../node_modules/grapesjs/dist/css/grapes.min.css";

const AppNew = () => {
  const init = (editor) => {
    const ele = traits(editor);
    console.log(ele);

    editor.on("component:update", () => {
      const selectedComp = editor.getSelected().attributes.src; // selectedComp's immg src;
      const el = document.getElementById("new_image");
      if (selectedComp !== el.src) {
        el.src = selectedComp;
      }
    });

    editor.DomComponents.addType("mj-image", {
      model: {
        defaults: {
          traits: [
            {
              type: "new_image",
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
  return (
    <Editor
      id="grapesjs-react"
      plugins={["grapesjs-mjml"]}
      onInit={init}
      storageManager={{
        type: "remote",
        stepsBeforeSave: 3,
        urlStore: "http://localhost:3000/template.json",
        urlLoad: "http://localhost:3000/template.json",
      }}
    ></Editor>
  );
};

export default AppNew;
