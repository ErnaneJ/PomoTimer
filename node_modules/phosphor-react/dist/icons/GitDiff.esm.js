import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "196",
    cy: "188",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M196,160V119.9a48.2,48.2,0,0,0-14.1-34L144,48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("polyline", {
    points: "144 88 144 48 184 48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("circle", {
    cx: "60",
    cy: "68",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M60,96v40.1a48.2,48.2,0,0,0,14.1,34L112,208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("polyline", {
    points: "112 168 112 208 72 208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "196",
    cy: "188",
    r: "28",
    opacity: "0.2"
  }), React.createElement("circle", {
    cx: "60",
    cy: "68",
    r: "28",
    opacity: "0.2"
  }), React.createElement("circle", {
    cx: "196",
    cy: "188",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M196,160V119.9a48.2,48.2,0,0,0-14.1-34L144,48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "144 88 144 48 184 48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "60",
    cy: "68",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M60,96v40.1a48.2,48.2,0,0,0,14.1,34L112,208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "112 168 112 208 72 208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M232,188a36,36,0,1,1-44-35.1v-33a40,40,0,0,0-11.7-28.3L152,67.3V88a8,8,0,0,1-16,0V48a8,8,0,0,1,8-8h40a8,8,0,0,1,0,16H163.3l24.3,24.3A55.5,55.5,0,0,1,204,119.9v33A36.1,36.1,0,0,1,232,188ZM112,160a8,8,0,0,0-8,8v20.7L79.7,164.4A40,40,0,0,1,68,136.1v-33a36,36,0,1,0-16,0v33a55.5,55.5,0,0,0,16.4,39.6L92.7,200H72a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,112,160Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "196",
    cy: "188",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M196,160V119.9a48.2,48.2,0,0,0-14.1-34L144,48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("polyline", {
    points: "144 88 144 48 184 48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("circle", {
    cx: "60",
    cy: "68",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M60,96v40.1a48.2,48.2,0,0,0,14.1,34L112,208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("polyline", {
    points: "112 168 112 208 72 208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "196",
    cy: "188",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M196,160V119.9a48.2,48.2,0,0,0-14.1-34L144,48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("polyline", {
    points: "144 88 144 48 184 48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("circle", {
    cx: "60",
    cy: "68",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M60,96v40.1a48.2,48.2,0,0,0,14.1,34L112,208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("polyline", {
    points: "112 168 112 208 72 208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "196",
    cy: "188",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M196,160V119.9a48.2,48.2,0,0,0-14.1-34L144,48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "144 88 144 48 184 48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "60",
    cy: "68",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M60,96v40.1a48.2,48.2,0,0,0,14.1,34L112,208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "112 168 112 208 72 208",
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

var GitDiff = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
GitDiff.displayName = "GitDiff";

export default GitDiff;
//# sourceMappingURL=GitDiff.esm.js.map
