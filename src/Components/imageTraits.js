export const TraitComponent = (editor) => {
  editor.TraitManager.addType("change_image", {
    createInput({ trait }) {
      const traitOpts = trait.get("command") || (() => {});
      console.log(traitOpts);
      const selected = editor.getSelected().attributes.src;
      const el = document.createElement("div");
      el.innerHTML = `<img src="${selected}" id="change_image" height="100" width="100" />`;
      el.querySelector("#change_image").addEventListener("click", () => {
        traitOpts(editor);
      });
      return el;
    },
  });
};
