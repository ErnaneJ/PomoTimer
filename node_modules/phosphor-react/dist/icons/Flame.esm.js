import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,24S48,72,48,144a79.9,79.9,0,0,0,77.9,79.9A39.9,39.9,0,0,1,88,184c0-40,40-64,40-64s40,24,40,64a39.9,39.9,0,0,1-37.9,39.9A79.9,79.9,0,0,0,208,144C208,72,128,24,128,24Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M173.8,51.5a221.5,221.5,0,0,0-41.7-34.4,8,8,0,0,0-8.2,0A221.5,221.5,0,0,0,82.2,51.5C54.6,80.5,40,112.5,40,144a88,88,0,0,0,176,0C216,112.5,201.4,80.5,173.8,51.5ZM96,184c0-27.7,22.5-47.3,32-54.3,9.5,7,32,26.6,32,54.3a32,32,0,0,1-64,0Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z",
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

var Flame = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Flame.displayName = "Flame";

export default Flame;
//# sourceMappingURL=Flame.esm.js.map
