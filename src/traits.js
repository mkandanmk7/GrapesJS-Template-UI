// eslint-disable-next-line import/no-anonymous-default-export
export default (editor) => {
  editor.TraitManager.addType("change-image", {
    // Expects as return a simple HTML string or an HTML element
    createInput({ trait }) {
      // Here we can decide to use properties from the trait
      // const traitOpts = trait.get("options") || [];
      // const options = traitOpts.length
      //   ? traitOpts
      //   : [
      //       { id: "url", name: "URL" },
      //       { id: "email", name: "Email" },
      //     ];

      const image = editor.getSelected().attributes.src;
      console.log(image);
      const el = document.createElement("div");
      el.innerHTML = `<img src=${image} id="trait_image" alt="image" height="100" width="100" />`;
      // // Create a new element container and add some content
      // const el = document.createElement("div");
      // el.innerHTML = `
      //       <select class="href-next__type">
      //         ${options
      //
      // </div>
      //       <div class="href-next__email-inputs">
      //         <input class="href-next__email" placeholder="Insert email"/>
      //         <input class="href-next__email-subject" placeholder="Insert subject"/>
      //       </div>
      //     `;

      // // Let's make our content interactive
      // const inputsUrl = el.querySelector(".href-next__url-inputs");
      // const inputsEmail = el.querySelector(".href-next__email-inputs");
      // const inputType = el.querySelector(".href-next__type");
      // inputType.addEventListener("change", (ev) => {
      //   switch (ev.target.value) {
      //     case "url":
      //       inputsUrl.style.display = "";
      //       inputsEmail.style.display = "none";
      //       break;
      //     case "email":
      //       inputsUrl.style.display = "none";
      //       inputsEmail.style.display = "";
      //       break;
      //     default:
      //       break;
      //   }
      // });

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
