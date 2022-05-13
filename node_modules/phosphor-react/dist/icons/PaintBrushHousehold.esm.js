import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "72",
    y1: "104",
    x2: "152",
    y2: "184",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "96",
    y1: "188",
    x2: "70.6",
    y2: "214.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "68",
    y1: "160",
    x2: "42.6",
    y2: "186.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M136.1,92.2,191,31a24,24,0,0,1,34,34l-61.2,54.9a8,8,0,0,0-.3,11.6l9.2,9.2a16.1,16.1,0,0,1,0,22.6L96,240,16,160,92.7,83.3a16.1,16.1,0,0,1,22.6,0l9.2,9.2A8,8,0,0,0,136.1,92.2Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M92.7,83.3a16.1,16.1,0,0,1,22.6,0l9.2,9.2a8,8,0,0,0,11.6-.3L191,31a24,24,0,0,1,34,34l-61.2,54.9a8,8,0,0,0-.3,11.6l9.2,9.2a16.1,16.1,0,0,1,0,22.6L152,184,72,104Z",
    opacity: "0.2"
  }), React.createElement("line", {
    x1: "72",
    y1: "104",
    x2: "152",
    y2: "184",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "101.8",
    y1: "183.4",
    x2: "70.6",
    y2: "214.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "73.8",
    y1: "155.4",
    x2: "42.6",
    y2: "186.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M136.1,92.2,191,31a24,24,0,0,1,34,34l-61.2,54.9a8,8,0,0,0-.3,11.6l9.2,9.2a16.1,16.1,0,0,1,0,22.6L96,240,16,160,92.7,83.3a16.1,16.1,0,0,1,22.6,0l9.2,9.2A8,8,0,0,0,136.1,92.2Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M230.6,25.4a31.9,31.9,0,0,0-45.2,0l-.3.3L130.2,86.9,121,77.7a23.9,23.9,0,0,0-34,0L10.3,154.3a8.1,8.1,0,0,0,0,11.4l80,80a8.2,8.2,0,0,0,11.4,0L178.3,169a23.9,23.9,0,0,0,0-34l-9.2-9.2,61.2-54.9.3-.3A31.9,31.9,0,0,0,230.6,25.4ZM96,228.7,81.9,214.6,107.4,189a8,8,0,0,0-11.3-11.3L70.6,203.3,53.9,186.6,79.4,161a8,8,0,0,0-11.3-11.3L42.6,175.3,27.3,160,72,115.3,140.7,184Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "72",
    y1: "104",
    x2: "152",
    y2: "184",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "101.8",
    y1: "183.4",
    x2: "70.6",
    y2: "214.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "73.8",
    y1: "155.4",
    x2: "42.6",
    y2: "186.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M136.1,92.2,191,31a24,24,0,0,1,34,34l-61.2,54.9a8,8,0,0,0-.3,11.6l9.2,9.2a16.1,16.1,0,0,1,0,22.6L96,240,16,160,92.7,83.3a16.1,16.1,0,0,1,22.6,0l9.2,9.2A8,8,0,0,0,136.1,92.2Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "72",
    y1: "104",
    x2: "152",
    y2: "184",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "101.8",
    y1: "183.4",
    x2: "70.6",
    y2: "214.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "73.8",
    y1: "155.4",
    x2: "42.6",
    y2: "186.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M136.1,92.2,191,31a24,24,0,0,1,34,34l-61.2,54.9a8,8,0,0,0-.3,11.6l9.2,9.2a16.1,16.1,0,0,1,0,22.6L96,240,16,160,92.7,83.3a16.1,16.1,0,0,1,22.6,0l9.2,9.2A8,8,0,0,0,136.1,92.2Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "72",
    y1: "104",
    x2: "152",
    y2: "184",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "101.8",
    y1: "183.4",
    x2: "70.6",
    y2: "214.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "73.8",
    y1: "155.4",
    x2: "42.6",
    y2: "186.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M136.1,92.2,191,31a24,24,0,0,1,34,34l-61.2,54.9a8,8,0,0,0-.3,11.6l9.2,9.2a16.1,16.1,0,0,1,0,22.6L96,240,16,160,92.7,83.3a16.1,16.1,0,0,1,22.6,0l9.2,9.2A8,8,0,0,0,136.1,92.2Z",
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

var PaintBrushHousehold = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
PaintBrushHousehold.displayName = "PaintBrushHousehold";

export default PaintBrushHousehold;
//# sourceMappingURL=PaintBrushHousehold.esm.js.map
