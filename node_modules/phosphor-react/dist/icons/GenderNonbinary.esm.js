import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "164",
    r: "68",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "163.7",
    y1: "64",
    x2: "92.3",
    y2: "20",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "92.3",
    y1: "64",
    x2: "163.7",
    y2: "20",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "128",
    y1: "96",
    x2: "128",
    y2: "42",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "164",
    r: "68",
    opacity: "0.2"
  }), React.createElement("circle", {
    cx: "128",
    cy: "164",
    r: "68",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "163.7",
    y1: "68",
    x2: "92.3",
    y2: "20",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "92.3",
    y1: "68",
    x2: "163.7",
    y2: "20",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "128",
    y1: "96",
    x2: "128",
    y2: "44",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M136,88.4V59l23.3,15.6a7.2,7.2,0,0,0,4.4,1.4,8,8,0,0,0,4.5-14.6L142.3,44l25.9-17.4a8,8,0,1,0-8.9-13.2L128,34.4l-31.3-21a8,8,0,1,0-8.9,13.2L113.7,44,87.8,61.4A8,8,0,0,0,92.3,76a7.2,7.2,0,0,0,4.4-1.4L120,59V88.4a76,76,0,1,0,16,0ZM128,224a60,60,0,1,1,60-60A60,60,0,0,1,128,224Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "164",
    r: "68",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "163.7",
    y1: "68",
    x2: "92.3",
    y2: "20",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "92.3",
    y1: "68",
    x2: "163.7",
    y2: "20",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "128",
    y1: "96",
    x2: "128",
    y2: "44",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "164",
    r: "68",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "163.7",
    y1: "68",
    x2: "92.3",
    y2: "20",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "92.3",
    y1: "68",
    x2: "163.7",
    y2: "20",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "128",
    y1: "96",
    x2: "128",
    y2: "44",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "164",
    r: "68",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "163.7",
    y1: "68",
    x2: "92.3",
    y2: "20",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "92.3",
    y1: "68",
    x2: "163.7",
    y2: "20",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "128",
    y1: "96",
    x2: "128",
    y2: "44",
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

var GenderNonbinary = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
GenderNonbinary.displayName = "GenderNonbinary";

export default GenderNonbinary;
//# sourceMappingURL=GenderNonbinary.esm.js.map
