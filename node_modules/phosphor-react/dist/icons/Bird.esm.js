import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "160",
    cy: "72",
    r: "16"
  }), React.createElement("path", {
    d: "M208,96v24a96,96,0,0,1-96,96H12L104,96V76A52,52,0,0,1,206.3,62.9L232,80Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "90.7",
    y1: "176",
    x2: "121.3",
    y2: "136",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M208,96v24a96,96,0,0,1-96,96H8L104,96V76A52,52,0,0,1,206.3,62.9L232,80Z",
    opacity: "0.2"
  }), React.createElement("circle", {
    cx: "164",
    cy: "68",
    r: "12"
  }), React.createElement("line", {
    x1: "120",
    y1: "136",
    x2: "80",
    y2: "184",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M208,96v24a96,96,0,0,1-96,96H8L104,96V76A52,52,0,0,1,206.3,62.9L232,80Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M236.4,73.3,213.2,57.9A60,60,0,0,0,96,76V93.2L1.8,211A8,8,0,0,0,8,224H112A104.2,104.2,0,0,0,216,120V100.3l20.4-13.6a8,8,0,0,0,0-13.4ZM110.1,141.1l-40,48a8,8,0,0,1-12.2-10.2l40-48a8,8,0,1,1,12.2,10.2ZM164,80a12,12,0,1,1,12-12A12,12,0,0,1,164,80Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "164",
    cy: "68",
    r: "10"
  }), React.createElement("line", {
    x1: "120",
    y1: "136",
    x2: "80",
    y2: "184",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M208,96v24a96,96,0,0,1-96,96H8L104,96V76A52,52,0,0,1,206.3,62.9L232,80Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "164",
    cy: "68",
    r: "8"
  }), React.createElement("line", {
    x1: "120",
    y1: "136",
    x2: "80",
    y2: "184",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M208,96v24a96,96,0,0,1-96,96H8L104,96V76A52,52,0,0,1,206.3,62.9L232,80Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "164",
    cy: "68",
    r: "12"
  }), React.createElement("line", {
    x1: "120",
    y1: "136",
    x2: "80",
    y2: "184",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M208,96v24a96,96,0,0,1-96,96H8L104,96V76A52,52,0,0,1,206.3,62.9L232,80Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});

var renderPath = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};

var Bird = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Bird.displayName = "Bird";

export default Bird;
//# sourceMappingURL=Bird.esm.js.map
