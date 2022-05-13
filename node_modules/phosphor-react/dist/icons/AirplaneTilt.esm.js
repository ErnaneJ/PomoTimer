import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M209.5,80.4,175.9,112l32,88-24,24-47.8-70-24.2,22v24l-24,24L73.7,182.1,31.9,168l24-24h24l24-24-72-48,24-24,88,32,31.7-33.5-.7.5a24,24,0,0,1,34,34Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M209.5,80.4,175.9,112l32,88-24,24-47.8-70-24.2,22v24l-24,24L73.7,182.1,31.9,168l24-24h24l24-24-72-48,24-24,88,32,31.7-33.5-.7.5a24,24,0,0,1,34,34Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M209.5,80.4,175.9,112l32,88-24,24-47.8-70-24.2,22v24l-24,24L73.7,182.1,31.9,168l24-24h24l24-24-72-48,24-24,88,32,31.7-33.5-.7.5a24,24,0,0,1,34,34Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M215,86.2l-29.8,28,30.2,83.1a8,8,0,0,1-1.9,8.4l-24,24a8.2,8.2,0,0,1-6.4,2.3,8.1,8.1,0,0,1-5.8-3.5l-42.6-62.3-18.8,17.3V204a8.2,8.2,0,0,1-2.4,5.7l-20,20a7.9,7.9,0,0,1-5.6,2.3l-1.8-.2a8,8,0,0,1-5.8-5.2L67.4,188.5,29.3,175.6a8,8,0,0,1-5.2-5.8,8.3,8.3,0,0,1,2.1-7.5l20-20a8.1,8.1,0,0,1,5.7-2.3H72.6l18.7-18.8L27.4,78.7a8.7,8.7,0,0,1-3.5-5.9,8.2,8.2,0,0,1,2.3-6.5l24-24a7.9,7.9,0,0,1,8.4-1.8l83.1,30.2,26.6-28.2a5.2,5.2,0,0,1,1-1.1,32,32,0,0,1,47,43.3A6.4,6.4,0,0,1,215,86.2Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M209.5,80.4,175.9,112l32,88-24,24-47.8-70-24.2,22v24l-24,24L73.7,182.1,31.9,168l24-24h24l24-24-72-48,24-24,88,32,31.7-33.5-.7.5a24,24,0,0,1,34,34Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M209.5,80.4,175.9,112l32,88-24,24-47.8-70-24.2,22v24l-24,24L73.7,182.1,31.9,168l24-24h24l24-24-72-48,24-24,88,32,31.7-33.5-.7.5a24,24,0,0,1,34,34Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M209.5,80.4,175.9,112l32,88-24,24-47.8-70-24.2,22v24l-24,24L73.7,182.1,31.9,168l24-24h24l24-24-72-48,24-24,88,32,31.7-33.5-.7.5a24,24,0,0,1,34,34Z",
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

var AirplaneTilt = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
AirplaneTilt.displayName = "AirplaneTilt";

export default AirplaneTilt;
//# sourceMappingURL=AirplaneTilt.esm.js.map
