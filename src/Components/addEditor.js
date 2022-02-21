export const addEditor = (editor) => {
    console.log("editor page:",editor)
    editor.Commands.add("new-tool-cmd",{
        run:(editor)=>console.log("new tool ")
    })
}