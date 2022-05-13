import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M12,168,34.3,93.7A8,8,0,0,1,42,88h60a8,8,0,0,1,7.7,5.7L132,168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M148,88h10a8,8,0,0,1,7.7,5.7L188,168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M204,88h10a8,8,0,0,1,7.7,5.7L244,168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "12",
    y1: "168",
    x2: "244",
    y2: "168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M8,168,30.3,93.7A8,8,0,0,1,38,88h84a8,8,0,0,1,7.7,5.7L152,168Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M8,168,30.3,93.7A8,8,0,0,1,38,88h84a8,8,0,0,1,7.7,5.7L152,168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M160,88h10a8,8,0,0,1,7.7,5.7L200,168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M208,88h10a8,8,0,0,1,7.7,5.7L248,168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "8",
    y1: "168",
    x2: "248",
    y2: "168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M256,168a8,8,0,0,1-8,8H8a8,8,0,0,1-8-8,8.5,8.5,0,0,1,.3-2.3H.4L22.6,91.4A16,16,0,0,1,38,80h84a16,16,0,0,1,15.4,11.4L158,160h31.2L170,96H160a8,8,0,0,1,0-16h10a16,16,0,0,1,15.4,11.4L206,160h31.2L218,96H208a8,8,0,0,1,0-16h10a16,16,0,0,1,15.4,11.4l22.2,74.2h.1A8.5,8.5,0,0,1,256,168Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M8,168,30.3,93.7A8,8,0,0,1,38,88h84a8,8,0,0,1,7.7,5.7L152,168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M160,88h10a8,8,0,0,1,7.7,5.7L200,168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M208,88h10a8,8,0,0,1,7.7,5.7L248,168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "8",
    y1: "168",
    x2: "248",
    y2: "168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M8,168,30.3,93.7A8,8,0,0,1,38,88h84a8,8,0,0,1,7.7,5.7L152,168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M160,88h10a8,8,0,0,1,7.7,5.7L200,168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M208,88h10a8,8,0,0,1,7.7,5.7L248,168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "8",
    y1: "168",
    x2: "248",
    y2: "168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M8,168,30.3,93.7A8,8,0,0,1,38,88h84a8,8,0,0,1,7.7,5.7L152,168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M160,88h10a8,8,0,0,1,7.7,5.7L200,168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M208,88h10a8,8,0,0,1,7.7,5.7L248,168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "8",
    y1: "168",
    x2: "248",
    y2: "168",
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

var Tabs = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Tabs.displayName = "Tabs";

export default Tabs;
//# sourceMappingURL=Tabs.esm.js.map
