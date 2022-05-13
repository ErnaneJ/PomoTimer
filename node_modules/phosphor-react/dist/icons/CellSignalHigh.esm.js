import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M200,43.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "160",
    y1: "64",
    x2: "160",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M160,216H27.3a8,8,0,0,1-5.6-13.7L160,64Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M200,43.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "160",
    y1: "64",
    x2: "160",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M198.1,28.5A15.9,15.9,0,0,0,180.7,32L16,196.7a15.7,15.7,0,0,0-4.7,11.6,4.9,4.9,0,0,0,.1,1.2,14.7,14.7,0,0,0,1.1,4.6,16,16,0,0,0,6.9,7.8l1,.6,2.2.8a14.9,14.9,0,0,0,4.7.7H192a16,16,0,0,0,16-16V43.3A16,16,0,0,0,198.1,28.5ZM192,208H168V67.3l24-24Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M200,43.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "160",
    y1: "64",
    x2: "160",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M200,43.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "160",
    y1: "64",
    x2: "160",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M200,43.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "160",
    y1: "64",
    x2: "160",
    y2: "216",
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

var CellSignalHigh = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
CellSignalHigh.displayName = "CellSignalHigh";

export default CellSignalHigh;
//# sourceMappingURL=CellSignalHigh.esm.js.map
