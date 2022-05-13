import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M128,64a24,24,0,0,1,48,0V88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M128,176a40,40,0,0,1,40-40H152a23.9,23.9,0,0,1-24-24V96a8,8,0,0,1,8-8h64a23.9,23.9,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,64a24,24,0,0,1,48,0V88h24a23.9,23.9,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0V64a24,24,0,0,1,48,0",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M128,64a24,24,0,0,1,48,0V88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M128,176a40,40,0,0,1,40-40H152a23.9,23.9,0,0,1-24-24V96a8,8,0,0,1,8-8h64a23.9,23.9,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M200,80H184V64a32,32,0,0,0-56-21.1A31.8,31.8,0,0,0,104,32,32.1,32.1,0,0,0,72.2,60.4,32,32,0,0,0,24,88v40a104,104,0,0,0,208,0V112A32.1,32.1,0,0,0,200,80ZM152,48a16,16,0,0,1,16,16V80H136V64A16,16,0,0,1,152,48ZM88,64a16,16,0,0,1,32,0v40a16,16,0,0,1-32,0ZM40,88a16,16,0,0,1,32,0v16a16,16,0,0,1-32,0Zm88,128a88,88,0,0,1-87.9-84.2A32,32,0,0,0,80,125.1a31.9,31.9,0,0,0,44.6,3.4,32.3,32.3,0,0,0,11.8,11.4A47.7,47.7,0,0,0,120,176a8,8,0,0,0,16,0,32.1,32.1,0,0,1,32-32,8,8,0,0,0,0-16H152a16,16,0,0,1-16-16V96h64a16,16,0,0,1,16,16v16A88.1,88.1,0,0,1,128,216Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M128,64a24,24,0,0,1,48,0V88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M128,176a40,40,0,0,1,40-40H152a23.9,23.9,0,0,1-24-24V96a8,8,0,0,1,8-8h64a23.9,23.9,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M128,64a24,24,0,0,1,48,0V88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M128,176a40,40,0,0,1,40-40H152a23.9,23.9,0,0,1-24-24V96a8,8,0,0,1,8-8h64a23.9,23.9,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M128,64a24,24,0,0,1,48,0V88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M128,176a40,40,0,0,1,40-40H152a23.9,23.9,0,0,1-24-24V96a8,8,0,0,1,8-8h64a23.9,23.9,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0",
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

var HandFist = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
HandFist.displayName = "HandFist";

export default HandFist;
//# sourceMappingURL=HandFist.esm.js.map
