import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("circle", {
    cx: "132",
    cy: "128",
    r: "16"
  }), React.createElement("circle", {
    cx: "180",
    cy: "128",
    r: "16"
  }), React.createElement("circle", {
    cx: "84",
    cy: "128",
    r: "16"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "132",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "84",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "180",
    cy: "128",
    r: "12"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M132,24A100.2,100.2,0,0,0,32,124v84.3A15.7,15.7,0,0,0,47.7,224H132a100,100,0,0,0,0-200ZM84,140a12,12,0,1,1,12-12A12,12,0,0,1,84,140Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,132,140Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,180,140Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("circle", {
    cx: "132",
    cy: "128",
    r: "10"
  }), React.createElement("circle", {
    cx: "180",
    cy: "128",
    r: "10"
  }), React.createElement("circle", {
    cx: "84",
    cy: "128",
    r: "10"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("circle", {
    cx: "132",
    cy: "128",
    r: "8"
  }), React.createElement("circle", {
    cx: "84",
    cy: "128",
    r: "8"
  }), React.createElement("circle", {
    cx: "180",
    cy: "128",
    r: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "132",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "84",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "180",
    cy: "128",
    r: "12"
  }));
});

var renderPath = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};

var ChatTeardropDots = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
ChatTeardropDots.displayName = "ChatTeardropDots";

export default ChatTeardropDots;
//# sourceMappingURL=ChatTeardropDots.esm.js.map
