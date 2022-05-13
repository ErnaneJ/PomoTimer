import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M44,143.3V52a8,8,0,0,1,8-8H204a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8H135.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("polyline", {
    points: "128 152 64 216 32 184",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polygon", {
    points: "44 44 44 196 60 212 212 212 212 44 44 44",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M44,143.3V52a8,8,0,0,1,8-8H204a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8H135.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "128 152 64 216 32 184",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M204,36H52A16,16,0,0,0,36,52v91.3a8,8,0,0,0,16,0V52H204V204H135.6a8,8,0,0,0,0,16H204a16,16,0,0,0,16-16V52A16,16,0,0,0,204,36Z"
  }), React.createElement("path", {
    d: "M133.7,146.3a8.1,8.1,0,0,0-11.4,0L64,204.7,37.7,178.3a8.1,8.1,0,0,0-11.4,11.4l32,32a8.2,8.2,0,0,0,11.4,0l64-64A8.1,8.1,0,0,0,133.7,146.3Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M44,143.3V52a8,8,0,0,1,8-8H204a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8H135.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("polyline", {
    points: "128 152 64 216 32 184",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M44,143.3V52a8,8,0,0,1,8-8H204a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8H135.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("polyline", {
    points: "128 152 64 216 32 184",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M44,143.3V52a8,8,0,0,1,8-8H204a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8H135.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "128 152 64 216 32 184",
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

var CheckSquareOffset = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
CheckSquareOffset.displayName = "CheckSquareOffset";

export default CheckSquareOffset;
//# sourceMappingURL=CheckSquareOffset.esm.js.map
