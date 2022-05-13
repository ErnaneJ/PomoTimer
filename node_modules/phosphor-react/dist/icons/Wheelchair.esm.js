import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "95.9",
    cy: "40",
    r: "20",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("polyline", {
    points: "95.9 60 95.9 136 183.9 136 215.9 200 239.9 192",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M163.2,184.1A64,64,0,1,1,103.9,96h56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "95.9",
    cy: "40",
    r: "20",
    opacity: "0.2"
  }), React.createElement("circle", {
    cx: "95.9",
    cy: "40",
    r: "20",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "95.9 60 95.9 132 183.9 132 215.9 196 239.9 188",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M167.8,164a64,64,0,1,1-63.9-68h56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M247.5,185.5a8,8,0,0,0-10.1-5.1l-17.5,5.8L191,128.4a7.9,7.9,0,0,0-7.1-4.4h-80V104h56a8,8,0,0,0,0-16h-56V62.6a24,24,0,1,0-16,0V89.8a72,72,0,1,0,87.8,74.7,8,8,0,1,0-15.9-1,56,56,0,1,1-71.9-57.2V132a8,8,0,0,0,8,8h83l29.8,59.6a8,8,0,0,0,7.2,4.4,7.3,7.3,0,0,0,2.5-.4l24-8A8,8,0,0,0,247.5,185.5Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "95.9",
    cy: "40",
    r: "20",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("polyline", {
    points: "95.9 60 95.9 132 183.9 132 215.9 196 239.9 188",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M167.8,164a64,64,0,1,1-63.9-68h56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "95.9",
    cy: "40",
    r: "20",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("polyline", {
    points: "95.9 60 95.9 132 183.9 132 215.9 196 239.9 188",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M167.8,164a64,64,0,1,1-63.9-68h56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "95.9",
    cy: "40",
    r: "20",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "95.9 60 95.9 132 183.9 132 215.9 196 239.9 188",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M167.8,164a64,64,0,1,1-63.9-68h56",
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

var Wheelchair = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Wheelchair.displayName = "Wheelchair";

export default Wheelchair;
//# sourceMappingURL=Wheelchair.esm.js.map
