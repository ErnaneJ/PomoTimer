import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "160",
    y1: "96",
    x2: "40",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z",
    opacity: "0.2"
  }), React.createElement("line", {
    x1: "160",
    y1: "96",
    x2: "40",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M224,39.5a8.1,8.1,0,0,0-7.5-7.5C140.2,27.5,79.1,50.5,53,93.6a87.3,87.3,0,0,0-12.8,49.1c.6,15.9,5.2,32.1,13.8,48L154.3,90.3a8.1,8.1,0,0,1,11.4,11.4L65.3,202c15.9,8.6,32.1,13.2,48,13.8h3.3A87,87,0,0,0,162.4,203C205.5,176.9,228.5,115.8,224,39.5Z"
  }), React.createElement("path", {
    d: "M57.1,196.1c-1.1-1.8-2.1-3.6-3.1-5.4L34.3,210.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L65.3,202l-5.4-3.1A9.3,9.3,0,0,1,57.1,196.1Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "160",
    y1: "96",
    x2: "40",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "160",
    y1: "96",
    x2: "40",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "160",
    y1: "96",
    x2: "40",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z",
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

var Leaf = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Leaf.displayName = "Leaf";

export default Leaf;
//# sourceMappingURL=Leaf.esm.js.map
