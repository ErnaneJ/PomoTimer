import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M72,24H184a8,8,0,0,1,8,8V77.3a8.1,8.1,0,0,1-1.6,4.8l-20.8,27.8a8.1,8.1,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.7a8.1,8.1,0,0,0-1.6-4.8L65.6,82.1A8.1,8.1,0,0,1,64,77.3V32A8,8,0,0,1,72,24Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "128",
    y1: "120",
    x2: "128",
    y2: "152",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "64",
    y1: "64",
    x2: "192",
    y2: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M192,77.3a8.1,8.1,0,0,1-1.6,4.8l-20.8,27.8a8.1,8.1,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.7a8.1,8.1,0,0,0-1.6-4.8L65.6,82.1A8.1,8.1,0,0,1,64,77.3V64H192Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M72,24H184a8,8,0,0,1,8,8V77.3a8.1,8.1,0,0,1-1.6,4.8l-20.8,27.8a8.1,8.1,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.7a8.1,8.1,0,0,0-1.6-4.8L65.6,82.1A8.1,8.1,0,0,1,64,77.3V32A8,8,0,0,1,72,24Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "128",
    y1: "120",
    x2: "128",
    y2: "152",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "64",
    y1: "64",
    x2: "192",
    y2: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M184,16H72A16,16,0,0,0,56,32V77.3a15.6,15.6,0,0,0,3.2,9.6L80,114.7V224a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V114.7l20.8-27.8a15.6,15.6,0,0,0,3.2-9.6V32A16,16,0,0,0,184,16ZM136,152a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM72,56V32H184V56Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M72,24H184a8,8,0,0,1,8,8V77.3a8.1,8.1,0,0,1-1.6,4.8l-20.8,27.8a8.1,8.1,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.7a8.1,8.1,0,0,0-1.6-4.8L65.6,82.1A8.1,8.1,0,0,1,64,77.3V32A8,8,0,0,1,72,24Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "128",
    y1: "120",
    x2: "128",
    y2: "152",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "64",
    y1: "64",
    x2: "192",
    y2: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M72,24H184a8,8,0,0,1,8,8V77.3a8.1,8.1,0,0,1-1.6,4.8l-20.8,27.8a8.1,8.1,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.7a8.1,8.1,0,0,0-1.6-4.8L65.6,82.1A8.1,8.1,0,0,1,64,77.3V32A8,8,0,0,1,72,24Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "128",
    y1: "120",
    x2: "128",
    y2: "152",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "64",
    y1: "64",
    x2: "192",
    y2: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M72,24H184a8,8,0,0,1,8,8V77.3a8.1,8.1,0,0,1-1.6,4.8l-20.8,27.8a8.1,8.1,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.7a8.1,8.1,0,0,0-1.6-4.8L65.6,82.1A8.1,8.1,0,0,1,64,77.3V32A8,8,0,0,1,72,24Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "128",
    y1: "120",
    x2: "128",
    y2: "152",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "64",
    y1: "64",
    x2: "192",
    y2: "64",
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

var Flashlight = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Flashlight.displayName = "Flashlight";

export default Flashlight;
//# sourceMappingURL=Flashlight.esm.js.map
