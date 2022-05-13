import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "128",
    y1: "192",
    x2: "128",
    y2: "240",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16",
    opacity: "0.2"
  }), React.createElement("polygon", {
    points: "128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "128",
    y1: "192",
    x2: "128",
    y2: "240",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M231.2,195.5A8,8,0,0,1,224,200H136v40a8,8,0,0,1-16,0V200H32a8,8,0,0,1-6.3-12.9L71.6,128H48a8,8,0,0,1-6.3-12.9l80-104a8,8,0,0,1,12.6,0l80,104A8,8,0,0,1,208,128H184.4l45.9,59.1A8,8,0,0,1,231.2,195.5Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "128",
    y1: "192",
    x2: "128",
    y2: "240",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "128",
    y1: "192",
    x2: "128",
    y2: "240",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "128",
    y1: "192",
    x2: "128",
    y2: "240",
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

var TreeEvergreen = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
TreeEvergreen.displayName = "TreeEvergreen";

export default TreeEvergreen;
//# sourceMappingURL=TreeEvergreen.esm.js.map
