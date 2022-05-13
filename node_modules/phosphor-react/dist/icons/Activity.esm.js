import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "24 128 56 128 96 40 160 208 200 128 232 128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "24 128 56 128 96 40 160 208 200 128 232 128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M160,216h-.4a8.1,8.1,0,0,1-7.1-5.2L95.4,60.8,63.3,131.3A8,8,0,0,1,56,136H24a8,8,0,0,1,0-16H50.9L88.7,36.7A8.2,8.2,0,0,1,96.3,32a8,8,0,0,1,7.2,5.2L161,188.1l31.8-63.7A8.2,8.2,0,0,1,200,120h32a8,8,0,0,1,0,16H204.9l-37.7,75.6A8.2,8.2,0,0,1,160,216Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "24 128 56 128 96 40 160 208 200 128 232 128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "24 128 56 128 96 40 160 208 200 128 232 128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "24 128 56 128 96 40 160 208 200 128 232 128",
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

var Activity = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Activity.displayName = "Activity";

export default Activity;
//# sourceMappingURL=Activity.esm.js.map
