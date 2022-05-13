import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M94.7,27.1a52,52,0,0,1,35.6,97.7Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M27.1,145.3a52,52,0,0,1,97.7-35.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M145.3,212.9a52,52,0,0,1-35.6-97.7Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M212.9,94.7a52,52,0,0,1-97.7,35.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "164.5",
    y1: "164.5",
    x2: "224",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M27.1,145.3a52,52,0,0,1,97.7-35.6Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M212.9,94.7a52,52,0,0,1-97.7,35.6Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M94.7,27.1a52,52,0,0,1,35.6,97.7Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M27.1,145.3a52,52,0,0,1,97.7-35.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M145.3,212.9a52,52,0,0,1-35.6-97.7Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M212.9,94.7a52,52,0,0,1-97.7,35.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "164.5",
    y1: "164.5",
    x2: "224",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M229.7,218.3l-48.4-48.4,3.3-1a59.6,59.6,0,0,0,33.9-31.1,60.4,60.4,0,0,0,2-45.9,8.4,8.4,0,0,0-4.2-4.5,7.6,7.6,0,0,0-6.1-.2l-44.4,16.1,1-2A60,60,0,0,0,91.9,19.5a8.4,8.4,0,0,0-4.5,4.2,7.6,7.6,0,0,0-.2,6.1l16.1,44.4-2-1a60,60,0,0,0-81.8,74.9,8.4,8.4,0,0,0,4.2,4.5,7.7,7.7,0,0,0,3.4.7,6.5,6.5,0,0,0,2.7-.5l44.4-16.1-1,2a60,60,0,0,0,54.3,85.4,61.2,61.2,0,0,0,20.6-3.6,8.4,8.4,0,0,0,4.5-4.2,7.6,7.6,0,0,0,.2-6.1l-16.1-44.4,2,1a59.6,59.6,0,0,0,22.4,5.6l57.2,57.3a8.2,8.2,0,0,0,11.4,0A8.1,8.1,0,0,0,229.7,218.3ZM131.1,36a44.2,44.2,0,0,1,3.7,77.9L105.2,32.5A43.8,43.8,0,0,1,131.1,36ZM108.9,204a44.2,44.2,0,0,1-3.7-77.9l29.6,81.4A43.8,43.8,0,0,1,108.9,204Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M94.7,27.1a52,52,0,0,1,35.6,97.7Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M27.1,145.3a52,52,0,0,1,97.7-35.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M145.3,212.9a52,52,0,0,1-35.6-97.7Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M212.9,94.7a52,52,0,0,1-97.7,35.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "164.5",
    y1: "164.5",
    x2: "224",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M94.7,27.1a52,52,0,0,1,35.6,97.7Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M27.1,145.3a52,52,0,0,1,97.7-35.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M145.3,212.9a52,52,0,0,1-35.6-97.7Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M212.9,94.7a52,52,0,0,1-97.7,35.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "164.5",
    y1: "164.5",
    x2: "224",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M94.7,27.1a52,52,0,0,1,35.6,97.7Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M27.1,145.3a52,52,0,0,1,97.7-35.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M145.3,212.9a52,52,0,0,1-35.6-97.7Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M212.9,94.7a52,52,0,0,1-97.7,35.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "164.5",
    y1: "164.5",
    x2: "224",
    y2: "224",
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

var Pinwheel = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Pinwheel.displayName = "Pinwheel";

export default Pinwheel;
//# sourceMappingURL=Pinwheel.esm.js.map
