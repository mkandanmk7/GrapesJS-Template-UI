export const imageUpdate = (editor) => {
  editor.on("component:update", () => {
    const selectedComponent = editor.getSelected().attributes.attributes.src;
    const el = document.getElementById("change_image");
    if (el && el.src !== selectedComponent) {
      document.getElementById("trait_img").src = selectedComponent;
    }
  });
};
