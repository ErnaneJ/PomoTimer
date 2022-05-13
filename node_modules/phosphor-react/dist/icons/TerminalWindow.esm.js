import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "80 96 120 128 80 160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "144",
    y1: "160",
    x2: "176",
    y2: "160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("rect", {
    x: "32",
    y: "48",
    width: "192",
    height: "160",
    rx: "8.5",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "32",
    y: "48",
    width: "192",
    height: "160",
    rx: "8.5",
    opacity: "0.2"
  }), React.createElement("polyline", {
    points: "80 96 120 128 80 160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "136",
    y1: "160",
    x2: "176",
    y2: "160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("rect", {
    x: "32",
    y: "48",
    width: "192",
    height: "160",
    rx: "8.5",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16.97"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M215.5,39.5H40.5a17,17,0,0,0-17,17v143a17,17,0,0,0,17,17h175a17,17,0,0,0,17-17V56.5A17,17,0,0,0,215.5,39.5ZM121,134.2l-40,32a7.9,7.9,0,0,1-5,1.8,7.8,7.8,0,0,1-6.2-3A7.9,7.9,0,0,1,71,153.8L103.2,128,71,102.2A8,8,0,1,1,81,89.8l40,32a7.9,7.9,0,0,1,0,12.4ZM180,168H140a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "80 96 120 128 80 160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "136",
    y1: "160",
    x2: "176",
    y2: "160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("rect", {
    x: "32",
    y: "48",
    width: "192",
    height: "160",
    rx: "8.5",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "80 96 120 128 80 160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "136",
    y1: "160",
    x2: "176",
    y2: "160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("rect", {
    x: "32",
    y: "48",
    width: "192",
    height: "160",
    rx: "8.5",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "80 96 120 128 80 160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "136",
    y1: "160",
    x2: "176",
    y2: "160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("rect", {
    x: "32",
    y: "48",
    width: "192",
    height: "160",
    rx: "8.5",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16.97"
  }));
});

var renderPath = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};

var TerminalWindow = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
TerminalWindow.displayName = "TerminalWindow";

export default TerminalWindow;
//# sourceMappingURL=TerminalWindow.esm.js.map
