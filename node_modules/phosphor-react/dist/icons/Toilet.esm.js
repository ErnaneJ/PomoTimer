import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M64,108V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v68",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "100",
    y1: "68",
    x2: "116",
    y2: "68",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M216,108a88,88,0,0,1-176,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M94.1,189.2l-4.8,33.7a8,8,0,0,0,7.9,9.1h61.6a8,8,0,0,0,7.9-9.1l-4.8-33.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M93.6,193l-4.3,29.9a8,8,0,0,0,7.9,9.1h61.6a8,8,0,0,0,7.9-9.1L162.4,193h0a88,88,0,0,1-68.8,0Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "96",
    y1: "64",
    x2: "112",
    y2: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M216,112a88,88,0,0,1-176,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M93.6,193l-4.3,29.9a8,8,0,0,0,7.9,9.1h61.6a8,8,0,0,0,7.9-9.1L162.4,193",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M224,112.1a8,8,0,0,0-8-8.1H40a8,8,0,0,0-8,8.1,96,96,0,0,0,52.8,85.6l-3.4,23.7a16.2,16.2,0,0,0,1.7,10.1A16,16,0,0,0,97.2,240h61.2a16.9,16.9,0,0,0,9.8-3,16.2,16.2,0,0,0,6.4-15.3l-3.4-24A96,96,0,0,0,224,112.1ZM97.2,224l2.9-20.1a97,97,0,0,0,55.8,0l2.9,20.1ZM60,88H196a4,4,0,0,0,4-4V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V84A4,4,0,0,0,60,88ZM88,48h15.7a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H88.3A8.2,8.2,0,0,1,80,56.5,8,8,0,0,1,88,48Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "96",
    y1: "64",
    x2: "112",
    y2: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M216,112a88,88,0,0,1-176,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M93.6,193l-4.3,29.9a8,8,0,0,0,7.9,9.1h61.6a8,8,0,0,0,7.9-9.1L162.4,193",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "96",
    y1: "64",
    x2: "112",
    y2: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M216,112a88,88,0,0,1-176,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M93.6,193l-4.3,29.9a8,8,0,0,0,7.9,9.1h61.6a8,8,0,0,0,7.9-9.1L162.4,193",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "96",
    y1: "64",
    x2: "112",
    y2: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M216,112a88,88,0,0,1-176,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M93.6,193l-4.3,29.9a8,8,0,0,0,7.9,9.1h61.6a8,8,0,0,0,7.9-9.1L162.4,193",
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

var Toilet = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Toilet.displayName = "Toilet";

export default Toilet;
//# sourceMappingURL=Toilet.esm.js.map
