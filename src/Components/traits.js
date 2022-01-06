export const traits = (editor) => {
  editor.DomComponents.addType("mj-image", {
    model: {
      defaults: {
        traits: [
          {
            type: "change_image",
            image: "add",
            command: (editor) => {
              const selectedComp = editor.getSelected();
              console.log("selected comp", selectedComp);
              editor.runCommand("open-assets", {
                target: selectedComp,
              });
            },
          },
          {
            type: "button",
            text: "Add Image",

            full: true,
            command: (editor) => {
              const selectedComp = editor.getSelected();
              console.log("selected comp", selectedComp);
              editor.runCommand("open-assets", {
                target: selectedComp,
              });
            },
          },
        ],
      },
    },
  });
};
