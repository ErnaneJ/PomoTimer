import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "16 100 128 164 240 100 128 36 16 100",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("polyline", {
    points: "16 148 128 212 240 148",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "16 104 128 168 240 104 128 40 16 104",
    opacity: "0.2"
  }), React.createElement("polygon", {
    points: "16 104 128 168 240 104 128 40 16 104",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "16 144 128 208 240 144",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M12,110.9l112,64a7.8,7.8,0,0,0,8,0l112-64a8,8,0,0,0,0-13.8l-112-64a7.7,7.7,0,0,0-8,0L12,97.1a8,8,0,0,0,0,13.8Z"
  }), React.createElement("path", {
    d: "M236,137.1,128,198.8,20,137.1a8,8,0,0,0-8,13.8l112,64a7.8,7.8,0,0,0,8,0l112-64a8,8,0,1,0-8-13.8Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "16 104 128 168 240 104 128 40 16 104",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("polyline", {
    points: "16 144 128 208 240 144",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "16 104 128 168 240 104 128 40 16 104",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("polyline", {
    points: "16 144 128 208 240 144",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "16 104 128 168 240 104 128 40 16 104",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "16 144 128 208 240 144",
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

var StackSimple = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
StackSimple.displayName = "StackSimple";

export default StackSimple;
//# sourceMappingURL=StackSimple.esm.js.map
