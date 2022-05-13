import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "32 136 128 232 224 136 176 136 176 116 80 116 80 136 32 136",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "176",
    y1: "44",
    x2: "80",
    y2: "44",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "176",
    y1: "80",
    x2: "80",
    y2: "80",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "32 136 128 232 224 136 176 136 176 104 80 104 80 136 32 136",
    opacity: "0.2"
  }), React.createElement("polygon", {
    points: "32 136 128 232 224 136 176 136 176 104 80 104 80 136 32 136",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "176",
    y1: "40",
    x2: "80",
    y2: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "176",
    y1: "72",
    x2: "80",
    y2: "72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M229.7,141.7l-96,96a8.1,8.1,0,0,1-11.4,0l-96-96a8.4,8.4,0,0,1-1.7-8.8A8,8,0,0,1,32,128H72V104a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v24h40a8,8,0,0,1,7.4,4.9A8.4,8.4,0,0,1,229.7,141.7ZM184,40a8,8,0,0,0-8-8H80a8,8,0,0,0,0,16h96A8,8,0,0,0,184,40Zm0,32a8,8,0,0,0-8-8H80a8,8,0,0,0,0,16h96A8,8,0,0,0,184,72Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "32 136 128 232 224 136 176 136 176 104 80 104 80 136 32 136",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "176",
    y1: "40",
    x2: "80",
    y2: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "176",
    y1: "72",
    x2: "80",
    y2: "72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "32 136 128 232 224 136 176 136 176 104 80 104 80 136 32 136",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "176",
    y1: "40",
    x2: "80",
    y2: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "176",
    y1: "72",
    x2: "80",
    y2: "72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "32 136 128 232 224 136 176 136 176 104 80 104 80 136 32 136",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "176",
    y1: "40",
    x2: "80",
    y2: "40",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "176",
    y1: "72",
    x2: "80",
    y2: "72",
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

var ArrowFatLinesDown = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
ArrowFatLinesDown.displayName = "ArrowFatLinesDown";

export default ArrowFatLinesDown;
//# sourceMappingURL=ArrowFatLinesDown.esm.js.map
