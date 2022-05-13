import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("ellipse", {
    cx: "128",
    cy: "128",
    rx: "72",
    ry: "104",
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
    cy: "128",
    rx: "72",
    ry: "104",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,240c-25.8,0-47-12.6-61.4-36.4C54.6,183.8,48,157,48,128s6.6-55.9,18.6-75.6C81,28.6,102.2,16,128,16s47,12.6,61.4,36.4C201.4,72.1,208,99,208,128s-6.6,55.8-18.6,75.6C175,227.4,153.8,240,128,240Zm0-208c-44.2,0-64,48.2-64,96s19.8,96,64,96,64-48.2,64-96S172.2,32,128,32Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("ellipse", {
    cx: "128",
    cy: "128",
    rx: "72",
    ry: "104",
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
    cy: "128",
    rx: "72",
    ry: "104",
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
    cy: "128",
    rx: "72",
    ry: "104",
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

var NumberZero = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
NumberZero.displayName = "NumberZero";

export default NumberZero;
//# sourceMappingURL=NumberZero.esm.js.map
