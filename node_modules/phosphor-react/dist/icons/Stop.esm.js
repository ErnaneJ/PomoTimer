import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "52",
    y: "52",
    width: "152",
    height: "152",
    rx: "6.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "52",
    y: "52",
    width: "152",
    height: "152",
    rx: "6.9",
    opacity: "0.2"
  }), React.createElement("rect", {
    x: "52",
    y: "52",
    width: "152",
    height: "152",
    rx: "6.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "44",
    y: "44",
    width: "168",
    height: "168",
    rx: "14.9"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "52",
    y: "52",
    width: "152",
    height: "152",
    rx: "6.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "52",
    y: "52",
    width: "152",
    height: "152",
    rx: "6.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "52",
    y: "52",
    width: "152",
    height: "152",
    rx: "6.9",
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

var Stop = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Stop.displayName = "Stop";

export default Stop;
//# sourceMappingURL=Stop.esm.js.map
