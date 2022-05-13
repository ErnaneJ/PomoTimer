import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "40",
    y1: "168",
    x2: "216",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "216",
    y1: "168",
    x2: "40",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M152,136a24,24,0,0,1-48,0c0-24,24-40,24-40S152,112,152,136Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M180,108a52,52,0,0,1-104,0c0-44,52-76,52-76S180,64,180,108Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,32S76,64,76,108a52,52,0,0,0,52,52,23.9,23.9,0,0,1-24-24c0-24,24-40,24-40s24,16,24,40a23.9,23.9,0,0,1-24,24,52,52,0,0,0,52-52C180,64,128,32,128,32Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M180,108a52,52,0,0,1-104,0c0-44,52-76,52-76S180,64,180,108Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "40",
    y1: "168",
    x2: "216",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "216",
    y1: "168",
    x2: "40",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M152,136a24,24,0,0,1-48,0c0-24,24-40,24-40S152,112,152,136Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M132.2,25.2a7.9,7.9,0,0,0-8.4,0A153.5,153.5,0,0,0,96.2,48C77.8,67.1,68,87.9,68,108a60,60,0,0,0,120,0C188,60.1,134.5,26.6,132.2,25.2ZM128,152a23.9,23.9,0,0,1-24-24c0-24,24-40,24-40s24,16,24,40A23.9,23.9,0,0,1,128,152Zm95.6,74.4A8,8,0,0,1,216,232a6.7,6.7,0,0,1-2.4-.4L128,204.4,42.4,231.6a6.7,6.7,0,0,1-2.4.4,8,8,0,0,1-7.6-5.6,7.9,7.9,0,0,1,5.2-10l64-20.4-64-20.4a8,8,0,1,1,4.8-15.2L128,187.6l85.6-27.2a8,8,0,1,1,4.8,15.2l-64,20.4,64,20.4A7.9,7.9,0,0,1,223.6,226.4Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "40",
    y1: "168",
    x2: "216",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "216",
    y1: "168",
    x2: "40",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M152,136a24,24,0,0,1-48,0c0-24,24-40,24-40S152,112,152,136Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M180,108a52,52,0,0,1-104,0c0-44,52-76,52-76S180,64,180,108Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "40",
    y1: "168",
    x2: "216",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "216",
    y1: "168",
    x2: "40",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M152,136a24,24,0,0,1-48,0c0-24,24-40,24-40S152,112,152,136Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M180,108a52,52,0,0,1-104,0c0-44,52-76,52-76S180,64,180,108Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "40",
    y1: "168",
    x2: "216",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "216",
    y1: "168",
    x2: "40",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M152,136a24,24,0,0,1-48,0c0-24,24-40,24-40S152,112,152,136Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M180,108a52,52,0,0,1-104,0c0-44,52-76,52-76S180,64,180,108Z",
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

var Campfire = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Campfire.displayName = "Campfire";

export default Campfire;
//# sourceMappingURL=Campfire.esm.js.map
