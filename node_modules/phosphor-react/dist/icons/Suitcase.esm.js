import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "32",
    y: "68",
    width: "192",
    height: "144",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M168,212V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V212",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M88,72V216H40a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M168,72V216h48a8,8,0,0,0,8-8V80a8,8,0,0,0-8-8Z",
    opacity: "0.2"
  }), React.createElement("rect", {
    x: "32",
    y: "72",
    width: "192",
    height: "144",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M168,216V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M216,64H176V56a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,56v8H40A16,16,0,0,0,24,80V208a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM96,80h64V208H96Zm0-24a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "32",
    y: "72",
    width: "192",
    height: "144",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M168,216V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "32",
    y: "72",
    width: "192",
    height: "144",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M168,216V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "32",
    y: "72",
    width: "192",
    height: "144",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M168,216V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V216",
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

var Suitcase = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Suitcase.displayName = "Suitcase";

export default Suitcase;
//# sourceMappingURL=Suitcase.esm.js.map
