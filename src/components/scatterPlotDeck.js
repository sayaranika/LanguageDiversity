import React, { useState } from "react";
import DeckGL from "deck.gl";
import { StaticMap } from "react-map-gl";
import { ScatterplotLayer } from "@deck.gl/layers";

const REACT_APP_MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2F5YW5pa2EiLCJhIjoiY2toaHM2ajlkMDd1eDJ6cGgxM2dmdThzOSJ9.xlEQGt0fM1CT2ZS_N8iV-Q";
// data needed for overlay here

var data;

const INITIAL_VIEW_STATE = {
  longitude: -123.07797,
  latitude: 49.314084,
  zoom: 10,
  maxZoom: 16,
  pitch: 0,
  bearing: 0,
};

const mapStyle = "mapbox://styles/sayanika/ckhxttbed165819qr1xoou0it";
const radius = 30;
var maleColor = [0, 128, 255];
var femaleColor = [255, 0, 128];

export class LayeredMap extends React.Component {
  render() {
    // below, add whatever layers you need to overlay on your map
    const layer = [
      new ScatterplotLayer({
        id: "scatter-plot",
        data: "../data/lang_diversity.json",
        radiusScale: radius,
        radiusMinPixels: 0.25,
        getPosition: (d) => [d[0], d[1]],
        getFillColor: (d) => femaleColor,
        getRadius: 1,
        updateTriggers: {
          data,
          getPosition: (d) => [d.coordinates[0], d.coordinates[1]],
        },
      }),
    ];
    return (
      <React.Fragment>
        <DeckGL
          layers={layer}
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
        >
          <StaticMap
            reuseMaps
            mapStyle={mapStyle}
            mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
            preventStyleDiffing={true}
          />
        </DeckGL>
      </React.Fragment>
    );
  }
}
