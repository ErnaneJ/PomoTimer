import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "64",
    cy: "120",
    r: "16"
  }), React.createElement("ellipse", {
    cx: "64",
    cy: "120",
    rx: "40",
    ry: "80",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M104,120v88a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V120c0-44.2-17.9-80-40-80H64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "104",
    y1: "120",
    x2: "124",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "164",
    y1: "120",
    x2: "172",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "212",
    y1: "120",
    x2: "232",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("ellipse", {
    cx: "64",
    cy: "120",
    rx: "40",
    ry: "80",
    opacity: "0.2"
  }), React.createElement("circle", {
    cx: "64",
    cy: "120",
    r: "12"
  }), React.createElement("ellipse", {
    cx: "64",
    cy: "120",
    rx: "40",
    ry: "80",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M104,120v88a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V120c0-44.2-17.9-80-40-80H64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "104",
    y1: "120",
    x2: "128",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "160",
    y1: "120",
    x2: "176",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "208",
    y1: "120",
    x2: "232",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M184,120a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h16A8,8,0,0,1,184,120Zm56,0v88a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V186.3C87.4,200.4,76.2,208,64,208c-13.9,0-26.5-9.9-35.4-27.9C20.5,163.9,16,142.6,16,120s4.5-43.9,12.6-60.1C37.5,41.9,50.1,32,64,32H192c13.9,0,26.5,9.9,35.4,27.9C235.5,76.1,240,97.4,240,120ZM76,120a12,12,0,1,0-12,12A12,12,0,0,0,76,120Zm148,8H208a8,8,0,0,1,0-16h15.8c-2-38.1-17.6-64-31.8-64H92.1a65,65,0,0,1,7.3,11.9c7.2,14.2,11.5,32.5,12.4,52.1H128a8,8,0,0,1,0,16H112v80H224Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "64",
    cy: "120",
    r: "10"
  }), React.createElement("ellipse", {
    cx: "64",
    cy: "120",
    rx: "40",
    ry: "80",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M104,120v88a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V120c0-44.2-17.9-80-40-80H64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "104",
    y1: "120",
    x2: "128",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "160",
    y1: "120",
    x2: "176",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "208",
    y1: "120",
    x2: "232",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "64",
    cy: "120",
    r: "8"
  }), React.createElement("ellipse", {
    cx: "64",
    cy: "120",
    rx: "40",
    ry: "80",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M104,120v88a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V120c0-44.2-17.9-80-40-80H64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "104",
    y1: "120",
    x2: "128",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "160",
    y1: "120",
    x2: "176",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "208",
    y1: "120",
    x2: "232",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "64",
    cy: "120",
    r: "12"
  }), React.createElement("ellipse", {
    cx: "64",
    cy: "120",
    rx: "40",
    ry: "80",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M104,120v88a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V120c0-44.2-17.9-80-40-80H64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "104",
    y1: "120",
    x2: "128",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "160",
    y1: "120",
    x2: "176",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "208",
    y1: "120",
    x2: "232",
    y2: "120",
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

var ToiletPaper = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
ToiletPaper.displayName = "ToiletPaper";

export default ToiletPaper;
//# sourceMappingURL=ToiletPaper.esm.js.map
