import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M156.2,219.8A97.2,97.2,0,0,1,128,224a96,96,0,1,1,96-96,97.2,97.2,0,0,1-4.2,28.2Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("circle", {
    cx: "92",
    cy: "108",
    r: "16"
  }), React.createElement("circle", {
    cx: "164",
    cy: "108",
    r: "16"
  }), React.createElement("path", {
    d: "M169.6,152a48.1,48.1,0,0,1-83.2,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M156.2,219.8A97.2,97.2,0,0,1,128,224a96,96,0,1,1,96-96,97.2,97.2,0,0,1-4.2,28.2Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M156.2,219.8A97.2,97.2,0,0,1,128,224a96,96,0,1,1,96-96,97.2,97.2,0,0,1-4.2,28.2Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "92",
    cy: "108",
    r: "12"
  }), React.createElement("circle", {
    cx: "164",
    cy: "108",
    r: "12"
  }), React.createElement("path", {
    d: "M169.6,152a48.1,48.1,0,0,1-83.2,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,24a104,104,0,0,0,0,208,102.2,102.2,0,0,0,30.6-4.6,6.7,6.7,0,0,0,3.3-2l63.5-63.5a7.2,7.2,0,0,0,2-3.3A102.2,102.2,0,0,0,232,128,104.2,104.2,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12,12,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm84.5,60a56,56,0,0,1-97,0,8,8,0,1,1,13.8-8,40.1,40.1,0,0,0,69.4,0,8,8,0,0,1,13.8,8Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M156.2,219.8A97.2,97.2,0,0,1,128,224a96,96,0,1,1,96-96,97.2,97.2,0,0,1-4.2,28.2Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("circle", {
    cx: "92",
    cy: "108",
    r: "10"
  }), React.createElement("circle", {
    cx: "164",
    cy: "108",
    r: "10"
  }), React.createElement("path", {
    d: "M169.6,152a48.1,48.1,0,0,1-83.2,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M156.2,219.8A97.2,97.2,0,0,1,128,224a96,96,0,1,1,96-96,97.2,97.2,0,0,1-4.2,28.2Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("circle", {
    cx: "92",
    cy: "108",
    r: "8"
  }), React.createElement("circle", {
    cx: "164",
    cy: "108",
    r: "8"
  }), React.createElement("path", {
    d: "M169.6,152a48.1,48.1,0,0,1-83.2,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M156.2,219.8A97.2,97.2,0,0,1,128,224a96,96,0,1,1,96-96,97.2,97.2,0,0,1-4.2,28.2Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "92",
    cy: "108",
    r: "12"
  }), React.createElement("circle", {
    cx: "164",
    cy: "108",
    r: "12"
  }), React.createElement("path", {
    d: "M169.6,152a48.1,48.1,0,0,1-83.2,0",
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

var SmileySticker = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
SmileySticker.displayName = "SmileySticker";

export default SmileySticker;
//# sourceMappingURL=SmileySticker.esm.js.map
