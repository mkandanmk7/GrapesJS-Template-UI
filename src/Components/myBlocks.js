import { map } from "lodash";

export const myBlocks = (editor) => {

    const $ = editor.$;

    console.log("editor:", editor);
    let selectedCompId;
    editor.on('component:selected', component => {

        // const newTool = {
        //     icon: "fa fa-plus-square",
        //     title: "check Toolbar",
        //     command: "",
        //     id:""
        // };
        // const defaultToolbar = component.get("toolbar");
        // const isToolbarExist = defaultToolbar.filter(
        //     (tool) => tool.command === newTool.command);

        //     if(!isToolbarExist){
        //         defaultToolbar.unshift({
        //             id:newTool.id,
        //             attributes:{class:newTool.icon,title:newTool.title},
        //             command:newTool.command,
        //         })
        //     }


         selectedCompId = component.attributes.attributes.id

        const hanldeToolbar = (value) => {
            $('.gjs-toolbar').each(function () {
                this.style.right = value;
            })
        }

        const isNotWrapper = (value) => {
            $('.gjs-toolbar').each(function () {
                this.style.right = value;
            })
        }

        if (selectedCompId === "iwgn") {
            hanldeToolbar("100000px")
        }
        else {
            isNotWrapper("auto")
        }
    });

    const keyCheck = (event) => {
        console.log("in keyCheck")
        let deleteKey = 46;
        console.log(event.keyCode)
        if (event.keyCode === deleteKey) {

            event.preventDefault();
            window.confirm("dont delete")
           

        }
        else {
            console.log("not delete key")
        }
    }
   
    editor.on("component:remove", (component) => {
        

        console.log("component in remove", component)
       let selectedCompoId = selectedCompId;
       console.log(selectedCompoId)
        if (selectedCompoId === "iwgn") {

            console.log("wrapper comp cant delete")
            document.onkeydown = keyCheck;
        }
        else {
            console.log("in else")
            // document.addEventListener("keydown", keyCheck);

        }

    })

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






