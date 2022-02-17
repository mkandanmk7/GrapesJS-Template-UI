import "./App.css";
import  grapesjs  from "grapesjs";
// import GrapesJSMain from "./Components/GrapesJSMain";
// import { GrapesjsReact as Editor } from "grapesjs-react";


//---------------------min css------------------------
// import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/css/grapes.min.css"

// import "grapesjs-mjml/dist/grapesjs-mjml.min.css";
// import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css"


// -----------------------min.js files-----------------------
// import "grapesjs/dist/grapes.min.js";
// import "grapesjs-mjml/dist/grapesjs-mjml.min.js"
// import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js"


import { plugIn } from "./Components/MyPlugin";
import { useEffect } from "react";
function App() {

  useEffect(()=>{
    grapesjs.init({
      container:"#gjs",
      plugins: ['grapesjs-mjml'],
      pluginsOpts: {
        'grapesjs-mjml': {/* ...options */}
      }

    })
  },[])

  return (
    <div>
   
      <div id="gjs">
      <mjml>
    <mj-body>
      {/* <!-- Your MJML body here --> */}
      <mj-section>
        <mj-column>
          <mj-text>My Company</mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>
      </div>
    </div>
  );
}

export default App;
