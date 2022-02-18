import "./App.css";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css";
import "grapesjs/dist/css/grapes.min.css"
import "grapesjs/dist/grapes.min.js";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js";
import { plugIn } from "./Components/MyPlugin";
import { useEffect } from "react";
import  grapesjs from "grapesjs";
function App() {

  useEffect(() => {
    grapesjs.init({
      container: "#gjs",
      plugins: ["gjs-preset-webpage",plugIn],
      // pluginsOpts: {
      //   "grapesjs-mjml": {/* ...options */ }
      // }

    })
  }, [])

  return (
    <>
      <div id="gjs"> </div>
    </>
  );
}

export default App;

//  <mjml>
//           <mj-body>
//             {/* <!-- Your MJML body here --> */}
//             <mj-section>
//               <mj-column>
//                 <mj-text>My Company</mj-text>
//               </mj-column>
//             </mj-section>
//           </mj-body>
//         </mjml>