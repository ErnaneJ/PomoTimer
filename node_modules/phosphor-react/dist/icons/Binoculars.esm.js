import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "104",
    y1: "92",
    x2: "152",
    y2: "92",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M229.6,154.3,185.9,55A24.1,24.1,0,0,0,152,55V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M104,168V55a24.1,24.1,0,0,0-33.9,0L26.4,154.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("circle", {
    cx: "64",
    cy: "168",
    r: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("circle", {
    cx: "192",
    cy: "168",
    r: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "64",
    cy: "168",
    r: "40",
    opacity: "0.2"
  }), React.createElement("circle", {
    cx: "192",
    cy: "168",
    r: "40",
    opacity: "0.2"
  }), React.createElement("line", {
    x1: "104",
    y1: "92",
    x2: "152",
    y2: "92",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M229.6,154.3,185.9,55A24.1,24.1,0,0,0,152,55V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M104,168V55a24.1,24.1,0,0,0-33.9,0L26.4,154.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "64",
    cy: "168",
    r: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "192",
    cy: "168",
    r: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M237.2,151.9h0c0-.1-.1-.1-.1-.2a42.3,42.3,0,0,0-2.3-5.3L193.3,51.8a8.1,8.1,0,0,0-1.7-2.4,32,32,0,0,0-45.3,0A7.9,7.9,0,0,0,144,55V84H112V55a7.9,7.9,0,0,0-2.3-5.6,32,32,0,0,0-45.3,0,8.1,8.1,0,0,0-1.7,2.4L21.2,146.3a42.3,42.3,0,0,0-2.3,5.3c0,.1-.1.1-.1.2h0A48,48,0,1,0,112,167.8V100h32v67.8a48,48,0,1,0,93.2-15.9Zm-143.1,27a32,32,0,0,1-60.2-21.7l1.8-4.1A32,32,0,0,1,96,167.9h0A32.1,32.1,0,0,1,94.1,178.9Zm108.8,19.2A32,32,0,0,1,160,168h0a32,32,0,0,1,60.3-14.8l1.8,4.1A32,32,0,0,1,202.9,198.1Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "104",
    y1: "92",
    x2: "152",
    y2: "92",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M229.6,154.3,185.9,55A24.1,24.1,0,0,0,152,55V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M104,168V55a24.1,24.1,0,0,0-33.9,0L26.4,154.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("circle", {
    cx: "64",
    cy: "168",
    r: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("circle", {
    cx: "192",
    cy: "168",
    r: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "104",
    y1: "92",
    x2: "152",
    y2: "92",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M229.6,154.3,185.9,55A24.1,24.1,0,0,0,152,55V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M104,168V55a24.1,24.1,0,0,0-33.9,0L26.4,154.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("circle", {
    cx: "64",
    cy: "168",
    r: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("circle", {
    cx: "192",
    cy: "168",
    r: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "104",
    y1: "92",
    x2: "152",
    y2: "92",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M229.6,154.3,185.9,55A24.1,24.1,0,0,0,152,55V168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M104,168V55a24.1,24.1,0,0,0-33.9,0L26.4,154.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "64",
    cy: "168",
    r: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "192",
    cy: "168",
    r: "40",
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

var Binoculars = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Binoculars.displayName = "Binoculars";

export default Binoculars;
//# sourceMappingURL=Binoculars.esm.js.map
