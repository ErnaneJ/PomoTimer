import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "104",
    y1: "216",
    x2: "152",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "56",
    y1: "88",
    x2: "200",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M24,168c0,17.7,20,24,32,24s32-6.3,32-24L56,88Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M168,136c0,17.7,20,24,32,24s32-6.3,32-24L200,56Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M24,168c0,17.7,20,24,32,24s32-6.3,32-24L56,88Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M168,136c0,17.7,20,24,32,24s32-6.3,32-24L200,56Z",
    opacity: "0.2"
  }), React.createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "104",
    y1: "216",
    x2: "152",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "56",
    y1: "88",
    x2: "200",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M24,168c0,17.7,20,24,32,24s32-6.3,32-24L56,88Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M168,136c0,17.7,20,24,32,24s32-6.3,32-24L200,56Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M239.4,133l-32-80h0l-.5-.9h0l-.6-.8c-.1-.1-.1-.1-.1-.2l-.8-.8a.1.1,0,0,1-.1-.1l-.7-.5-.2-.2-.9-.5h-.2l-.8-.3h-.2l-1-.2h-3L136,62V40a8,8,0,0,0-16,0V65.6L54.3,80.2h-.7l-1,.4h-.2l-.8.4a.1.1,0,0,1-.1.1l-.9.7a.1.1,0,0,1-.1.1l-.6.7h-.1a2.4,2.4,0,0,0-.6.9l-.2.2-.4.9h-.1L16.6,165a8,8,0,0,0-.6,3c0,23.3,24.5,32,40,32s40-8.7,40-32a8,8,0,0,0-.6-3L66.9,93.8,120,82V208H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16H136V78.4l50.9-11.3L160.6,133a8,8,0,0,0-.6,3c0,23.3,24.5,32,40,32s40-8.7,40-32A8,8,0,0,0,239.4,133ZM32.6,168,56,109.5,79.4,168Zm144-32L200,77.5,223.4,136Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "104",
    y1: "216",
    x2: "152",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "56",
    y1: "88",
    x2: "200",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M24,168c0,17.7,20,24,32,24s32-6.3,32-24L56,88Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M168,136c0,17.7,20,24,32,24s32-6.3,32-24L200,56Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "104",
    y1: "216",
    x2: "152",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "56",
    y1: "88",
    x2: "200",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M24,168c0,17.7,20,24,32,24s32-6.3,32-24L56,88Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M168,136c0,17.7,20,24,32,24s32-6.3,32-24L200,56Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "128",
    y1: "40",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "104",
    y1: "216",
    x2: "152",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "56",
    y1: "88",
    x2: "200",
    y2: "56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M24,168c0,17.7,20,24,32,24s32-6.3,32-24L56,88Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M168,136c0,17.7,20,24,32,24s32-6.3,32-24L200,56Z",
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

var Scales = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Scales.displayName = "Scales";

export default Scales;
//# sourceMappingURL=Scales.esm.js.map
