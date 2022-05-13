import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M126.3,68.2A52,52,0,0,0,28,92c0,68,100,124,100,124S228,160,228,92a52,52,0,0,0-88.8-36.8l-32,32,32,32-16,16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M139.2,55.2A52,52,0,0,1,228,92c0,68-100,124-100,124S28,160,28,92a52,52,0,0,1,98.3-23.8Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M126.3,68.2A52,52,0,0,0,28,92c0,68,100,124,100,124S228,160,228,92a52,52,0,0,0-88.8-36.8l-32,32,32,32-16,16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M236,92c0,30.6-17.7,62-52.6,93.4A314.3,314.3,0,0,1,131.9,223a8.1,8.1,0,0,1-7.8,0C119.8,220.6,20,163.9,20,92a60,60,0,0,1,92.3-50.6,4,4,0,0,1,.6,6.2l-18,18a8,8,0,0,0,0,11.3l34.4,34.3-15,15.1a7.9,7.9,0,0,0,0,11.3,8,8,0,0,0,5.6,2.3,8.3,8.3,0,0,0,5.7-2.3l20.7-20.7a8,8,0,0,0,0-11.3L111.9,71.2l21.7-21.6h0A59.3,59.3,0,0,1,176,32,60,60,0,0,1,236,92Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M126.3,68.2A52,52,0,0,0,28,92c0,68,100,124,100,124S228,160,228,92a52,52,0,0,0-88.8-36.8l-32,32,32,32-16,16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M126.3,68.2A52,52,0,0,0,28,92c0,68,100,124,100,124S228,160,228,92a52,52,0,0,0-88.8-36.8l-32,32,32,32-16,16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M126.3,68.2A52,52,0,0,0,28,92c0,68,100,124,100,124S228,160,228,92a52,52,0,0,0-88.8-36.8l-32,32,32,32-16,16",
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

var HeartBreak = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
HeartBreak.displayName = "HeartBreak";

export default HeartBreak;
//# sourceMappingURL=HeartBreak.esm.js.map
