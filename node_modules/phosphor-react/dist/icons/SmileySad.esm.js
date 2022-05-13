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
  }), React.createElement("circle", {
    cx: "92",
    cy: "108",
    r: "16"
  }), React.createElement("circle", {
    cx: "164",
    cy: "108",
    r: "16"
  }), React.createElement("path", {
    d: "M165.3,169.8a48,48,0,0,0-74.6,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
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
  }), React.createElement("circle", {
    cx: "92",
    cy: "108",
    r: "12"
  }), React.createElement("circle", {
    cx: "164",
    cy: "108",
    r: "12"
  }), React.createElement("circle", {
    cx: "92",
    cy: "108",
    r: "12"
  }), React.createElement("circle", {
    cx: "164",
    cy: "108",
    r: "12"
  }), React.createElement("path", {
    d: "M169.6,176a48.1,48.1,0,0,0-83.2,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12,12,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm81.6,86.9a7.6,7.6,0,0,1-4,1.1,7.7,7.7,0,0,1-6.9-4,40.1,40.1,0,0,0-69.4,0,8,8,0,1,1-13.8-8,56,56,0,0,1,97,0A8,8,0,0,1,173.6,182.9Z"
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
  }), React.createElement("circle", {
    cx: "92",
    cy: "108",
    r: "10"
  }), React.createElement("circle", {
    cx: "164",
    cy: "108",
    r: "10"
  }), React.createElement("path", {
    d: "M169.6,176a48.1,48.1,0,0,0-83.2,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
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
  }), React.createElement("circle", {
    cx: "92",
    cy: "108",
    r: "8"
  }), React.createElement("circle", {
    cx: "164",
    cy: "108",
    r: "8"
  }), React.createElement("path", {
    d: "M169.6,176a48.1,48.1,0,0,0-83.2,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
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
  }), React.createElement("circle", {
    cx: "92",
    cy: "108",
    r: "12"
  }), React.createElement("circle", {
    cx: "164",
    cy: "108",
    r: "12"
  }), React.createElement("circle", {
    cx: "92",
    cy: "108",
    r: "12"
  }), React.createElement("circle", {
    cx: "164",
    cy: "108",
    r: "12"
  }), React.createElement("path", {
    d: "M169.6,176a48.1,48.1,0,0,0-83.2,0",
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

var SmileySad = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
SmileySad.displayName = "SmileySad";

export default SmileySad;
//# sourceMappingURL=SmileySad.esm.js.map
