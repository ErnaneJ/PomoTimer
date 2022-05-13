import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "48",
    y: "32",
    width: "160",
    height: "192",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("circle", {
    cx: "92",
    cy: "80",
    r: "16"
  }), React.createElement("circle", {
    cx: "92",
    cy: "176",
    r: "16"
  }), React.createElement("circle", {
    cx: "92",
    cy: "128",
    r: "16"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "48",
    y: "32",
    width: "160",
    height: "192",
    rx: "8",
    opacity: "0.2"
  }), React.createElement("rect", {
    x: "48",
    y: "32",
    width: "160",
    height: "192",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "84",
    cy: "80",
    r: "12"
  }), React.createElement("circle", {
    cx: "84",
    cy: "176",
    r: "12"
  }), React.createElement("circle", {
    cx: "84",
    cy: "128",
    r: "12"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM76,188a12,12,0,1,1,12-12A12,12,0,0,1,76,188Zm0-48a12,12,0,1,1,12-12A12,12,0,0,1,76,140Zm0-48A12,12,0,1,1,88,80,12,12,0,0,1,76,92Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "48",
    y: "32",
    width: "160",
    height: "192",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("circle", {
    cx: "84",
    cy: "80",
    r: "10"
  }), React.createElement("circle", {
    cx: "84",
    cy: "176",
    r: "10"
  }), React.createElement("circle", {
    cx: "84",
    cy: "128",
    r: "10"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "48",
    y: "32",
    width: "160",
    height: "192",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("circle", {
    cx: "84",
    cy: "80",
    r: "8"
  }), React.createElement("circle", {
    cx: "84",
    cy: "176",
    r: "8"
  }), React.createElement("circle", {
    cx: "84",
    cy: "128",
    r: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "48",
    y: "32",
    width: "160",
    height: "192",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "84",
    cy: "76",
    r: "12"
  }), React.createElement("circle", {
    cx: "84",
    cy: "180",
    r: "12"
  }), React.createElement("circle", {
    cx: "84",
    cy: "128",
    r: "12"
  }));
});

var renderPath = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};

var FilmScript = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
FilmScript.displayName = "FilmScript";

export default FilmScript;
//# sourceMappingURL=FilmScript.esm.js.map
