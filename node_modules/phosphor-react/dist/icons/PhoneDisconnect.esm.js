import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M155.4,101.3a83.9,83.9,0,0,0-55.1.1,8,8,0,0,0-5.2,5.9l-5.8,29.5a8.2,8.2,0,0,1-4.9,5.9L37.1,161.6a7.9,7.9,0,0,1-9.3-2.5,48,48,0,0,1,4-63.3,136.1,136.1,0,0,1,192.4,0,48,48,0,0,1,4,63.3,7.9,7.9,0,0,1-9.3,2.5l-47.3-18.9a8.2,8.2,0,0,1-4.9-5.8l-6.2-29.7A7.9,7.9,0,0,0,155.4,101.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "40",
    y1: "200",
    x2: "216",
    y2: "200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M155.4,101.3a83.9,83.9,0,0,0-55.1.1,8,8,0,0,0-5.2,5.9l-5.8,29.5a8.2,8.2,0,0,1-4.9,5.9L37.1,161.6a7.9,7.9,0,0,1-9.3-2.5,48,48,0,0,1,4-63.3,136.1,136.1,0,0,1,192.4,0,48,48,0,0,1,4,63.3,7.9,7.9,0,0,1-9.3,2.5l-47.3-18.9a8.2,8.2,0,0,1-4.9-5.8l-6.2-29.7A7.9,7.9,0,0,0,155.4,101.3Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M155.4,101.3a83.9,83.9,0,0,0-55.1.1,8,8,0,0,0-5.2,5.9l-5.8,29.5a8.2,8.2,0,0,1-4.9,5.9L37.1,161.6a7.9,7.9,0,0,1-9.3-2.5,48,48,0,0,1,4-63.3,136.1,136.1,0,0,1,192.4,0,48,48,0,0,1,4,63.3,7.9,7.9,0,0,1-9.3,2.5l-47.3-18.9a8.2,8.2,0,0,1-4.9-5.8l-6.2-29.7A7.9,7.9,0,0,0,155.4,101.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "40",
    y1: "200",
    x2: "216",
    y2: "200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M229.8,90.2C173.7,34,82.3,34,26.2,90.2a56.1,56.1,0,0,0-4.7,73.9,16.2,16.2,0,0,0,12.6,6.1,17.1,17.1,0,0,0,5.9-1.1l47.4-19a16,16,0,0,0,9.7-11.7l5.9-29.5a76.3,76.3,0,0,1,49.7-.1h0l6.2,29.7a15.9,15.9,0,0,0,9.7,11.6l47.4,19a16.1,16.1,0,0,0,18.5-5A56.1,56.1,0,0,0,229.8,90.2Z"
  }), React.createElement("path", {
    d: "M216,192H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M155.4,101.3a83.9,83.9,0,0,0-55.1.1,8,8,0,0,0-5.2,5.9l-5.8,29.5a8.2,8.2,0,0,1-4.9,5.9L37.1,161.6a7.9,7.9,0,0,1-9.3-2.5,48,48,0,0,1,4-63.3,136.1,136.1,0,0,1,192.4,0,48,48,0,0,1,4,63.3,7.9,7.9,0,0,1-9.3,2.5l-47.3-18.9a8.2,8.2,0,0,1-4.9-5.8l-6.2-29.7A7.9,7.9,0,0,0,155.4,101.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "40",
    y1: "200",
    x2: "216",
    y2: "200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M155.4,101.3a83.9,83.9,0,0,0-55.1.1,8,8,0,0,0-5.2,5.9l-5.8,29.5a8.2,8.2,0,0,1-4.9,5.9L37.1,161.6a7.9,7.9,0,0,1-9.3-2.5,48,48,0,0,1,4-63.3,136.1,136.1,0,0,1,192.4,0,48,48,0,0,1,4,63.3,7.9,7.9,0,0,1-9.3,2.5l-47.3-18.9a8.2,8.2,0,0,1-4.9-5.8l-6.2-29.7A7.9,7.9,0,0,0,155.4,101.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "40",
    y1: "200",
    x2: "216",
    y2: "200",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M155.4,101.3a83.9,83.9,0,0,0-55.1.1,8,8,0,0,0-5.2,5.9l-5.8,29.5a8.2,8.2,0,0,1-4.9,5.9L37.1,161.6a7.9,7.9,0,0,1-9.3-2.5,48,48,0,0,1,4-63.3,136.1,136.1,0,0,1,192.4,0,48,48,0,0,1,4,63.3,7.9,7.9,0,0,1-9.3,2.5l-47.3-18.9a8.2,8.2,0,0,1-4.9-5.8l-6.2-29.7A7.9,7.9,0,0,0,155.4,101.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "40",
    y1: "200",
    x2: "216",
    y2: "200",
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

var PhoneDisconnect = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
PhoneDisconnect.displayName = "PhoneDisconnect";

export default PhoneDisconnect;
//# sourceMappingURL=PhoneDisconnect.esm.js.map
