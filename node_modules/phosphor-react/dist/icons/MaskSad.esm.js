import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M146.1,120a24,24,0,0,0,35.8,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M74.1,120a24,24,0,0,0,35.8,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M154.5,184a47.9,47.9,0,0,0-53,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M216,48.3a7.9,7.9,0,0,0-10.9-7.4C190,46.7,160.9,56,128,56S66,46.7,50.9,40.9A7.9,7.9,0,0,0,40,48.3V104c0,70.7,39.4,128,88,128s88-57.3,88-128Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M216,48.3a7.9,7.9,0,0,0-10.9-7.4C190,46.7,160.9,56,128,56S66,46.7,50.9,40.9A7.9,7.9,0,0,0,40,48.3V104c0,70.7,39.4,128,88,128s88-57.3,88-128Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M146.1,120a24,24,0,0,0,35.8,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M74.1,120a24,24,0,0,0,35.8,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M154.5,184a47.9,47.9,0,0,0-53,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M216,48.3a7.9,7.9,0,0,0-10.9-7.4C190,46.7,160.9,56,128,56S66,46.7,50.9,40.9A7.9,7.9,0,0,0,40,48.3V104c0,70.7,39.4,128,88,128s88-57.3,88-128Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M217,35.1a15.9,15.9,0,0,0-14.8-1.7C188.2,38.9,159.8,48,128,48S67.8,38.9,53.8,33.4A16,16,0,0,0,32,48.3V104c0,35.8,9.7,69.5,27.2,95s42.6,41,68.8,41,50.7-14.5,68.8-41S224,139.8,224,104V48.3A15.9,15.9,0,0,0,217,35.1ZM68.2,125.3a8,8,0,0,1,.6-11.3,8,8,0,0,1,11.3.7,16,16,0,0,0,23.8,0,8,8,0,0,1,11.3-.7,8,8,0,0,1,.6,11.3,31.8,31.8,0,0,1-47.6,0Zm93,63.1a8.1,8.1,0,0,1-11.1,2.3,39.8,39.8,0,0,0-44.2,0,8,8,0,0,1-11.1-2.3A8.1,8.1,0,0,1,97,177.3a56.3,56.3,0,0,1,62,0A8.1,8.1,0,0,1,161.2,188.4Zm26.6-63.1a31.8,31.8,0,0,1-47.6,0,8,8,0,0,1,.6-11.3,8,8,0,0,1,11.3.7,16,16,0,0,0,23.8,0,8,8,0,0,1,11.3-.7A8,8,0,0,1,187.8,125.3Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M146.1,120a24,24,0,0,0,35.8,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M74.1,120a24,24,0,0,0,35.8,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M154.5,184a47.9,47.9,0,0,0-53,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M216,48.3a7.9,7.9,0,0,0-10.9-7.4C190,46.7,160.9,56,128,56S66,46.7,50.9,40.9A7.9,7.9,0,0,0,40,48.3V104c0,70.7,39.4,128,88,128s88-57.3,88-128Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M146.1,120a24,24,0,0,0,35.8,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M74.1,120a24,24,0,0,0,35.8,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M154.5,184a47.9,47.9,0,0,0-53,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M216,48.3a7.9,7.9,0,0,0-10.9-7.4C190,46.7,160.9,56,128,56S66,46.7,50.9,40.9A7.9,7.9,0,0,0,40,48.3V104c0,70.7,39.4,128,88,128s88-57.3,88-128Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M146.1,120a24,24,0,0,0,35.8,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M74.1,120a24,24,0,0,0,35.8,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M154.5,184a47.9,47.9,0,0,0-53,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M216,48.3a7.9,7.9,0,0,0-10.9-7.4C190,46.7,160.9,56,128,56S66,46.7,50.9,40.9A7.9,7.9,0,0,0,40,48.3V104c0,70.7,39.4,128,88,128s88-57.3,88-128Z",
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

var MaskSad = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
MaskSad.displayName = "MaskSad";

export default MaskSad;
//# sourceMappingURL=MaskSad.esm.js.map
