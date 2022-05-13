import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "108",
    cy: "188",
    r: "12",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "108",
    y1: "176",
    x2: "108",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M240.3,80A20,20,0,0,1,212,80a20,20,0,0,0-28.3,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M240.3,120a20,20,0,0,1-28.3,0,20,20,0,0,0-28.3,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M68,154.8V56a40,40,0,0,1,80,0v98.8h0a52,52,0,1,1-80,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "120",
    cy: "188",
    r: "20",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "120",
    y1: "168",
    x2: "120",
    y2: "48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M240.3,80A20,20,0,0,1,212,80a20,20,0,0,0-28.3,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M240.3,120a20,20,0,0,1-28.3,0,20,20,0,0,0-28.3,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M88,147V48a32,32,0,0,1,64,0v99h0a52,52,0,1,1-64,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M152,147h0V48a32,32,0,0,0-64,0v99h0a52,52,0,1,0,64,0Zm-32,61a20,20,0,1,1,20-20A20.1,20.1,0,0,1,120,208Z",
    opacity: "0.2"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M160,143.3V48a40,40,0,0,0-80,0v95.3A59.4,59.4,0,0,0,60,188a60,60,0,0,0,120,0A59.4,59.4,0,0,0,160,143.3ZM120,24a24.1,24.1,0,0,1,24,24v8H96V48A24.1,24.1,0,0,1,120,24Zm58.1,61.7a8,8,0,0,1,0-11.4,28,28,0,0,1,19.8-8.2,28.4,28.4,0,0,1,19.8,8.2,11.9,11.9,0,0,0,16.9,0,8,8,0,0,1,11.3,11.4,28,28,0,0,1-19.8,8.2,28.4,28.4,0,0,1-19.8-8.2,11.9,11.9,0,0,0-16.9,0A8,8,0,0,1,178.1,85.7Zm67.8,28.6a8,8,0,0,1,0,11.4,28,28,0,0,1-19.8,8.2,28.4,28.4,0,0,1-19.8-8.2,11.9,11.9,0,0,0-16.9,0,8,8,0,0,1-11.3-11.4,28,28,0,0,1,19.8-8.2,28.4,28.4,0,0,1,19.8,8.2,11.9,11.9,0,0,0,16.9,0A8,8,0,0,1,245.9,114.3Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "120",
    cy: "188",
    r: "20",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "120",
    y1: "168",
    x2: "120",
    y2: "48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M240.3,80A20,20,0,0,1,212,80a20,20,0,0,0-28.3,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M240.3,120a20,20,0,0,1-28.3,0,20,20,0,0,0-28.3,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M88,147V48a32,32,0,0,1,64,0v99h0a52,52,0,1,1-64,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "120",
    cy: "188",
    r: "20",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "120",
    y1: "168",
    x2: "120",
    y2: "48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M240.3,80A20,20,0,0,1,212,80a20,20,0,0,0-28.3,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M240.3,120a20,20,0,0,1-28.3,0,20,20,0,0,0-28.3,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M88,147V48a32,32,0,0,1,64,0v99h0a52,52,0,1,1-64,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "120",
    cy: "188",
    r: "20",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "120",
    y1: "168",
    x2: "120",
    y2: "48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M240.3,80A20,20,0,0,1,212,80a20,20,0,0,0-28.3,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M240.3,120a20,20,0,0,1-28.3,0,20,20,0,0,0-28.3,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M88,147V48a32,32,0,0,1,64,0v99h0a52,52,0,1,1-64,0Z",
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

var ThermometerHot = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
ThermometerHot.displayName = "ThermometerHot";

export default ThermometerHot;
//# sourceMappingURL=ThermometerHot.esm.js.map
