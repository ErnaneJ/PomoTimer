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
  }), React.createElement("path", {
    d: "M150,102a21.9,21.9,0,1,1-6.4-15.6A22.3,22.3,0,0,1,150,102Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M154,150a25.9,25.9,0,1,1-7.6-18.4A25.9,25.9,0,0,1,154,150Z",
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
  }), React.createElement("path", {
    d: "M150,102a21.9,21.9,0,1,1-6.4-15.6A22.3,22.3,0,0,1,150,102Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M154,150a25.9,25.9,0,1,1-7.6-18.4A25.9,25.9,0,0,1,154,150Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm24,150a33.9,33.9,0,1,1-48-48,26.6,26.6,0,0,1,3.1-2.6l-.3-.2a29.9,29.9,0,0,1,0-42.4c11.3-11.3,31.1-11.3,42.4,0a29.9,29.9,0,0,1,0,42.4l-.3.2A26.6,26.6,0,0,1,152,126a33.8,33.8,0,0,1,0,48Z"
  }), React.createElement("path", {
    d: "M137.9,111.9a14,14,0,1,0-19.8,0A14.3,14.3,0,0,0,137.9,111.9Z"
  }), React.createElement("path", {
    d: "M128,132a18,18,0,0,0-12.7,30.7,18.4,18.4,0,0,0,25.4,0A18,18,0,0,0,128,132Z"
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
  }), React.createElement("path", {
    d: "M150,102a21.9,21.9,0,1,1-6.4-15.6A22.3,22.3,0,0,1,150,102Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M154,150a25.9,25.9,0,1,1-7.6-18.4A25.9,25.9,0,0,1,154,150Z",
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
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M150,102a21.9,21.9,0,1,1-6.4-15.6A22.3,22.3,0,0,1,150,102Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M154,150a25.9,25.9,0,1,1-7.6-18.4A25.9,25.9,0,0,1,154,150Z",
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
    cy: "128",
    r: "96",
    fill: "none",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M150,102a21.9,21.9,0,1,1-6.4-15.6A22.3,22.3,0,0,1,150,102Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M154,150a25.9,25.9,0,1,1-7.6-18.4A25.9,25.9,0,0,1,154,150Z",
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

var NumberCircleEight = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
NumberCircleEight.displayName = "NumberCircleEight";

export default NumberCircleEight;
//# sourceMappingURL=NumberCircleEight.esm.js.map
