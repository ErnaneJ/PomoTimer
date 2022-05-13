import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M92,60h72a48,48,0,0,1,48,48V220a8,8,0,0,1-8,8H52a8,8,0,0,1-8-8V108A48,48,0,0,1,92,60Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M84,228V152a16,16,0,0,1,16-16h56a16,16,0,0,1,16,16v76",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M96,60V36a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "108",
    y1: "100",
    x2: "148",
    y2: "100",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "84",
    y1: "172",
    x2: "172",
    y2: "172",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "140",
    y1: "172",
    x2: "140",
    y2: "188",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M160,48H96A48,48,0,0,0,48,96V216a8,8,0,0,0,8,8H80V152a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16v72h24a8,8,0,0,0,8-8V96A48,48,0,0,0,160,48Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M96,48h64a48,48,0,0,1,48,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V96A48,48,0,0,1,96,48Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M80,224V152a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16v72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M96,48V32a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "112",
    y1: "88",
    x2: "144",
    y2: "88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "80",
    y1: "168",
    x2: "176",
    y2: "168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "144",
    y1: "168",
    x2: "144",
    y2: "184",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M168,40.6V32A24.1,24.1,0,0,0,144,8H112A24.1,24.1,0,0,0,88,32v8.6A56,56,0,0,0,40,96V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V96A56,56,0,0,0,168,40.6ZM104,32a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v8H104Zm8,40h32a8,8,0,0,1,0,16H112a8,8,0,0,1,0-16Zm64,144H80V176h56v8a8,8,0,0,0,16,0v-8h24Zm0-56H80v-8a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M96,48h64a48,48,0,0,1,48,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V96A48,48,0,0,1,96,48Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M80,224V152a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16v72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M96,48V32a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "112",
    y1: "88",
    x2: "144",
    y2: "88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "80",
    y1: "168",
    x2: "176",
    y2: "168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "144",
    y1: "168",
    x2: "144",
    y2: "184",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M96,48h64a48,48,0,0,1,48,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V96A48,48,0,0,1,96,48Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M80,224V152a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16v72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M96,48V32a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "112",
    y1: "88",
    x2: "144",
    y2: "88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "80",
    y1: "168",
    x2: "176",
    y2: "168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "144",
    y1: "168",
    x2: "144",
    y2: "184",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M96,48h64a48,48,0,0,1,48,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V96A48,48,0,0,1,96,48Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M80,224V152a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16v72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M96,48V32a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "112",
    y1: "88",
    x2: "144",
    y2: "88",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "80",
    y1: "168",
    x2: "176",
    y2: "168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "144",
    y1: "168",
    x2: "144",
    y2: "184",
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

var Backpack = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Backpack.displayName = "Backpack";

export default Backpack;
//# sourceMappingURL=Backpack.esm.js.map
