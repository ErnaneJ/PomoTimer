import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M163.1,152A35.8,35.8,0,0,1,136,179.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M136.1,191.2a47.9,47.9,0,0,0,39.2-39.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M174,47.8A259.4,259.4,0,0,0,132.6,9.4a8.1,8.1,0,0,0-9.2,0A259.4,259.4,0,0,0,82,47.8C54.5,79.3,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.5,79.3,174,47.8Zm9.2,105.6a55.8,55.8,0,0,1-45.8,45.7h-1.3a8,8,0,0,1-1.3-15.9,39.7,39.7,0,0,0,32.6-32.6,8,8,0,0,1,9.3-6.5A7.9,7.9,0,0,1,183.2,153.4Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M136.1,191.2a47.9,47.9,0,0,0,39.2-39.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M136.1,191.2a47.9,47.9,0,0,0,39.2-39.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M136.1,191.2a47.9,47.9,0,0,0,39.2-39.1",
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

var Drop = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Drop.displayName = "Drop";

export default Drop;
//# sourceMappingURL=Drop.esm.js.map
