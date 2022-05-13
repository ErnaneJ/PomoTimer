import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "84",
    y1: "32",
    x2: "84",
    y2: "72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "84",
    y1: "116",
    x2: "84",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M120,32V80a36,36,0,0,1-72,0V32",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M204,160H148S160,48,204,32V224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M204,160H148S160,48,204,32",
    opacity: "0.2"
  }), React.createElement("line", {
    x1: "84",
    y1: "32",
    x2: "84",
    y2: "72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "84",
    y1: "116",
    x2: "84",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M112,32l8,48a36,36,0,0,1-72,0l8-48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M204,160H148S160,48,204,32V224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M212,32V224a8,8,0,0,1-16,0V168H148a8.2,8.2,0,0,1-6-2.7,8.1,8.1,0,0,1-2-6.2,412.8,412.8,0,0,1,11.8-59.3c12-42.4,28.7-67.8,49.5-75.3A7.9,7.9,0,0,1,212,32ZM127.9,78.7l-8-48a8,8,0,1,0-15.8,2.6L110.6,72H92V32a8,8,0,0,0-16,0V72H57.4l6.5-38.7a8,8,0,1,0-15.8-2.6l-8,48h0A4.9,4.9,0,0,0,40,80a44.1,44.1,0,0,0,36,43.3V224a8,8,0,0,0,16,0V123.3A44.1,44.1,0,0,0,128,80a4.9,4.9,0,0,0-.1-1.2Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "84",
    y1: "32",
    x2: "84",
    y2: "72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "84",
    y1: "116",
    x2: "84",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M112,32l8,48a36,36,0,0,1-72,0l8-48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M204,160H148S160,48,204,32V224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "84",
    y1: "32",
    x2: "84",
    y2: "72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "84",
    y1: "116",
    x2: "84",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M112,32l8,48a36,36,0,0,1-72,0l8-48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M204,160H148S160,48,204,32V224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "84",
    y1: "32",
    x2: "84",
    y2: "72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "84",
    y1: "116",
    x2: "84",
    y2: "224",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M112,32l8,48a36,36,0,0,1-72,0l8-48",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M204,160H148S160,48,204,32V224",
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

var ForkKnife = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
ForkKnife.displayName = "ForkKnife";

export default ForkKnife;
//# sourceMappingURL=ForkKnife.esm.js.map
