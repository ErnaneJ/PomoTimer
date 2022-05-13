import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "164",
    cy: "156",
    r: "16"
  }), React.createElement("circle", {
    cx: "92",
    cy: "156",
    r: "16"
  }), React.createElement("path", {
    d: "M24,192V169.1C24,111.6,70.2,64.2,127.6,64A104,104,0,0,1,232,168v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,192Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "32",
    y1: "56",
    x2: "63.1",
    y2: "87.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "224",
    y1: "56",
    x2: "193.1",
    y2: "86.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M24,192V169.1C24,111.6,70.2,64.2,127.6,64A104,104,0,0,1,232,168v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,192Z",
    opacity: "0.2"
  }), React.createElement("circle", {
    cx: "164",
    cy: "156",
    r: "12"
  }), React.createElement("circle", {
    cx: "92",
    cy: "156",
    r: "12"
  }), React.createElement("path", {
    d: "M24,192V169.1C24,111.6,70.2,64.2,127.6,64A104,104,0,0,1,232,168v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,192Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "32",
    y1: "56",
    x2: "63.1",
    y2: "87.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "224",
    y1: "56",
    x2: "193.1",
    y2: "86.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M207.1,88.7l-2.3-2.2,24.9-24.8a8.1,8.1,0,0,0-11.4-11.4l-25.9,26a111.5,111.5,0,0,0-128.6.2L37.7,50.3A8.1,8.1,0,0,0,26.3,61.7l25.1,25A113.4,113.4,0,0,0,16,169.1V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V168A111.2,111.2,0,0,0,207.1,88.7ZM92,168a12,12,0,1,1,12-12A12,12,0,0,1,92,168Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,168Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "164",
    cy: "156",
    r: "10"
  }), React.createElement("circle", {
    cx: "92",
    cy: "156",
    r: "10"
  }), React.createElement("path", {
    d: "M24,192V169.1C24,111.6,70.2,64.2,127.6,64A104,104,0,0,1,232,168v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,192Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "32",
    y1: "56",
    x2: "63.1",
    y2: "87.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "224",
    y1: "56",
    x2: "193.1",
    y2: "86.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "164",
    cy: "156",
    r: "8"
  }), React.createElement("circle", {
    cx: "92",
    cy: "156",
    r: "8"
  }), React.createElement("path", {
    d: "M24,192V169.1C24,111.6,70.2,64.2,127.6,64A104,104,0,0,1,232,168v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,192Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "32",
    y1: "56",
    x2: "63.1",
    y2: "87.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "224",
    y1: "56",
    x2: "193.1",
    y2: "86.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "164",
    cy: "156",
    r: "12"
  }), React.createElement("circle", {
    cx: "92",
    cy: "156",
    r: "12"
  }), React.createElement("path", {
    d: "M24,192V169.1C24,111.6,70.2,64.2,127.6,64A104,104,0,0,1,232,168v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,192Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "32",
    y1: "56",
    x2: "63.1",
    y2: "87.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "224",
    y1: "56",
    x2: "193.1",
    y2: "86.9",
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

var AndroidLogo = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
AndroidLogo.displayName = "AndroidLogo";

export default AndroidLogo;
//# sourceMappingURL=AndroidLogo.esm.js.map
