import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M64,120h88a40,40,0,0,1,0,80H64V48h76a36,36,0,0,1,0,72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M64,120h88a40,40,0,0,1,0,80H64V48h76a36,36,0,0,1,0,72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M170.5,115.7A44,44,0,0,0,140,40H64a7.9,7.9,0,0,0-8,8V200a8,8,0,0,0,8,8h88a48,48,0,0,0,18.5-92.3ZM72,56h68a28,28,0,0,1,0,56H72Zm80,136H72V128h80a32,32,0,0,1,0,64Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M64,120h88a40,40,0,0,1,0,80H64V48h76a36,36,0,0,1,0,72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M64,120h88a40,40,0,0,1,0,80H64V48h76a36,36,0,0,1,0,72",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M64,120h88a40,40,0,0,1,0,80H64V48h76a36,36,0,0,1,0,72",
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

var TextBolder = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
TextBolder.displayName = "TextBolder";

export default TextBolder;
//# sourceMappingURL=TextBolder.esm.js.map
