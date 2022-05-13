import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "152",
    cy: "48",
    r: "24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M44,132s56-56,88-26.4c17.9,16.5,32,42.4,72,42.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("polyline", {
    points: "152 232 152 176 109.5 145.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "128.3",
    y1: "102.6",
    x2: "72",
    y2: "232",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "152",
    cy: "48",
    r: "24",
    opacity: "0.2"
  }), React.createElement("circle", {
    cx: "152",
    cy: "48",
    r: "24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M48,128s56-56,88-26.4c17.9,16.5,32,42.4,72,42.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "130.5",
    y1: "97.4",
    x2: "72",
    y2: "232",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "152 232 152 176 109.5 145.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M120,48a32,32,0,1,1,32,32A32.1,32.1,0,0,1,120,48Zm88,88c-28.5,0-41.7-14.1-55.6-29.1-3.5-3.8-7.2-7.7-11-11.2-37.2-34.4-96.5,24.1-99.1,26.6a8.1,8.1,0,1,0,11.4,11.4,157.3,157.3,0,0,1,30.5-23.2c14.3-8.2,26.3-11.1,35.7-8.8l-17.7,40.7h0L64.7,228.8a7.9,7.9,0,0,0,4.1,10.5,7.1,7.1,0,0,0,3.2.7,7.9,7.9,0,0,0,7.3-4.8l33.6-77.3L144,180.1V232a8,8,0,0,0,16,0V176a7.8,7.8,0,0,0-3.4-6.5l-37.1-26.6,14.1-32.5,7.1,7.4C154.9,133,172.5,152,208,152a8,8,0,0,0,0-16Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "152",
    cy: "48",
    r: "24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M48,128s56-56,88-26.4c17.9,16.5,32,42.4,72,42.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "130.5",
    y1: "97.4",
    x2: "72",
    y2: "232",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("polyline", {
    points: "152 232 152 176 109.5 145.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "152",
    cy: "48",
    r: "24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M48,128s56-56,88-26.4c17.9,16.5,32,42.4,72,42.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "130.5",
    y1: "97.4",
    x2: "72",
    y2: "232",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("polyline", {
    points: "152 232 152 176 109.5 145.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "152",
    cy: "48",
    r: "24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M48,128s56-56,88-26.4c17.9,16.5,32,42.4,72,42.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "130.5",
    y1: "97.4",
    x2: "72",
    y2: "232",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "152 232 152 176 109.5 145.7",
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

var PersonSimpleWalk = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
PersonSimpleWalk.displayName = "PersonSimpleWalk";

export default PersonSimpleWalk;
//# sourceMappingURL=PersonSimpleWalk.esm.js.map
