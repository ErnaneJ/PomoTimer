import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("polyline", {
    points: "85.8 164.8 96 152 112 172 128 152 144 172 160 152 170.2 164.8",
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
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    opacity: "0.2"
  }), React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "80 172 96 152 112 172 128 152 144 172 160 152 176 172",
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
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12,12,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm89,82.2a7.9,7.9,0,0,1-5,1.8,7.8,7.8,0,0,1-6.2-3L160,164.8,150.2,177a7.9,7.9,0,0,1-12.4,0L128,164.8,118.2,177a7.9,7.9,0,0,1-12.4,0L96,164.8,86.2,177a8,8,0,0,1-12.4-10l16-20a7.9,7.9,0,0,1,12.4,0l9.8,12.2,9.8-12.2a7.9,7.9,0,0,1,12.4,0l9.8,12.2,9.8-12.2a7.9,7.9,0,0,1,12.4,0l16,20A7.9,7.9,0,0,1,181,178.2Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("polyline", {
    points: "80 172 96 152 112 172 128 152 144 172 160 152 176 172",
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
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("polyline", {
    points: "80 172 96 152 112 172 128 152 144 172 160 152 176 172",
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
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "80 172 96 152 112 172 128 152 144 172 160 152 176 172",
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
  }));
});

var renderPath = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};

var SmileyNervous = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
SmileyNervous.displayName = "SmileyNervous";

export default SmileyNervous;
//# sourceMappingURL=SmileyNervous.esm.js.map
