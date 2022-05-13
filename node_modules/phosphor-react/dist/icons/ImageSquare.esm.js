import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "40",
    y: "40",
    width: "176",
    height: "176",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M216,160l-42.3-42.3a8,8,0,0,0-11.4,0l-44.6,44.6a8,8,0,0,1-11.4,0L85.7,141.7a8,8,0,0,0-11.4,0L40,176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("circle", {
    cx: "100",
    cy: "92",
    r: "16"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M40,176V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V160h0l-42.3-42.3a8,8,0,0,0-11.4,0l-44.6,44.6a8,8,0,0,1-11.4,0L85.7,141.7a8,8,0,0,0-11.4,0Z",
    opacity: "0.2"
  }), React.createElement("rect", {
    x: "40",
    y: "40",
    width: "176",
    height: "176",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M216,160l-42.3-42.3a8,8,0,0,0-11.4,0l-44.6,44.6a8,8,0,0,1-11.4,0L85.7,141.7a8,8,0,0,0-11.4,0L40,176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "100",
    cy: "92",
    r: "12"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "100",
    cy: "92",
    r: "12"
  }), React.createElement("path", {
    d: "M208,32H48A16,16,0,0,0,32,48V176h0v32a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-28.7,80a16.1,16.1,0,0,0-22.6,0L112,156.7,91.3,136a16.1,16.1,0,0,0-22.6,0L48,156.7V48H208v92.7Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "40",
    y: "40",
    width: "176",
    height: "176",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M216,160l-42.3-42.3a8,8,0,0,0-11.4,0l-44.6,44.6a8,8,0,0,1-11.4,0L85.7,141.7a8,8,0,0,0-11.4,0L40,176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("circle", {
    cx: "100",
    cy: "92",
    r: "10"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "40",
    y: "40",
    width: "176",
    height: "176",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M216,160l-42.3-42.3a8,8,0,0,0-11.4,0l-44.6,44.6a8,8,0,0,1-11.4,0L85.7,141.7a8,8,0,0,0-11.4,0L40,176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("circle", {
    cx: "100",
    cy: "92",
    r: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "40",
    y: "40",
    width: "176",
    height: "176",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M216,160l-42.3-42.3a8,8,0,0,0-11.4,0l-44.6,44.6a8,8,0,0,1-11.4,0L85.7,141.7a8,8,0,0,0-11.4,0L40,176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "100",
    cy: "92",
    r: "12"
  }));
});

var renderPath = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};

var ImageSquare = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
ImageSquare.displayName = "ImageSquare";

export default ImageSquare;
//# sourceMappingURL=ImageSquare.esm.js.map
