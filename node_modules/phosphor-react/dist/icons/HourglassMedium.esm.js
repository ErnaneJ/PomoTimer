import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "69.3",
    y1: "84",
    x2: "186.2",
    y2: "84",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M128,128,67.2,82.4A8.1,8.1,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6a8.1,8.1,0,0,1-3.2,6.4L128,128h0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M128,128,67.2,173.6A8.1,8.1,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.4a8.1,8.1,0,0,0-3.2-6.4L128,128h0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "128",
    y1: "168",
    x2: "128",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "128 128 180.9 88 74.7 88 128 128",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M128,128,67.2,82.4A8.1,8.1,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6a8.1,8.1,0,0,1-3.2,6.4L128,128h0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M128,128,67.2,173.6A8.1,8.1,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.4a8.1,8.1,0,0,0-3.2-6.4L128,128h0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "128",
    y1: "168",
    x2: "128",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "74.7",
    y1: "88",
    x2: "180.9",
    y2: "88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M193.6,88.4A16.1,16.1,0,0,0,200,75.6V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.1,16.1,0,0,0,6.4,12.8l18.1,13.6h0L114.7,128,62.4,167.2A16.1,16.1,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.4a16.1,16.1,0,0,0-6.4-12.8L141.3,128,164,110.8ZM72,40H184V75.6L178.2,80H77.3L72,76ZM184,180.4V216H72V180l48-36v24a8,8,0,0,0,16,0V144.1Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "74.7",
    y1: "88",
    x2: "180.9",
    y2: "88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M128,128,67.2,82.4A8.1,8.1,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6a8.1,8.1,0,0,1-3.2,6.4L128,128h0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M128,128,67.2,173.6A8.1,8.1,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.4a8.1,8.1,0,0,0-3.2-6.4L128,128h0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "128",
    y1: "168",
    x2: "128",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "74.7",
    y1: "88",
    x2: "180.9",
    y2: "88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M128,128,67.2,82.4A8.1,8.1,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6a8.1,8.1,0,0,1-3.2,6.4L128,128h0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M128,128,67.2,173.6A8.1,8.1,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.4a8.1,8.1,0,0,0-3.2-6.4L128,128h0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "128",
    y1: "168",
    x2: "128",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,128,67.2,82.4A8.1,8.1,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6a8.1,8.1,0,0,1-3.2,6.4L128,128h0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M128,128,67.2,173.6A8.1,8.1,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.4a8.1,8.1,0,0,0-3.2-6.4L128,128h0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "74.7",
    y1: "88",
    x2: "180.9",
    y2: "88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "128",
    y1: "168",
    x2: "128",
    y2: "128",
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

var HourglassMedium = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
HourglassMedium.displayName = "HourglassMedium";

export default HourglassMedium;
//# sourceMappingURL=HourglassMedium.esm.js.map
