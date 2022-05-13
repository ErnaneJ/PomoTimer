import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "156",
    cy: "88",
    r: "16"
  }), React.createElement("circle", {
    cx: "100",
    cy: "88",
    r: "16"
  }), React.createElement("line", {
    x1: "128",
    y1: "128",
    x2: "128",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "244",
    y1: "128",
    x2: "12",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M208,144a80,80,0,0,1-160,0V112a80,80,0,0,1,160,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "231.9",
    y1: "188",
    x2: "203.2",
    y2: "171.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "231.9",
    y1: "68",
    x2: "203.2",
    y2: "84.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "24.1",
    y1: "68",
    x2: "52.8",
    y2: "84.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "24.1",
    y1: "188",
    x2: "52.8",
    y2: "171.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M208,128v16a80,80,0,0,1-160,0V128Z",
    opacity: "0.2"
  }), React.createElement("circle", {
    cx: "155.9",
    cy: "92",
    r: "12"
  }), React.createElement("circle", {
    cx: "99.9",
    cy: "92",
    r: "12"
  }), React.createElement("line", {
    x1: "128",
    y1: "128",
    x2: "128",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "244",
    y1: "128",
    x2: "12",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M208,144a80,80,0,0,1-160,0V112a80,80,0,0,1,160,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "231.9",
    y1: "188",
    x2: "203.2",
    y2: "171.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "231.9",
    y1: "68",
    x2: "203.2",
    y2: "84.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "24.1",
    y1: "68",
    x2: "52.8",
    y2: "84.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "24.1",
    y1: "188",
    x2: "52.8",
    y2: "171.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M167.9,92a12,12,0,1,1-12-12A12,12,0,0,1,167.9,92Zm-68-12a12,12,0,1,0,12,12A12,12,0,0,0,99.9,80ZM252,128a8,8,0,0,1-8,8H216v8a88.1,88.1,0,0,1-3.2,23.7l23.1,13.4a8,8,0,0,1-4,14.9,7.6,7.6,0,0,1-4-1.1L207,182.8a88,88,0,0,1-158,0L28.1,194.9a7.6,7.6,0,0,1-4,1.1,8,8,0,0,1-4-14.9l23.1-13.4A88.1,88.1,0,0,1,40,144v-8H12a8,8,0,0,1,0-16H40v-8a88.1,88.1,0,0,1,3.2-23.7L20.1,74.9a8,8,0,0,1-3-10.9,8.1,8.1,0,0,1,11-2.9L49,73.2a88,88,0,0,1,158,0l20.9-12.1a8.1,8.1,0,0,1,11,2.9,8,8,0,0,1-3,10.9L212.8,88.3A88.1,88.1,0,0,1,216,112v8h28A8,8,0,0,1,252,128ZM136,144a8,8,0,0,0-16,0v64a8,8,0,0,0,16,0Zm64-32a72,72,0,0,0-144,0v8H200Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "156",
    cy: "92",
    r: "10"
  }), React.createElement("circle", {
    cx: "100",
    cy: "92",
    r: "10"
  }), React.createElement("line", {
    x1: "128",
    y1: "128",
    x2: "128",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "244",
    y1: "128",
    x2: "12",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M208,144a80,80,0,0,1-160,0V112a80,80,0,0,1,160,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "231.9",
    y1: "188",
    x2: "203.2",
    y2: "171.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "231.9",
    y1: "68",
    x2: "203.2",
    y2: "84.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "24.1",
    y1: "68",
    x2: "52.8",
    y2: "84.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "24.1",
    y1: "188",
    x2: "52.8",
    y2: "171.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "156",
    cy: "92",
    r: "8"
  }), React.createElement("circle", {
    cx: "100",
    cy: "92",
    r: "8"
  }), React.createElement("line", {
    x1: "128",
    y1: "128",
    x2: "128",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "244",
    y1: "128",
    x2: "12",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M208,144a80,80,0,0,1-160,0V112a80,80,0,0,1,160,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "231.9",
    y1: "188",
    x2: "203.2",
    y2: "171.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "231.9",
    y1: "68",
    x2: "203.2",
    y2: "84.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "24.1",
    y1: "68",
    x2: "52.8",
    y2: "84.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "24.1",
    y1: "188",
    x2: "52.8",
    y2: "171.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "156",
    cy: "92",
    r: "12"
  }), React.createElement("circle", {
    cx: "100",
    cy: "92",
    r: "12"
  }), React.createElement("line", {
    x1: "128",
    y1: "128",
    x2: "128",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "244",
    y1: "128",
    x2: "12",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M208,144a80,80,0,0,1-160,0V112a80,80,0,0,1,160,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "231.9",
    y1: "188",
    x2: "203.2",
    y2: "171.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "231.9",
    y1: "68",
    x2: "203.2",
    y2: "84.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "24.1",
    y1: "68",
    x2: "52.8",
    y2: "84.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "24.1",
    y1: "188",
    x2: "52.8",
    y2: "171.4",
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

var Bug = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Bug.displayName = "Bug";

export default Bug;
//# sourceMappingURL=Bug.esm.js.map
