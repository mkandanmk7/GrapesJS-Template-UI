import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import React, { useEffect } from "react";
import { Grapesjs_Config } from "./Grapesjs_Config";

const GrapesJSMain = () => {
  useEffect(() => {
    loadGrapesJS();
  }, []);

  const loadComponents = (editor) => {};

  const loadGrapesJS = async () => {
    const editor = await grapesjs.init(Grapesjs_Config());
    loadComponents(editor);
  };

  return (
    <div>
      <div id="gjs">
        <h1>Hello World Component!</h1>
      </div>
      <div id="blocks"></div>
    </div>
  );
};

export default GrapesJSMain;
