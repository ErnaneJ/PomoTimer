import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "224",
    y1: "104",
    x2: "176",
    y2: "152",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "224",
    y1: "152",
    x2: "176",
    y2: "104",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M200,184v24a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3V72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M200,43.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3Z",
    opacity: "0.2"
  }), React.createElement("line", {
    x1: "224",
    y1: "104",
    x2: "176",
    y2: "152",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "224",
    y1: "152",
    x2: "176",
    y2: "104",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M200,173.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3V82.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M229.7,146.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L200,139.3l-18.3,18.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L188.7,128l-18.4-18.3a8.1,8.1,0,0,1,11.4-11.4L200,116.7l18.3-18.4a8.1,8.1,0,0,1,11.4,11.4L211.3,128Zm-26.9,18.5a3.9,3.9,0,0,0-5.6,0L193,169a24,24,0,0,1-17,7,23.6,23.6,0,0,1-17.2-7.3c-9.2-9.5-8.7-24.7.6-34.1l6.7-6.6-6.7-6.6c-9.5-9.6-9.7-25.4,0-34.7A24.1,24.1,0,0,1,193,87l4.2,4.2a3.9,3.9,0,0,0,5.6,0L207,87h0a2.9,2.9,0,0,0,1-2.3V43.8a16.6,16.6,0,0,0-9.2-15A15.9,15.9,0,0,0,180.7,32L16.3,196.4a16.3,16.3,0,0,0-4,17,15.9,15.9,0,0,0,15,10.6H192a16,16,0,0,0,16-16V171.2a3,3,0,0,0-1-2.2h0Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "224",
    y1: "104",
    x2: "176",
    y2: "152",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "224",
    y1: "152",
    x2: "176",
    y2: "104",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M200,173.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3V82.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "224",
    y1: "104",
    x2: "176",
    y2: "152",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "224",
    y1: "152",
    x2: "176",
    y2: "104",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M200,173.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3V82.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "224",
    y1: "104",
    x2: "176",
    y2: "152",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "224",
    y1: "152",
    x2: "176",
    y2: "104",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M200,173.3V208a8,8,0,0,1-8,8H27.3a8,8,0,0,1-5.6-13.7L186.3,37.7A8,8,0,0,1,200,43.3V82.7",
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

var CellSignalX = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
CellSignalX.displayName = "CellSignalX";

export default CellSignalX;
//# sourceMappingURL=CellSignalX.esm.js.map
