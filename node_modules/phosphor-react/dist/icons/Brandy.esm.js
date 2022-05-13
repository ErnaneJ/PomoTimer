import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "128",
    y1: "176",
    x2: "128",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "88",
    y1: "224",
    x2: "168",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M201.8,40A88,88,0,1,1,54.2,40Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "40",
    y1: "88",
    x2: "216",
    y2: "88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M216,88A88,88,0,0,1,40,88Z",
    opacity: "0.2"
  }), React.createElement("line", {
    x1: "128",
    y1: "176",
    x2: "128",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "88",
    y1: "224",
    x2: "168",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M201.8,40A88,88,0,1,1,54.2,40Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "40",
    y1: "88",
    x2: "216",
    y2: "88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M224,88a96.2,96.2,0,0,0-15.5-52.4,8.2,8.2,0,0,0-6.7-3.6H54.2a8.2,8.2,0,0,0-6.7,3.6A96.1,96.1,0,0,0,120,183.7V216H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V183.7A96.2,96.2,0,0,0,224,88ZM58.7,48H197.3a78.8,78.8,0,0,1,10.3,32H48.4A78.8,78.8,0,0,1,58.7,48Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "128",
    y1: "176",
    x2: "128",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "88",
    y1: "224",
    x2: "168",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M201.8,40A88,88,0,1,1,54.2,40Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "40",
    y1: "88",
    x2: "216",
    y2: "88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "128",
    y1: "176",
    x2: "128",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "88",
    y1: "224",
    x2: "168",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M201.8,40A88,88,0,1,1,54.2,40Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "40",
    y1: "88",
    x2: "216",
    y2: "88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "128",
    y1: "176",
    x2: "128",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "88",
    y1: "224",
    x2: "168",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M201.8,40A88,88,0,1,1,54.2,40Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "40",
    y1: "88",
    x2: "216",
    y2: "88",
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

var Brandy = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Brandy.displayName = "Brandy";

export default Brandy;
//# sourceMappingURL=Brandy.esm.js.map
