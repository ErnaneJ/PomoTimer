import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("ellipse", {
    cx: "128",
    cy: "58",
    rx: "64",
    ry: "34",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M64,58V198c0,18.8,28.7,34,64,34s64-15.2,64-34V58",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("ellipse", {
    cx: "128",
    cy: "58",
    rx: "64",
    ry: "34",
    opacity: "0.2"
  }), React.createElement("ellipse", {
    cx: "128",
    cy: "58",
    rx: "64",
    ry: "34",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M64,58V198c0,18.8,28.7,34,64,34s64-15.2,64-34V58",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,16C87.6,16,56,34.4,56,58V198c0,23.6,31.6,42,72,42s72-18.4,72-42V58C200,34.4,168.4,16,128,16Zm0,208c-33,0-56-13.7-56-26V84.7c13.1,9.4,33.1,15.3,56,15.3s42.9-5.9,56-15.3V198C184,210.3,161,224,128,224Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("ellipse", {
    cx: "128",
    cy: "58",
    rx: "64",
    ry: "34",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M64,58V198c0,18.8,28.7,34,64,34s64-15.2,64-34V58",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("ellipse", {
    cx: "128",
    cy: "58",
    rx: "64",
    ry: "34",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M64,58V198c0,18.8,28.7,34,64,34s64-15.2,64-34V58",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("ellipse", {
    cx: "128",
    cy: "58",
    rx: "64",
    ry: "34",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M64,58V198c0,18.8,28.7,34,64,34s64-15.2,64-34V58",
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

var Cylinder = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Cylinder.displayName = "Cylinder";

export default Cylinder;
//# sourceMappingURL=Cylinder.esm.js.map
