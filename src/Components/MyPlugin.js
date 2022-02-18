import { TraitComponent } from "./imageTraits";
import { traits } from "./traits";
import { imageUpdate } from "./imageUpdate";
import { myBlocks } from "./myBlocks";

export const plugIn = (editor) => {
  myBlocks(editor);
  // traits(editor);
  // TraitComponent(editor);
  // imageUpdate(editor);
};
