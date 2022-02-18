import { map } from "lodash";

export const myBlocks = (editor) => {
    console.log("editor:", editor);
    editor.on('component:selected', component => {
        console.log("component:",component)
        let selectedComp = editor.getSelected();
        console.log(selectedComp)
        let selectedCompId=selectedComp.attributes.attributes.id 
        if(selectedCompId === "iw5f"){
            console.log("id :",selectedCompId)
            let toolbar=selectedComp.attributes.toolbar;
            console.log('toolbar', toolbar)
            let setClass=map(toolbar,(val,index)=>{
                val.attributes.class={display:"none"}
                // console.log("value:",val)
            })
        }
        else return console.log("selected comp is not wrapper comp")
    });

    // get components
    // let comp=editor.Components;
    // let wrapper=comp.getWrapper();
    // wrapper.set("style",{"background-color":"green"});

    editor.on("component:add", () => {
        return {
            tagName: "div",
            removable: true,
            draggable: true,
            copyable: true,
            content: `<div><h3>Hello World ...!</h3><button>Submit</button></div>`,
            style: { color: "green" },
            attributes: { title: "here" }
        }
    })

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

    //     selectedComp.attributes.toolbar[3].attributes.class = { display: "none" }
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

