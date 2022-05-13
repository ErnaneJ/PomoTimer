import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M176,120a48,48,0,0,1-48,48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M64,199.6A95.6,95.6,0,0,0,129.9,224c51.5-1,93.4-43.1,94.1-94.6A96,96,0,0,0,128,32h-8V64L16,128l13.8,19.1a23.9,23.9,0,0,0,23.5,9.6c17.5-2.9,48.1-4.7,74.7,11.3h0L92.8,217.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("circle", {
    cx: "128",
    cy: "104",
    r: "16"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M92.8,217.3a95.2,95.2,0,0,0,37.1,6.7c51.5-1,93.4-43.1,94.1-94.6A96,96,0,0,0,128,32h-8V64L16,128l13.8,19.1a23.9,23.9,0,0,0,23.5,9.6c17.5-2.9,48.1-4.7,74.7,11.3h0Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M176,120a48,48,0,0,1-48,48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M64,199.6A95.6,95.6,0,0,0,129.9,224c51.5-1,93.4-43.1,94.1-94.6A96,96,0,0,0,128,32h-8V64L16,128l13.8,19.1a23.9,23.9,0,0,0,23.5,9.6c17.5-2.9,48.1-4.7,74.7,11.3h0L92.8,217.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "124",
    cy: "100",
    r: "12"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M202.1,55A103.2,103.2,0,0,0,128,24h-8a8,8,0,0,0-8,8V59.5L11.8,121.2a8,8,0,0,0-3.6,5.2,7.8,7.8,0,0,0,1.3,6.3l13.8,19.1a31.6,31.6,0,0,0,31.3,12.8c13.7-2.3,38.6-4.2,61.6,6.2L90,207.4a91.1,91.1,0,0,1-20.7-13.8,8,8,0,0,0-11.3.6,8,8,0,0,0,.7,11.3A103.5,103.5,0,0,0,128,232h2.1a104,104,0,0,0,72-177ZM124,112a12,12,0,1,1,12-12A12,12,0,0,1,124,112Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M176,120a48,48,0,0,1-48,48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M64,199.6A95.6,95.6,0,0,0,129.9,224c51.5-1,93.4-43.1,94.1-94.6A96,96,0,0,0,128,32h-8V64L16,128l13.8,19.1a23.9,23.9,0,0,0,23.5,9.6c17.5-2.9,48.1-4.7,74.7,11.3h0L92.8,217.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("circle", {
    cx: "124",
    cy: "100",
    r: "10"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M176,120a48,48,0,0,1-48,48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M64,199.6A95.6,95.6,0,0,0,129.9,224c51.5-1,93.4-43.1,94.1-94.6A96,96,0,0,0,128,32h-8V64L16,128l13.8,19.1a23.9,23.9,0,0,0,23.5,9.6c17.5-2.9,48.1-4.7,74.7,11.3h0L92.8,217.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("circle", {
    cx: "124",
    cy: "100",
    r: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M176,120a48,48,0,0,1-48,48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M64,199.6A95.6,95.6,0,0,0,129.9,224c51.5-1,93.4-43.1,94.1-94.6A96,96,0,0,0,128,32h-8V64L16,128l13.8,19.1a23.9,23.9,0,0,0,23.5,9.6c17.5-2.9,48.1-4.7,74.7,11.3h0L92.8,217.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "124",
    cy: "100",
    r: "12"
  }));
});

var renderPath = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};

var Horse = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Horse.displayName = "Horse";

export default Horse;
//# sourceMappingURL=Horse.esm.js.map
