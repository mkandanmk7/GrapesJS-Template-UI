import { TraitComponent } from "./imageTraits";
import { traits } from "./traits";
import { imageUpdate } from "./imageUpdate";

export const plugIn = (editor) => {
  traits(editor);
  TraitComponent(editor);
  imageUpdate(editor);
};
