import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M237.5,121.3,148.3,63.9A8,8,0,0,0,136,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,237.5,121.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M129.5,121.3,40.3,63.9A8,8,0,0,0,28,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,129.5,121.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M241.5,121.3,152.3,63.9A8,8,0,0,0,140,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,241.5,121.3Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M129.5,121.3,40.3,63.9A8,8,0,0,0,28,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,129.5,121.3Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M241.5,121.3,152.3,63.9A8,8,0,0,0,140,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,241.5,121.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M129.5,121.3,40.3,63.9A8,8,0,0,0,28,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,129.5,121.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M253.2,128a16,16,0,0,1-7.3,13.5l-89.2,57.3A16,16,0,0,1,132,185.3V142.7L44.7,198.8A16,16,0,0,1,20,185.3V70.7A16,16,0,0,1,44.7,57.2L132,113.3V70.7a16,16,0,0,1,24.7-13.5l89.2,57.3A16,16,0,0,1,253.2,128Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M241.5,121.3,152.3,63.9A8,8,0,0,0,140,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,241.5,121.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M129.5,121.3,40.3,63.9A8,8,0,0,0,28,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,129.5,121.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M241.5,121.3,152.3,63.9A8,8,0,0,0,140,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,241.5,121.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M129.5,121.3,40.3,63.9A8,8,0,0,0,28,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,129.5,121.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M241.5,121.3,152.3,63.9A8,8,0,0,0,140,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,241.5,121.3Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M129.5,121.3,40.3,63.9A8,8,0,0,0,28,70.7V185.3a8,8,0,0,0,12.3,6.8l89.2-57.4A7.9,7.9,0,0,0,129.5,121.3Z",
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

var FastForward = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
FastForward.displayName = "FastForward";

export default FastForward;
//# sourceMappingURL=FastForward.esm.js.map
