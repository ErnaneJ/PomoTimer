import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "32",
    y: "48",
    width: "192",
    height: "160",
    rx: "8",
    transform: "translate(256) rotate(90)",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "92",
    y1: "76",
    x2: "164",
    y2: "76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("circle", {
    cx: "104",
    cy: "128",
    r: "16"
  }), React.createElement("circle", {
    cx: "152",
    cy: "128",
    r: "16"
  }), React.createElement("circle", {
    cx: "104",
    cy: "176",
    r: "16"
  }), React.createElement("circle", {
    cx: "152",
    cy: "176",
    r: "16"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "80",
    y: "64",
    width: "96",
    height: "48",
    opacity: "0.2"
  }), React.createElement("rect", {
    x: "80",
    y: "64",
    width: "96",
    height: "48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("rect", {
    x: "32",
    y: "48",
    width: "192",
    height: "160",
    rx: "8",
    transform: "translate(256 0) rotate(90)",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "88",
    cy: "148",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "148",
    r: "12"
  }), React.createElement("circle", {
    cx: "168",
    cy: "148",
    r: "12"
  }), React.createElement("circle", {
    cx: "88",
    cy: "188",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "188",
    r: "12"
  }), React.createElement("circle", {
    cx: "168",
    cy: "188",
    r: "12"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM88,200a12,12,0,1,1,12-12A12,12,0,0,1,88,200Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,88,160Zm40,40a12,12,0,1,1,12-12A12,12,0,0,1,128,200Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,128,160Zm40,40a12,12,0,1,1,12-12A12,12,0,0,1,168,200Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,168,160Zm16-56a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "80",
    y: "64",
    width: "96",
    height: "48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("rect", {
    x: "32",
    y: "48",
    width: "192",
    height: "160",
    rx: "8",
    transform: "translate(256) rotate(90)",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("circle", {
    cx: "88",
    cy: "148",
    r: "10"
  }), React.createElement("circle", {
    cx: "128",
    cy: "148",
    r: "10"
  }), React.createElement("circle", {
    cx: "168",
    cy: "148",
    r: "10"
  }), React.createElement("circle", {
    cx: "88",
    cy: "188",
    r: "10"
  }), React.createElement("circle", {
    cx: "128",
    cy: "188",
    r: "10"
  }), React.createElement("circle", {
    cx: "168",
    cy: "188",
    r: "10"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "80",
    y: "64",
    width: "96",
    height: "48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("rect", {
    x: "32",
    y: "48",
    width: "192",
    height: "160",
    rx: "8",
    transform: "translate(256) rotate(90)",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("circle", {
    cx: "88",
    cy: "148",
    r: "8"
  }), React.createElement("circle", {
    cx: "128",
    cy: "148",
    r: "8"
  }), React.createElement("circle", {
    cx: "168",
    cy: "148",
    r: "8"
  }), React.createElement("circle", {
    cx: "88",
    cy: "188",
    r: "8"
  }), React.createElement("circle", {
    cx: "128",
    cy: "188",
    r: "8"
  }), React.createElement("circle", {
    cx: "168",
    cy: "188",
    r: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "80",
    y: "64",
    width: "96",
    height: "48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("rect", {
    x: "32",
    y: "48",
    width: "192",
    height: "160",
    rx: "8",
    transform: "translate(256) rotate(90)",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "88",
    cy: "148",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "148",
    r: "12"
  }), React.createElement("circle", {
    cx: "168",
    cy: "148",
    r: "12"
  }), React.createElement("circle", {
    cx: "88",
    cy: "188",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "188",
    r: "12"
  }), React.createElement("circle", {
    cx: "168",
    cy: "188",
    r: "12"
  }));
});

var renderPath = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};

var Calculator = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Calculator.displayName = "Calculator";

export default Calculator;
//# sourceMappingURL=Calculator.esm.js.map
