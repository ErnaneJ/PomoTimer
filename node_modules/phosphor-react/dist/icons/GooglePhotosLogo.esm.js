import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M132,132V24a60,60,0,0,1,36,108",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M132,124H24A60,60,0,0,1,132,88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M124,124V232A60,60,0,0,1,88,124",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M124,132H232a60,60,0,0,1-108,36",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M132,132V24a60,60,0,0,1,36,108Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M124,124V232A60,60,0,0,1,88,124Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M132,132V24a60,60,0,0,1,36,108",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M132,124H24A60,60,0,0,1,132,88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M124,124V232A60,60,0,0,1,88,124",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M124,132H232a60,60,0,0,1-108,36",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M232,124H187a67.4,67.4,0,0,0,13-40,68.1,68.1,0,0,0-68-68,8,8,0,0,0-8,8V69A67.4,67.4,0,0,0,84,56a68.1,68.1,0,0,0-68,68,8,8,0,0,0,8,8H69a67.4,67.4,0,0,0-13,40,68.1,68.1,0,0,0,68,68,8,8,0,0,0,8-8V187a67.4,67.4,0,0,0,40,13,68.1,68.1,0,0,0,68-68A8,8,0,0,0,232,124ZM84,72a51.5,51.5,0,0,1,40,18.8V116H32.6A52.1,52.1,0,0,1,84,72Zm88,112a51.5,51.5,0,0,1-40-18.8V140h91.4A52.1,52.1,0,0,1,172,184Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M132,132V24a60,60,0,0,1,36,108",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M132,124H24A60,60,0,0,1,132,88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M124,124V232A60,60,0,0,1,88,124",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M124,132H232a60,60,0,0,1-108,36",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M132,132V24a60,60,0,0,1,36,108",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M132,124H24A60,60,0,0,1,132,88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M124,124V232A60,60,0,0,1,88,124",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M124,132H232a60,60,0,0,1-108,36",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M132,132V24a60,60,0,0,1,36,108",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M132,124H24A60,60,0,0,1,132,88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M124,124V232A60,60,0,0,1,88,124",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M124,132H232a60,60,0,0,1-108,36",
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

var GooglePhotosLogo = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
GooglePhotosLogo.displayName = "GooglePhotosLogo";

export default GooglePhotosLogo;
//# sourceMappingURL=GooglePhotosLogo.esm.js.map
