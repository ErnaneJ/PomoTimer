import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M67.2,121.2,187.8,47.4A8,8,0,0,1,200,54.3V201.7a8,8,0,0,1-12.2,6.9L67.2,134.8A8,8,0,0,1,67.2,121.2Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "56",
    y1: "40",
    x2: "56",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M67.2,121.2,187.8,47.4A8,8,0,0,1,200,54.3V201.7a8,8,0,0,1-12.2,6.9L67.2,134.8A8,8,0,0,1,67.2,121.2Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M67.2,121.2,187.8,47.4A8,8,0,0,1,200,54.3V201.7a8,8,0,0,1-12.2,6.9L67.2,134.8A8,8,0,0,1,67.2,121.2Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "56",
    y1: "40",
    x2: "56",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M56,32a8,8,0,0,1,8,8v73.7L183.7,40.6A16,16,0,0,1,208,54.3V201.7a15.9,15.9,0,0,1-8.2,14,15.4,15.4,0,0,1-7.8,2,16.2,16.2,0,0,1-8.3-2.3L64,142.3V216a8,8,0,0,1-16,0V40A8,8,0,0,1,56,32Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M67.2,121.2,187.8,47.4A8,8,0,0,1,200,54.3V201.7a8,8,0,0,1-12.2,6.9L67.2,134.8A8,8,0,0,1,67.2,121.2Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "56",
    y1: "40",
    x2: "56",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M67.2,121.2,187.8,47.4A8,8,0,0,1,200,54.3V201.7a8,8,0,0,1-12.2,6.9L67.2,134.8A8,8,0,0,1,67.2,121.2Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "56",
    y1: "40",
    x2: "56",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M67.2,121.2,187.8,47.4A8,8,0,0,1,200,54.3V201.7a8,8,0,0,1-12.2,6.9L67.2,134.8A8,8,0,0,1,67.2,121.2Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "56",
    y1: "40",
    x2: "56",
    y2: "216",
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

var SkipBack = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
SkipBack.displayName = "SkipBack";

export default SkipBack;
//# sourceMappingURL=SkipBack.esm.js.map
