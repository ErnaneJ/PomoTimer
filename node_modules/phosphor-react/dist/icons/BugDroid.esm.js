import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "156",
    cy: "84",
    r: "16"
  }), React.createElement("circle", {
    cx: "100",
    cy: "84",
    r: "16"
  }), React.createElement("path", {
    d: "M207.9,148a80,80,0,0,1-160,0V108a80,80,0,0,1,160,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "207.9",
    y1: "128",
    x2: "47.9",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "55.9",
    y1: "28",
    x2: "76.2",
    y2: "46.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "199.9",
    y1: "28",
    x2: "179.6",
    y2: "46.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M47.9,128h160v20a80,80,0,0,1-160,0Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M207.9,148a80,80,0,0,1-160,0V108a80,80,0,0,1,160,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "207.9",
    y1: "128",
    x2: "47.9",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "155.9",
    cy: "92",
    r: "12"
  }), React.createElement("circle", {
    cx: "99.9",
    cy: "92",
    r: "12"
  }), React.createElement("line", {
    x1: "55.9",
    y1: "28",
    x2: "76.2",
    y2: "46.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "199.9",
    y1: "28",
    x2: "179.6",
    y2: "46.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M191.3,47l14.1-13.1a8.2,8.2,0,0,0,.4-11.4,8,8,0,0,0-11.3-.4L179.1,36.5a87.7,87.7,0,0,0-102.4,0L61.4,22.1A8,8,0,0,0,50.5,33.9L64.6,47a87.4,87.4,0,0,0-24.7,61v40a88,88,0,0,0,176,0V108A87.7,87.7,0,0,0,191.3,47ZM127.9,36a72.1,72.1,0,0,1,72,72v12H55.9V108A72.1,72.1,0,0,1,127.9,36Zm16,56a12,12,0,1,1,12,12A12,12,0,0,1,143.9,92Zm-56,0a12,12,0,1,1,12,12A12,12,0,0,1,87.9,92Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "156",
    cy: "84",
    r: "10"
  }), React.createElement("circle", {
    cx: "100",
    cy: "84",
    r: "10"
  }), React.createElement("path", {
    d: "M207.9,148a80,80,0,0,1-160,0V108a80,80,0,0,1,160,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "207.9",
    y1: "128",
    x2: "47.9",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "55.9",
    y1: "28",
    x2: "76.2",
    y2: "46.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "199.9",
    y1: "28",
    x2: "179.6",
    y2: "46.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "156",
    cy: "84",
    r: "8"
  }), React.createElement("circle", {
    cx: "100",
    cy: "84",
    r: "8"
  }), React.createElement("path", {
    d: "M207.9,148a80,80,0,0,1-160,0V108a80,80,0,0,1,160,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "207.9",
    y1: "128",
    x2: "47.9",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "55.9",
    y1: "28",
    x2: "76.2",
    y2: "46.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "199.9",
    y1: "28",
    x2: "179.6",
    y2: "46.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M208,148a80,80,0,0,1-160,0V108a80,80,0,0,1,160,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "208",
    y1: "128",
    x2: "48",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "156",
    cy: "92",
    r: "12"
  }), React.createElement("circle", {
    cx: "100",
    cy: "92",
    r: "12"
  }), React.createElement("line", {
    x1: "56",
    y1: "28",
    x2: "76.3",
    y2: "46.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "200",
    y1: "28",
    x2: "179.7",
    y2: "46.9",
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

var BugDroid = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
BugDroid.displayName = "BugDroid";

export default BugDroid;
//# sourceMappingURL=BugDroid.esm.js.map
