import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M196,116v88.9a7.1,7.1,0,0,1-7.1,7.1H36a8,8,0,0,1-8-8V92a8,8,0,0,1,8-8H81.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H188A8,8,0,0,1,196,116Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M68,84V52a8,8,0,0,1,8-8h45.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H228a8,8,0,0,1,8,8v88.9a7.1,7.1,0,0,1-7.1,7.1H196",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M224,72H154.7a8.1,8.1,0,0,1-4.8-1.6L122.1,49.6a8.1,8.1,0,0,0-4.8-1.6H72a8,8,0,0,0-8,8V80H85.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H192a8,8,0,0,1,8,8v64h24.9a7.1,7.1,0,0,0,7.1-7.1V80A8,8,0,0,0,224,72Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M200,112v88.9a7.1,7.1,0,0,1-7.1,7.1H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H192A8,8,0,0,1,200,112Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M64,80V56a8,8,0,0,1,8-8h45.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H224a8,8,0,0,1,8,8v88.9a7.1,7.1,0,0,1-7.1,7.1H200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M224,64H154.7L126.9,43.2a15.6,15.6,0,0,0-9.6-3.2H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H192.9A15.2,15.2,0,0,0,208,200.9V184h16.9A15.2,15.2,0,0,0,240,168.9V80A16,16,0,0,0,224,64Zm0,104H208V112a16,16,0,0,0-16-16H122.7L94.9,75.2A15.6,15.6,0,0,0,85.3,72H72V56h45.3l27.8,20.8a15.6,15.6,0,0,0,9.6,3.2H224Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M200,112v88.9a7.1,7.1,0,0,1-7.1,7.1H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H192A8,8,0,0,1,200,112Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M64,80V56a8,8,0,0,1,8-8h45.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H224a8,8,0,0,1,8,8v88.9a7.1,7.1,0,0,1-7.1,7.1H200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M200,112v88.9a7.1,7.1,0,0,1-7.1,7.1H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H192A8,8,0,0,1,200,112Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M64,80V56a8,8,0,0,1,8-8h45.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H224a8,8,0,0,1,8,8v88.9a7.1,7.1,0,0,1-7.1,7.1H200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M200,112v88.9a7.1,7.1,0,0,1-7.1,7.1H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H192A8,8,0,0,1,200,112Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M200,112v88.9a7.1,7.1,0,0,1-7.1,7.1H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H192A8,8,0,0,1,200,112Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M64,80V56a8,8,0,0,1,8-8h45.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H224a8,8,0,0,1,8,8v88.9a7.1,7.1,0,0,1-7.1,7.1H200",
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

var Folders = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Folders.displayName = "Folders";

export default Folders;
//# sourceMappingURL=Folders.esm.js.map
