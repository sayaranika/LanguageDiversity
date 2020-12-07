import React from "react";
import { LayeredMap } from "../components/scatterPlotDeck";
import Navbar from "./Navbar";

function Density() {
  return (
    <div id="app">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mapContainer">
            <LayeredMap />
          </div>
          <div className="col-2">hello</div>
        </div>
      </div>
      {/* <LayeredMap /> */}
    </div>
    // <div>
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-10">
    //         <LayeredMap />
    //       </div>
    //       <div className="col-4">Two</div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Density;
