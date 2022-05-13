import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "128",
    y1: "232",
    x2: "128",
    y2: "88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "128",
    y1: "152",
    x2: "80",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "128",
    y1: "128",
    x2: "176",
    y2: "104",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M132.5,181.2A64,64,0,1,0,194.7,69.9a8.6,8.6,0,0,1-4-4.2,68,68,0,0,0-125.4,0,8.6,8.6,0,0,1-4,4.2,64,64,0,1,0,62.2,111.3A8.2,8.2,0,0,1,132.5,181.2Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M132.5,181.2A64,64,0,1,0,194.7,69.9a8.6,8.6,0,0,1-4-4.2,68,68,0,0,0-125.4,0,8.6,8.6,0,0,1-4,4.2,64,64,0,1,0,62.2,111.3A8.2,8.2,0,0,1,132.5,181.2Z",
    opacity: "0.2"
  }), React.createElement("line", {
    x1: "128",
    y1: "232",
    x2: "128",
    y2: "88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "128",
    y1: "152",
    x2: "80",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "128",
    y1: "128",
    x2: "176",
    y2: "104",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M132.5,181.2A64,64,0,1,0,194.7,69.9a8.6,8.6,0,0,1-4-4.2,68,68,0,0,0-125.4,0,8.6,8.6,0,0,1-4,4.2,64,64,0,1,0,62.2,111.3A8.2,8.2,0,0,1,132.5,181.2Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,187.9h0a91.6,91.6,0,0,1-8,4.6V232a8,8,0,0,0,16,0V192.5a91.6,91.6,0,0,1-8-4.6Z"
  }), React.createElement("path", {
    d: "M198.1,62.6a76,76,0,0,0-140.2,0A72.3,72.3,0,0,0,16,127.8C15.9,166.6,47.4,199,86.1,200a71.9,71.9,0,0,0,33.9-7.5V156.9L76.4,135.2a8,8,0,1,1,7.2-14.4L120,139.1V88a8,8,0,0,1,16,0v27.1l36.4-18.3a8,8,0,0,1,7.2,14.4L136,132.9v59.6a72,72,0,0,0,32,7.5h1.9c38.7-1,70.2-33.4,70.1-72.2A72.3,72.3,0,0,0,198.1,62.6Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "128",
    y1: "232",
    x2: "128",
    y2: "88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "128",
    y1: "152",
    x2: "80",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "128",
    y1: "128",
    x2: "176",
    y2: "104",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M132.5,181.2A64,64,0,1,0,194.7,69.9a8.6,8.6,0,0,1-4-4.2,68,68,0,0,0-125.4,0,8.6,8.6,0,0,1-4,4.2,64,64,0,1,0,62.2,111.3A8.2,8.2,0,0,1,132.5,181.2Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "128",
    y1: "232",
    x2: "128",
    y2: "88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "128",
    y1: "152",
    x2: "80",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "128",
    y1: "128",
    x2: "176",
    y2: "104",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M132.5,181.2A64,64,0,1,0,194.7,69.9a8.6,8.6,0,0,1-4-4.2,68,68,0,0,0-125.4,0,8.6,8.6,0,0,1-4,4.2,64,64,0,1,0,62.2,111.3A8.2,8.2,0,0,1,132.5,181.2Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "128",
    y1: "232",
    x2: "128",
    y2: "88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "128",
    y1: "152",
    x2: "80",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "128",
    y1: "128",
    x2: "176",
    y2: "104",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M132.5,181.2A64,64,0,1,0,194.7,69.9a8.6,8.6,0,0,1-4-4.2,68,68,0,0,0-125.4,0,8.6,8.6,0,0,1-4,4.2,64,64,0,1,0,62.2,111.3A8.2,8.2,0,0,1,132.5,181.2Z",
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

var Tree = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Tree.displayName = "Tree";

export default Tree;
//# sourceMappingURL=Tree.esm.js.map
