import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "100",
    cy: "116",
    r: "16"
  }), React.createElement("circle", {
    cx: "156",
    cy: "116",
    r: "16"
  }), React.createElement("path", {
    d: "M216,216l-29.3-24-29.4,24L128,192,98.7,216,69.3,192,40,216V120a88,88,0,0,1,176,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M216,216l-29.3-24-29.4,24L128,192,98.7,216,69.3,192,40,216V120a88,88,0,0,1,176,0Z",
    opacity: "0.2"
  }), React.createElement("circle", {
    cx: "100",
    cy: "116",
    r: "12"
  }), React.createElement("circle", {
    cx: "156",
    cy: "116",
    r: "12"
  }), React.createElement("path", {
    d: "M216,216l-29.3-24-29.4,24L128,192,98.7,216,69.3,192,40,216V120a88,88,0,0,1,176,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,24a96.2,96.2,0,0,0-96,96v96a8.1,8.1,0,0,0,13.1,6.2l24.2-19.9,24.3,19.9a8,8,0,0,0,10.1,0L128,202.3l24.3,19.9a8,8,0,0,0,10.1,0l24.3-19.9,24.2,19.9a7.9,7.9,0,0,0,8.5,1A7.9,7.9,0,0,0,224,216V120A96.2,96.2,0,0,0,128,24ZM100,128a12,12,0,1,1,12-12A12,12,0,0,1,100,128Zm56,0a12,12,0,1,1,12-12A12,12,0,0,1,156,128Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "100",
    cy: "116",
    r: "10"
  }), React.createElement("circle", {
    cx: "156",
    cy: "116",
    r: "10"
  }), React.createElement("path", {
    d: "M216,216l-29.3-24-29.4,24L128,192,98.7,216,69.3,192,40,216V120a88,88,0,0,1,176,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "100",
    cy: "116",
    r: "8"
  }), React.createElement("circle", {
    cx: "156",
    cy: "116",
    r: "8"
  }), React.createElement("path", {
    d: "M216,216l-29.3-24-29.4,24L128,192,98.7,216,69.3,192,40,216V120a88,88,0,0,1,176,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "100",
    cy: "116",
    r: "12"
  }), React.createElement("circle", {
    cx: "156",
    cy: "116",
    r: "12"
  }), React.createElement("path", {
    d: "M216,216l-29.3-24-29.4,24L128,192,98.7,216,69.3,192,40,216V120a88,88,0,0,1,176,0Z",
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

var Ghost = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Ghost.displayName = "Ghost";

export default Ghost;
//# sourceMappingURL=Ghost.esm.js.map
