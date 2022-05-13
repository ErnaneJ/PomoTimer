import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M208.8,216H47.2a8.1,8.1,0,0,1-8-7.1L25,80.9A8,8,0,0,1,32.9,72H223.1a8,8,0,0,1,7.9,8.9l-14.2,128A8.1,8.1,0,0,1,208.8,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M88,104V72a40,40,0,0,1,80,0v32",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M208.8,216H47.2a8.1,8.1,0,0,1-8-7.1L25,80.9A8,8,0,0,1,32.9,72H223.1a8,8,0,0,1,7.9,8.9l-14.2,128A8.1,8.1,0,0,1,208.8,216Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M208.8,216H47.2a8.1,8.1,0,0,1-8-7.1L25,80.9A8,8,0,0,1,32.9,72H223.1a8,8,0,0,1,7.9,8.9l-14.2,128A8.1,8.1,0,0,1,208.8,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M88,104V72a40,40,0,0,1,80,0v32",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M235,69.3A15.9,15.9,0,0,0,223.1,64H175.3a48,48,0,0,0-94.6,0H32.9A15.9,15.9,0,0,0,21,69.3a16.2,16.2,0,0,0-4,12.5l14.3,128A15.9,15.9,0,0,0,47.2,224H208.8a15.9,15.9,0,0,0,15.9-14.2L239,81.8A16.2,16.2,0,0,0,235,69.3ZM96,104a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm1-40a32,32,0,0,1,62,0Zm79,40a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M208.8,216H47.2a8.1,8.1,0,0,1-8-7.1L25,80.9A8,8,0,0,1,32.9,72H223.1a8,8,0,0,1,7.9,8.9l-14.2,128A8.1,8.1,0,0,1,208.8,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M88,104V72a40,40,0,0,1,80,0v32",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M208.8,216H47.2a8.1,8.1,0,0,1-8-7.1L25,80.9A8,8,0,0,1,32.9,72H223.1a8,8,0,0,1,7.9,8.9l-14.2,128A8.1,8.1,0,0,1,208.8,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M88,104V72a40,40,0,0,1,80,0v32",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M208.8,216H47.2a8.1,8.1,0,0,1-8-7.1L25,80.9A8,8,0,0,1,32.9,72H223.1a8,8,0,0,1,7.9,8.9l-14.2,128A8.1,8.1,0,0,1,208.8,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M88,104V72a40,40,0,0,1,80,0v32",
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

var Tote = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Tote.displayName = "Tote";

export default Tote;
//# sourceMappingURL=Tote.esm.js.map
