import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M224,127.4a95.6,95.6,0,0,1-28.2,68.5c-36.9,36.9-97.3,37.3-134.7.9A96,96,0,0,1,128.6,32a8.1,8.1,0,0,1,7.8,9.8,32,32,0,0,0,30.8,39,8,8,0,0,1,8,8,32,32,0,0,0,39,30.8A8.1,8.1,0,0,1,224,127.4Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("circle", {
    cx: "156",
    cy: "172",
    r: "16"
  }), React.createElement("circle", {
    cx: "92",
    cy: "164",
    r: "16"
  }), React.createElement("circle", {
    cx: "84",
    cy: "108",
    r: "16"
  }), React.createElement("circle", {
    cx: "136",
    cy: "124",
    r: "16"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M224,127.4a95.6,95.6,0,0,1-28.2,68.5c-36.9,36.9-97.3,37.3-134.7.9A96,96,0,0,1,128.6,32a8.1,8.1,0,0,1,7.8,9.8,32,32,0,0,0,30.8,39,8,8,0,0,1,8,8,32,32,0,0,0,39,30.8A8.1,8.1,0,0,1,224,127.4Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M224,127.4a95.6,95.6,0,0,1-28.2,68.5c-36.9,36.9-97.3,37.3-134.7.9A96,96,0,0,1,128.6,32a8.1,8.1,0,0,1,7.8,9.8,32,32,0,0,0,30.8,39,8,8,0,0,1,8,8,32,32,0,0,0,39,30.8A8.1,8.1,0,0,1,224,127.4Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "156",
    cy: "172",
    r: "12"
  }), React.createElement("circle", {
    cx: "92",
    cy: "164",
    r: "12"
  }), React.createElement("circle", {
    cx: "84",
    cy: "108",
    r: "12"
  }), React.createElement("circle", {
    cx: "136",
    cy: "124",
    r: "12"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M225.9,114.9a15.8,15.8,0,0,0-13.4-3.1,23.9,23.9,0,0,1-29.3-23.1,16,16,0,0,0-15.9-15.9,23.9,23.9,0,0,1-23.1-29.3A16.1,16.1,0,0,0,128.6,24H128A104.1,104.1,0,0,0,24,128.7a104,104,0,0,0,208-1.3h0A15.7,15.7,0,0,0,225.9,114.9ZM75.5,99.5a12,12,0,1,1,0,17A12,12,0,0,1,75.5,99.5Zm25,73a12,12,0,1,1,0-17A12,12,0,0,1,100.5,172.5Zm27-40a12,12,0,1,1,17,0A12,12,0,0,1,127.5,132.5Zm37,48a12,12,0,1,1,0-17A12,12,0,0,1,164.5,180.5Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M224,127.4a95.6,95.6,0,0,1-28.2,68.5c-36.9,36.9-97.3,37.3-134.7.9A96,96,0,0,1,128.6,32a8.1,8.1,0,0,1,7.8,9.8,32,32,0,0,0,30.8,39,8,8,0,0,1,8,8,32,32,0,0,0,39,30.8A8.1,8.1,0,0,1,224,127.4Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("circle", {
    cx: "156",
    cy: "172",
    r: "10"
  }), React.createElement("circle", {
    cx: "92",
    cy: "164",
    r: "10"
  }), React.createElement("circle", {
    cx: "84",
    cy: "108",
    r: "10"
  }), React.createElement("circle", {
    cx: "136",
    cy: "124",
    r: "10"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M224,127.4a95.6,95.6,0,0,1-28.2,68.5c-36.9,36.9-97.3,37.3-134.7.9A96,96,0,0,1,128.6,32a8.1,8.1,0,0,1,7.8,9.8,32,32,0,0,0,30.8,39,8,8,0,0,1,8,8,32,32,0,0,0,39,30.8A8.1,8.1,0,0,1,224,127.4Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("circle", {
    cx: "156",
    cy: "172",
    r: "8"
  }), React.createElement("circle", {
    cx: "92",
    cy: "164",
    r: "8"
  }), React.createElement("circle", {
    cx: "84",
    cy: "108",
    r: "8"
  }), React.createElement("circle", {
    cx: "136",
    cy: "124",
    r: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M224,127.4a95.6,95.6,0,0,1-28.2,68.5c-36.9,36.9-97.3,37.3-134.7.9A96,96,0,0,1,128.6,32a8.1,8.1,0,0,1,7.8,9.8,32,32,0,0,0,30.8,39,8,8,0,0,1,8,8,32,32,0,0,0,39,30.8A8.1,8.1,0,0,1,224,127.4Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "156",
    cy: "172",
    r: "12"
  }), React.createElement("circle", {
    cx: "92",
    cy: "164",
    r: "12"
  }), React.createElement("circle", {
    cx: "84",
    cy: "108",
    r: "12"
  }), React.createElement("circle", {
    cx: "136",
    cy: "124",
    r: "12"
  }));
});

var renderPath = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};

var Cookie = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Cookie.displayName = "Cookie";

export default Cookie;
//# sourceMappingURL=Cookie.esm.js.map
