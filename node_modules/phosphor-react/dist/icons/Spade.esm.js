import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M160,232H96l8.7-46.2A52.1,52.1,0,0,1,28,140C28,88,128,24,128,24S228,88,228,140a52.1,52.1,0,0,1-76.7,45.8Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,24S228,88,228,140a52,52,0,0,1-85.4,39.9L160,232H96l17.4-52.1A52,52,0,0,1,28,140C28,88,128,24,128,24Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M128,24S228,88,228,140a52,52,0,0,1-85.4,39.9L160,232H96l17.4-52.1A52,52,0,0,1,28,140C28,88,128,24,128,24Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M232,140a56,56,0,0,1-56,56,55.2,55.2,0,0,1-25.9-6.4L162,225.5a7.8,7.8,0,0,1-1.1,7.2,7.9,7.9,0,0,1-6.4,3.3h-53a7.9,7.9,0,0,1-6.4-3.3,7.8,7.8,0,0,1-1.1-7.2l11.9-35.9A55.2,55.2,0,0,1,80,196a56,56,0,0,1-56-56C24,86.4,121.7,23.3,125.8,20.6a4.3,4.3,0,0,1,4.4,0C134.3,23.3,232,86.4,232,140Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,24S228,88,228,140a52,52,0,0,1-85.4,39.9L160,232H96l17.4-52.1A52,52,0,0,1,28,140C28,88,128,24,128,24Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,24S228,88,228,140a52,52,0,0,1-85.4,39.9L160,232H96l17.4-52.1A52,52,0,0,1,28,140C28,88,128,24,128,24Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,24S228,88,228,140a52,52,0,0,1-85.4,39.9L160,232H96l17.4-52.1A52,52,0,0,1,28,140C28,88,128,24,128,24Z",
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

var Spade = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Spade.displayName = "Spade";

export default Spade;
//# sourceMappingURL=Spade.esm.js.map
