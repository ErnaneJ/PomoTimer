import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M96,176H30a6,6,0,0,1-6-6V104A72,72,0,0,1,96,32h0a72,72,0,0,1,72,72h0A72,72,0,0,1,96,176Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M92.1,176A72,72,0,0,0,160,224h66a6,6,0,0,0,6-6V152a71.9,71.9,0,0,0-68.1-71.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M163.9,80.1A70.2,70.2,0,0,1,168,104h0a72,72,0,0,1-72,72H92.1A72,72,0,0,0,160,224h66a6,6,0,0,0,6-6V152a71.9,71.9,0,0,0-68.1-71.9Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M96,176H30a6,6,0,0,1-6-6V104A72,72,0,0,1,96,32h0a72,72,0,0,1,72,72h0A72,72,0,0,1,96,176Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M92.1,176A72,72,0,0,0,160,224h66a6,6,0,0,0,6-6V152a71.9,71.9,0,0,0-68.1-71.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M169.6,72.6A80,80,0,0,0,16,104v66a14,14,0,0,0,14,14H86.7A80.2,80.2,0,0,0,160,232h66a14,14,0,0,0,14-14V152A79.8,79.8,0,0,0,169.6,72.6ZM224,216H160a64.2,64.2,0,0,1-55.7-32.4A80.2,80.2,0,0,0,176,104a83.6,83.6,0,0,0-1.3-14.3A64,64,0,0,1,224,152Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M96,176H30a6,6,0,0,1-6-6V104A72,72,0,0,1,96,32h0a72,72,0,0,1,72,72h0A72,72,0,0,1,96,176Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M92.1,176A72,72,0,0,0,160,224h66a6,6,0,0,0,6-6V152a71.9,71.9,0,0,0-68.1-71.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M96,176H30a6,6,0,0,1-6-6V104A72,72,0,0,1,96,32h0a72,72,0,0,1,72,72h0A72,72,0,0,1,96,176Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M92.1,176A72,72,0,0,0,160,224h66a6,6,0,0,0,6-6V152a71.9,71.9,0,0,0-68.1-71.9",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M96,176H30a6,6,0,0,1-6-6V104A72,72,0,0,1,96,32h0a72,72,0,0,1,72,72h0A72,72,0,0,1,96,176Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M92.1,176A72,72,0,0,0,160,224h66a6,6,0,0,0,6-6V152a71.9,71.9,0,0,0-68.1-71.9",
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

var ChatsTeardrop = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
ChatsTeardrop.displayName = "ChatsTeardrop";

export default ChatsTeardrop;
//# sourceMappingURL=ChatsTeardrop.esm.js.map
