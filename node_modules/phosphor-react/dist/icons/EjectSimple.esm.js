import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "224",
    y1: "208",
    x2: "32",
    y2: "208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "224",
    y1: "208",
    x2: "32",
    y2: "208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M26.4,158.9a15.9,15.9,0,0,1,2-17L115.6,34.6a16,16,0,0,1,24.8,0l87.2,107.3A16,16,0,0,1,215.2,168H40.8A15.8,15.8,0,0,1,26.4,158.9ZM224,200H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "224",
    y1: "208",
    x2: "32",
    y2: "208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "224",
    y1: "208",
    x2: "32",
    y2: "208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M121.8,39.6,34.6,147a8,8,0,0,0,6.2,13H215.2a8,8,0,0,0,6.2-13L134.2,39.6A8,8,0,0,0,121.8,39.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "224",
    y1: "208",
    x2: "32",
    y2: "208",
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

var EjectSimple = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
EjectSimple.displayName = "EjectSimple";

export default EjectSimple;
//# sourceMappingURL=EjectSimple.esm.js.map
