import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "24",
    y: "100",
    width: "56",
    height: "56",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("rect", {
    x: "160",
    y: "40",
    width: "64",
    height: "64",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("rect", {
    x: "160",
    y: "152",
    width: "64",
    height: "64",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "80",
    y1: "128",
    x2: "120",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M160,184H144a23.9,23.9,0,0,1-24-24V96a23.9,23.9,0,0,1,24-24h16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "24",
    y: "100",
    width: "56",
    height: "56",
    rx: "8",
    opacity: "0.2"
  }), React.createElement("rect", {
    x: "160",
    y: "40",
    width: "64",
    height: "64",
    rx: "8",
    opacity: "0.2"
  }), React.createElement("rect", {
    x: "160",
    y: "152",
    width: "64",
    height: "64",
    rx: "8",
    opacity: "0.2"
  }), React.createElement("rect", {
    x: "24",
    y: "100",
    width: "56",
    height: "56",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("rect", {
    x: "160",
    y: "40",
    width: "64",
    height: "64",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("rect", {
    x: "160",
    y: "152",
    width: "64",
    height: "64",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "80",
    y1: "128",
    x2: "120",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M160,184H144a23.9,23.9,0,0,1-24-24V96a23.9,23.9,0,0,1,24-24h16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M156,92V80H144a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h12V164a16,16,0,0,1,16-16h40a16,16,0,0,1,16,16v40a16,16,0,0,1-16,16H172a16,16,0,0,1-16-16V192H144a32.1,32.1,0,0,1-32-32V136H84v8a16,16,0,0,1-16,16H36a16,16,0,0,1-16-16V112A16,16,0,0,1,36,96H68a16,16,0,0,1,16,16v8h28V96a32.1,32.1,0,0,1,32-32h12V52a16,16,0,0,1,16-16h40a16,16,0,0,1,16,16V92a16,16,0,0,1-16,16H172A16,16,0,0,1,156,92Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "24",
    y: "100",
    width: "56",
    height: "56",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("rect", {
    x: "160",
    y: "40",
    width: "64",
    height: "64",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("rect", {
    x: "160",
    y: "152",
    width: "64",
    height: "64",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "80",
    y1: "128",
    x2: "120",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M160,184H144a23.9,23.9,0,0,1-24-24V96a23.9,23.9,0,0,1,24-24h16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "24",
    y: "100",
    width: "56",
    height: "56",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("rect", {
    x: "160",
    y: "40",
    width: "64",
    height: "64",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("rect", {
    x: "160",
    y: "152",
    width: "64",
    height: "64",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "80",
    y1: "128",
    x2: "120",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M160,184H144a23.9,23.9,0,0,1-24-24V96a23.9,23.9,0,0,1,24-24h16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "24",
    y: "100",
    width: "56",
    height: "56",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("rect", {
    x: "160",
    y: "40",
    width: "64",
    height: "64",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("rect", {
    x: "160",
    y: "152",
    width: "64",
    height: "64",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "80",
    y1: "128",
    x2: "120",
    y2: "128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M160,184H144a23.9,23.9,0,0,1-24-24V96a23.9,23.9,0,0,1,24-24h16",
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

var TreeStructure = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
TreeStructure.displayName = "TreeStructure";

export default TreeStructure;
//# sourceMappingURL=TreeStructure.esm.js.map
