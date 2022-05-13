import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "128 232 208 192 224 72 128 32 32 72 48 192 128 232",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("polyline", {
    points: "164 160 128 88 92 160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "100.7",
    y1: "142.7",
    x2: "155.3",
    y2: "142.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "128 232 208 192 224 72 128 32 32 72 48 192 128 232",
    opacity: "0.2"
  }), React.createElement("polygon", {
    points: "128 232 208 192 224 72 128 32 32 72 48 192 128 232",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "164 160 128 88 92 160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "102.7",
    y1: "138.7",
    x2: "153.3",
    y2: "138.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M227.1,64.6l-96-40a8.3,8.3,0,0,0-6.2,0l-96,40a8.1,8.1,0,0,0-4.8,8.5l16,120a8.1,8.1,0,0,0,4.3,6.1l80,40a8.5,8.5,0,0,0,7.2,0l80-40a8.1,8.1,0,0,0,4.3-6.1l16-120A8.1,8.1,0,0,0,227.1,64.6ZM167.6,167.2a9.4,9.4,0,0,1-3.6.8,8.1,8.1,0,0,1-7.2-4.4l-8.4-16.9H107.6l-8.4,16.9a8,8,0,0,1-14.4-7.2l36-72a8.1,8.1,0,0,1,14.4,0l36,72A8.2,8.2,0,0,1,167.6,167.2ZM128,105.9l12.4,24.8H115.6Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "128 232 208 192 224 72 128 32 32 72 48 192 128 232",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("polyline", {
    points: "164 160 128 88 92 160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "102.7",
    y1: "138.7",
    x2: "153.3",
    y2: "138.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "128 232 208 192 224 72 128 32 32 72 48 192 128 232",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("polyline", {
    points: "164 160 128 88 92 160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "102.7",
    y1: "138.7",
    x2: "153.3",
    y2: "138.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "128 232 208 192 224 72 128 32 32 72 48 192 128 232",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "164 160 128 88 92 160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "102.7",
    y1: "138.7",
    x2: "153.3",
    y2: "138.7",
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

var AngularLogo = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
AngularLogo.displayName = "AngularLogo";

export default AngularLogo;
//# sourceMappingURL=AngularLogo.esm.js.map
