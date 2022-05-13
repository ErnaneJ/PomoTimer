import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "40",
    y: "40",
    width: "176",
    height: "176",
    rx: "24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("circle", {
    cx: "96",
    cy: "84",
    r: "16"
  }), React.createElement("circle", {
    cx: "160",
    cy: "84",
    r: "16"
  }), React.createElement("circle", {
    cx: "96",
    cy: "128",
    r: "16"
  }), React.createElement("circle", {
    cx: "160",
    cy: "128",
    r: "16"
  }), React.createElement("circle", {
    cx: "96",
    cy: "172",
    r: "16"
  }), React.createElement("circle", {
    cx: "160",
    cy: "172",
    r: "16"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "40",
    y: "40",
    width: "176",
    height: "176",
    rx: "24",
    opacity: "0.2"
  }), React.createElement("rect", {
    x: "40",
    y: "40",
    width: "176",
    height: "176",
    rx: "24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "92",
    cy: "84",
    r: "12"
  }), React.createElement("circle", {
    cx: "164",
    cy: "84",
    r: "12"
  }), React.createElement("circle", {
    cx: "92",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "164",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "92",
    cy: "172",
    r: "12"
  }), React.createElement("circle", {
    cx: "164",
    cy: "172",
    r: "12"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M192,32H64A32.1,32.1,0,0,0,32,64V192a32.1,32.1,0,0,0,32,32H192a32.1,32.1,0,0,0,32-32V64A32.1,32.1,0,0,0,192,32ZM92,184a12,12,0,1,1,12-12A12,12,0,0,1,92,184Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,92,140Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,92,96Zm72,88a12,12,0,1,1,12-12A12,12,0,0,1,164,184Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,164,140Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,164,96Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "40",
    y: "40",
    width: "176",
    height: "176",
    rx: "24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("circle", {
    cx: "92",
    cy: "84",
    r: "10"
  }), React.createElement("circle", {
    cx: "164",
    cy: "84",
    r: "10"
  }), React.createElement("circle", {
    cx: "92",
    cy: "128",
    r: "10"
  }), React.createElement("circle", {
    cx: "164",
    cy: "128",
    r: "10"
  }), React.createElement("circle", {
    cx: "92",
    cy: "172",
    r: "10"
  }), React.createElement("circle", {
    cx: "164",
    cy: "172",
    r: "10"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "40",
    y: "40",
    width: "176",
    height: "176",
    rx: "24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("circle", {
    cx: "92",
    cy: "84",
    r: "8"
  }), React.createElement("circle", {
    cx: "164",
    cy: "84",
    r: "8"
  }), React.createElement("circle", {
    cx: "92",
    cy: "128",
    r: "8"
  }), React.createElement("circle", {
    cx: "164",
    cy: "128",
    r: "8"
  }), React.createElement("circle", {
    cx: "92",
    cy: "172",
    r: "8"
  }), React.createElement("circle", {
    cx: "164",
    cy: "172",
    r: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "40",
    y: "40",
    width: "176",
    height: "176",
    rx: "24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "92",
    cy: "84",
    r: "12"
  }), React.createElement("circle", {
    cx: "164",
    cy: "84",
    r: "12"
  }), React.createElement("circle", {
    cx: "92",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "164",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "92",
    cy: "172",
    r: "12"
  }), React.createElement("circle", {
    cx: "164",
    cy: "172",
    r: "12"
  }));
});

var renderPath = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};

var DiceSix = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
DiceSix.displayName = "DiceSix";

export default DiceSix;
//# sourceMappingURL=DiceSix.esm.js.map
