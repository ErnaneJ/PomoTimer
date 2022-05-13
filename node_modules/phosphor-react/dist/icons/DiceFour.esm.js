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
    cy: "96",
    r: "16"
  }), React.createElement("circle", {
    cx: "160",
    cy: "96",
    r: "16"
  }), React.createElement("circle", {
    cx: "96",
    cy: "160",
    r: "16"
  }), React.createElement("circle", {
    cx: "160",
    cy: "160",
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
    cx: "100",
    cy: "100",
    r: "12"
  }), React.createElement("circle", {
    cx: "156",
    cy: "100",
    r: "12"
  }), React.createElement("circle", {
    cx: "100",
    cy: "156",
    r: "12"
  }), React.createElement("circle", {
    cx: "156",
    cy: "156",
    r: "12"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M192,32H64A32.1,32.1,0,0,0,32,64V192a32.1,32.1,0,0,0,32,32H192a32.1,32.1,0,0,0,32-32V64A32.1,32.1,0,0,0,192,32ZM100,168a12,12,0,1,1,12-12A12,12,0,0,1,100,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,100,112Zm56,56a12,12,0,1,1,12-12A12,12,0,0,1,156,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,156,112Z"
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
    cx: "100",
    cy: "100",
    r: "10"
  }), React.createElement("circle", {
    cx: "156",
    cy: "100",
    r: "10"
  }), React.createElement("circle", {
    cx: "100",
    cy: "156",
    r: "10"
  }), React.createElement("circle", {
    cx: "156",
    cy: "156",
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
    cx: "100",
    cy: "100",
    r: "8"
  }), React.createElement("circle", {
    cx: "156",
    cy: "100",
    r: "8"
  }), React.createElement("circle", {
    cx: "100",
    cy: "156",
    r: "8"
  }), React.createElement("circle", {
    cx: "156",
    cy: "156",
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
    cx: "100",
    cy: "100",
    r: "12"
  }), React.createElement("circle", {
    cx: "156",
    cy: "100",
    r: "12"
  }), React.createElement("circle", {
    cx: "100",
    cy: "156",
    r: "12"
  }), React.createElement("circle", {
    cx: "156",
    cy: "156",
    r: "12"
  }));
});

var renderPath = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};

var DiceFour = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
DiceFour.displayName = "DiceFour";

export default DiceFour;
//# sourceMappingURL=DiceFour.esm.js.map
