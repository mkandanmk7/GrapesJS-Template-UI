import { TraitComponent } from "./imageTraits";
import { traits } from "./traits";
import { imageUpdate } from "./imageUpdate";
import { myBlocks } from "./myBlocks";
import { addEditor } from "./addEditor";

export const plugIn = (editor) => {
  myBlocks(editor);
  addEditor(editor)
  // traits(editor);
  // TraitComponent(editor);
  // imageUpdate(editor);
};
