import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("circle", {
    cx: "128",
    cy: "100",
    r: "16"
  }), React.createElement("circle", {
    cx: "128",
    cy: "156",
    r: "16"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    opacity: "0.2"
  }), React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "80",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "176",
    r: "12"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M232,128A104,104,0,1,0,128,232,104.2,104.2,0,0,0,232,128ZM116,80a12,12,0,1,1,12,12A12,12,0,0,1,116,80Zm0,48a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm0,48a12,12,0,1,1,12,12A12,12,0,0,1,116,176Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "80",
    r: "10"
  }), React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "10"
  }), React.createElement("circle", {
    cx: "128",
    cy: "176",
    r: "10"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("circle", {
    cx: "128",
    cy: "80",
    r: "8"
  }), React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "8"
  }), React.createElement("circle", {
    cx: "128",
    cy: "176",
    r: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "80",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "176",
    r: "12"
  }));
});

var renderPath = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};

var DotsThreeCircleVertical = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
DotsThreeCircleVertical.displayName = "DotsThreeCircleVertical";

export default DotsThreeCircleVertical;
//# sourceMappingURL=DotsThreeCircleVertical.esm.js.map
