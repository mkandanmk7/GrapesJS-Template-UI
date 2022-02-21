import { map } from "lodash";

export const myBlocks = (editor) => {

    const $ = editor.$;

    // console.log("editor:", editor);

    editor.on('component:selected', component => {
        console.log(component)


        //new Toolbar
        const newTool = {
            icon: "fa fa-plus-square",
            title: "check Toolbar",
            command: "new-tool-cmd",
            id: "new-tool"
        };
        const defaultToolbar = component.get("toolbar");
        const isToolbarExist = defaultToolbar.find(
            (tool) => tool.command === newTool.command);

        if (!isToolbarExist) {
            defaultToolbar.unshift({
                id: newTool.id,
                attributes: { class: newTool.icon, title: newTool.title },
                command: newTool.command,
            })
            component.set("toolbar", defaultToolbar);

        }


        //hide toolbar
        const toggleToolbar = (action) => {
            const toggle = {
                "show": "auto",
                "hide": "100000px",
            }
            $('.gjs-toolbar').each(function () {
                this.style.right = toggle[action];
            })
        };

        //get selected comp id;
        let selectedCompId = component.attributes.attributes.id;

        // check selected comp is wrapper;
        if (selectedCompId === "irz2") {
            component.attributes.removable = false;
            toggleToolbar("hide")
        }
        else return toggleToolbar("show")
    });




    // const keyCheck = (event) => {
    //     console.log("in keyCheck")
    //     let deleteKey = 46;
    //     console.log(event.keyCode)
    //     if (event.keyCode === deleteKey) {

    //         event.preventDefault();
    //         window.confirm("dont delete")
    //     }
    //     else {
    //         console.log("not delete key")
    //     }
    // }                                                            

    // editor.on("component:remove", (component) => {

    //     let isRemovable=component.attributes.removable;
    //     console.log('delete:isRemovable', isRemovable)
    //     console.log("component in remove", component)
    //    let selectedCompoId = component.attributes.attributes.id;;
    //    console.log(selectedCompoId)
    //     if (selectedCompoId && selectedCompoId.toString() === "irz2") {

    //         console.log("wrapper comp cant delete");
    //         let isRemovable=component.attributes.removable;
    //         isRemovable=false;

    //     }
    //     else {
    //         console.log("in else")
    //         document.onkeydown = keyCheck;
    //         // document.addEventListener("keydown", keyCheck);

    //     }

    // })

    // getToolbar.style.display="none";
    //   .gjs-toolbar {dispaly:"none"}
    // console.log("id :", selectedCompId)
    // let toolbar = component.attributes.toolbar;
    // console.log('toolbar', toolbar)
    // let setClass = map(toolbar, (val, index) => {
    //     val.attributes.class = { display: "none" }
    //     // console.log("value:",val)
    // })


    // get components
    // let comp=editor.Components;
    // let wrapper=comp.getWrapper();
    // wrapper.set("style",{"background-color":"green"});

    // editor.on("component:add", () => {
    //     return {
    //         tagName: "div",
    //         removable: true,
    //         draggable: true,
    //         copyable: true,
    //         content: `<div><h3>Hello World ...!</h3><button>Submit</button></div>`,
    //         style: { color: "green" },
    //         attributes: { title: "here" }
    //     }
    // })

    // let newComp=comp.addComponent({
    //     tagName:"div",
    //     removable:true,
    //     draggable:true,
    //     copyable:true,
    //     content:`<div><h3>Hello World ...!</h3><button>Submit</button></div>`,
    //     style:{color:"green"},
    //     attributes:{title:"here"}

    // })

    // iw5f
    // editor.on("component:update", () => {

    //     component.attributes.toolbar[3].attributes.class = { display: "none" }
    // })





    // editor.on("component:add",()=>{
    //     return {
    //     tagName: 'div',
    //     components: [
    //       {
    //         type: 'image',
    //         attributes: { src: 'https://path/image' },
    //       }, {
    //         tagName: 'span',
    //         type: 'text',
    //         attributes: { title: 'foo' },
    //         components: [{
    //           type: 'textnode',
    //           content: 'Hello world!!!'
    //         }]
    //       }
    //     ]
    // }
    //   })
}






