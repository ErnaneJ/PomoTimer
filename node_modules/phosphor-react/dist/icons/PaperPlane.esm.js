import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M120.9,36.5,26.3,205.4A8,8,0,0,0,36,216.8L125.2,185a7.2,7.2,0,0,1,5.4,0l89.2,31.8a8,8,0,0,0,9.7-11.4L134.9,36.5A8,8,0,0,0,120.9,36.5Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "127.9",
    y1: "184",
    x2: "127.9",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M120.9,36.5,26.3,205.4A8,8,0,0,0,36,216.8L125.2,185a7.2,7.2,0,0,1,5.4,0l89.2,31.8a8,8,0,0,0,9.7-11.4L134.9,36.5A8,8,0,0,0,120.9,36.5Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M120.9,36.5,26.3,205.4A8,8,0,0,0,36,216.8L125.2,185a7.2,7.2,0,0,1,5.4,0l89.2,31.8a8,8,0,0,0,9.7-11.4L134.9,36.5A8,8,0,0,0,120.9,36.5Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "127.9",
    y1: "184",
    x2: "127.9",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M236.4,201.5,141.8,32.6a16,16,0,0,0-27.9,0L19.3,201.5a15.7,15.7,0,0,0,1.8,18.1,15.9,15.9,0,0,0,17.6,4.8l78.5-28.1a4.1,4.1,0,0,0,2.7-3.8V120.3a8.2,8.2,0,0,1,7.4-8.3,8,8,0,0,1,8.6,8v72.5a4,4,0,0,0,2.6,3.8l78.6,28.1a17,17,0,0,0,5.4.9,16,16,0,0,0,13.9-23.8Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M120.9,36.5,26.3,205.4A8,8,0,0,0,36,216.8L125.2,185a7.2,7.2,0,0,1,5.4,0l89.2,31.8a8,8,0,0,0,9.7-11.4L134.9,36.5A8,8,0,0,0,120.9,36.5Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "127.9",
    y1: "184",
    x2: "127.9",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M120.9,36.5,26.3,205.4A8,8,0,0,0,36,216.8L125.2,185a7.2,7.2,0,0,1,5.4,0l89.2,31.8a8,8,0,0,0,9.7-11.4L134.9,36.5A8,8,0,0,0,120.9,36.5Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "127.9",
    y1: "184",
    x2: "127.9",
    y2: "120",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M120.9,36.5,26.3,205.4A8,8,0,0,0,36,216.8L125.2,185a7.2,7.2,0,0,1,5.4,0l89.2,31.8a8,8,0,0,0,9.7-11.4L134.9,36.5A8,8,0,0,0,120.9,36.5Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "127.9",
    y1: "184",
    x2: "127.9",
    y2: "120",
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

var PaperPlane = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
PaperPlane.displayName = "PaperPlane";

export default PaperPlane;
//# sourceMappingURL=PaperPlane.esm.js.map
