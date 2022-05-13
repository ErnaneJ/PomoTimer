import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "72",
    y1: "128",
    x2: "184",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M56,216H85.3a32.1,32.1,0,0,0,31.5-26.3L139.2,66.3A32.1,32.1,0,0,1,170.7,40H200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "72",
    y1: "128",
    x2: "184",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M56,216H85.3a32.1,32.1,0,0,0,31.5-26.3L139.2,66.3A32.1,32.1,0,0,1,170.7,40H200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M208,40a8,8,0,0,1-8,8H170.7a24,24,0,0,0-23.6,19.7L137.6,120H184a8,8,0,0,1,0,16H134.7l-10.1,55.2A39.9,39.9,0,0,1,85.3,224H56a8,8,0,0,1,0-16H85.3a24,24,0,0,0,23.6-19.7l9.5-52.3H72a8,8,0,0,1,0-16h49.3l10.1-55.2A39.9,39.9,0,0,1,170.7,32H200A8,8,0,0,1,208,40Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "72",
    y1: "128",
    x2: "184",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M56,216H85.3a32.1,32.1,0,0,0,31.5-26.3L139.2,66.3A32.1,32.1,0,0,1,170.7,40H200",
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
    y1: "128",
    x2: "184",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M56,216H85.3a32.1,32.1,0,0,0,31.5-26.3L139.2,66.3A32.1,32.1,0,0,1,170.7,40H200",
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
    y1: "128",
    x2: "184",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M56,216H85.3a32.1,32.1,0,0,0,31.5-26.3L139.2,66.3A32.1,32.1,0,0,1,170.7,40H200",
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

var Function = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Function.displayName = "Function";

export default Function;
//# sourceMappingURL=Function.esm.js.map
