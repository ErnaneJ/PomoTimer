import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "79.8 99.7 31.8 99.7 31.8 51.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M190.2,65.8a87.9,87.9,0,0,0-124.4,0l-34,33.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("polyline", {
    points: "176.2 156.3 224.2 156.3 224.2 204.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M65.8,190.2a87.9,87.9,0,0,0,124.4,0l34-33.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "79.8 99.7 31.8 99.7 31.8 51.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M190.2,65.8a87.9,87.9,0,0,0-124.4,0l-34,33.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "176.2 156.3 224.2 156.3 224.2 204.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M65.8,190.2a87.9,87.9,0,0,0,124.4,0l34-33.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M79.8,107.7h-48a8,8,0,0,1-8-8v-48a8.2,8.2,0,0,1,5-7.4,8,8,0,0,1,8.7,1.8L55.8,64.4l4.3-4.3a96.2,96.2,0,0,1,135.8,0,8,8,0,0,1,0,11.3,7.9,7.9,0,0,1-11.3,0,80.2,80.2,0,0,0-113.2,0l-4.3,4.3L85.5,94.1a8,8,0,0,1-5.7,13.6Zm144.4,40.6h-48a8,8,0,0,0-5.7,13.6l18.4,18.4-4.3,4.3a80.2,80.2,0,0,1-113.2,0,7.9,7.9,0,0,0-11.3,0,8,8,0,0,0,0,11.3,96.1,96.1,0,0,0,135.8,0l4.3-4.3,18.3,18.3a7.8,7.8,0,0,0,5.7,2.4,8,8,0,0,0,3-.6,8.2,8.2,0,0,0,5-7.4v-48A8,8,0,0,0,224.2,148.3Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "79.8 99.7 31.8 99.7 31.8 51.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M190.2,65.8a87.9,87.9,0,0,0-124.4,0l-34,33.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("polyline", {
    points: "176.2 156.3 224.2 156.3 224.2 204.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M65.8,190.2a87.9,87.9,0,0,0,124.4,0l34-33.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "79.8 99.7 31.8 99.7 31.8 51.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M190.2,65.8a87.9,87.9,0,0,0-124.4,0l-34,33.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("polyline", {
    points: "176.2 156.3 224.2 156.3 224.2 204.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M65.8,190.2a87.9,87.9,0,0,0,124.4,0l34-33.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "79.8 99.7 31.8 99.7 31.8 51.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M190.2,65.8a87.9,87.9,0,0,0-124.4,0l-34,33.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "176.2 156.3 224.2 156.3 224.2 204.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M65.8,190.2a87.9,87.9,0,0,0,124.4,0l34-33.9",
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

var ArrowsCounterClockwise = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
ArrowsCounterClockwise.displayName = "ArrowsCounterClockwise";

export default ArrowsCounterClockwise;
//# sourceMappingURL=ArrowsCounterClockwise.esm.js.map
