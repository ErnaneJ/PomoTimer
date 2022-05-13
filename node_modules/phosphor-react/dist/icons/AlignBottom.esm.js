import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "216",
    y1: "216",
    x2: "40",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("rect", {
    x: "122",
    y: "98",
    width: "104",
    height: "52",
    rx: "8",
    transform: "translate(50 298) rotate(-90)",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("rect", {
    x: "56",
    y: "32",
    width: "52",
    height: "144",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "116",
    y: "100",
    width: "112",
    height: "56",
    rx: "8",
    transform: "translate(44 300) rotate(-90)",
    opacity: "0.2"
  }), React.createElement("rect", {
    x: "56",
    y: "32",
    width: "56",
    height: "152",
    rx: "8",
    opacity: "0.2"
  }), React.createElement("line", {
    x1: "216",
    y1: "216",
    x2: "40",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("rect", {
    x: "116",
    y: "100",
    width: "112",
    height: "56",
    rx: "8",
    transform: "translate(44 300) rotate(-90)",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("rect", {
    x: "56",
    y: "32",
    width: "56",
    height: "152",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216Zm-72-24h40a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H152a16,16,0,0,0-16,16v96A16,16,0,0,0,152,192Zm-88,0h40a16,16,0,0,0,16-16V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V176A16,16,0,0,0,64,192Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "216",
    y1: "216",
    x2: "40",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("rect", {
    x: "116",
    y: "100",
    width: "112",
    height: "56",
    rx: "8",
    transform: "translate(44 300) rotate(-90)",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("rect", {
    x: "56",
    y: "32",
    width: "56",
    height: "152",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "216",
    y1: "216",
    x2: "40",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("rect", {
    x: "116",
    y: "100",
    width: "112",
    height: "56",
    rx: "8",
    transform: "translate(44 300) rotate(-90)",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("rect", {
    x: "56",
    y: "32",
    width: "56",
    height: "152",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "216",
    y1: "216",
    x2: "40",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("rect", {
    x: "116",
    y: "100",
    width: "112",
    height: "56",
    rx: "8",
    transform: "translate(44 300) rotate(-90)",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("rect", {
    x: "56",
    y: "32",
    width: "56",
    height: "152",
    rx: "8",
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

var AlignBottom = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
AlignBottom.displayName = "AlignBottom";

export default AlignBottom;
//# sourceMappingURL=AlignBottom.esm.js.map
