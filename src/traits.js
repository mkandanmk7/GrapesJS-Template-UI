// eslint-disable-next-line import/no-anonymous-default-export
export default (editor) => {
  // editor.TraitManager.addType("new_image", {
  //   createInput() {
  //     const newImage = editor.getSelected().attributes.src;
  //     console.log("selected new image src", newImage);
  //     const el = document.createElement("div"); //new div element
  //     el.innerHTML = `<img src=${newImage} id="new_image" height="100" width="100" alt="image" />`;
  //     return el;
  //   },
  // });
  editor.TraitManager.addType("change_image", {
    // Expects as return a simple HTML string or an HTML element
    createInput({ trait }) {
      const image = editor.getSelected().attributes.src;
      console.log(image);
      const modal = () => {
        const selectedComp = editor.getSelected();
        editor.runCommand("open-assets", {
          target: selectedComp,
        });
      };
      const el = document.createElement("div");
      el.innerHTML = `<img src=${image}  id="trait_image" alt="image" height="100" width="100" />`;
      el.querySelector("#trait_image").addEventListener("click", () => modal());
      return el;
    },
  });
  // const selectd = editor.getSelected();
  // selectd.addTrait(
  //   {
  //     type: "button",
  //     name: "selBtn",
  //     label: "selected",
  //   },
  //   { at: 0 }
  // );
};
