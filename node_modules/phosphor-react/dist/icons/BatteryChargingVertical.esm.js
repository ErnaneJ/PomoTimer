import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "100",
    y1: "12",
    x2: "156",
    y2: "12",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("rect", {
    x: "56",
    y: "48",
    width: "144",
    height: "180",
    rx: "16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("polyline", {
    points: "128 178 144 138 112 138 128 98",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "56",
    y: "40",
    width: "144",
    height: "184",
    rx: "16",
    opacity: "0.2"
  }), React.createElement("line", {
    x1: "96",
    y1: "8",
    x2: "160",
    y2: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("rect", {
    x: "56",
    y: "40",
    width: "144",
    height: "184",
    rx: "16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "128 172 144 132 112 132 128 92",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M96,16h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Z"
  }), React.createElement("path", {
    d: "M184,32H72A24.1,24.1,0,0,0,48,56V208a24.1,24.1,0,0,0,24,24H184a24.1,24.1,0,0,0,24-24V56A24.1,24.1,0,0,0,184,32ZM151.4,135l-16,40a7.9,7.9,0,0,1-7.4,5,8,8,0,0,1-3-.6,7.9,7.9,0,0,1-4.4-10.4l11.6-29H112a7.9,7.9,0,0,1-6.6-3.5,8,8,0,0,1-.8-7.5l16-40a8,8,0,1,1,14.8,6l-11.6,29H144a7.9,7.9,0,0,1,6.6,3.5A8,8,0,0,1,151.4,135Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "96",
    y1: "8",
    x2: "160",
    y2: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("rect", {
    x: "56",
    y: "40",
    width: "144",
    height: "184",
    rx: "16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("polyline", {
    points: "128 172 144 132 112 132 128 92",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "96",
    y1: "8",
    x2: "160",
    y2: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("rect", {
    x: "56",
    y: "40",
    width: "144",
    height: "184",
    rx: "16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("polyline", {
    points: "128 172 144 132 112 132 128 92",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "96",
    y1: "8",
    x2: "160",
    y2: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("rect", {
    x: "56",
    y: "40",
    width: "144",
    height: "184",
    rx: "16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("polyline", {
    points: "128 172 144 132 112 132 128 92",
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

var BatteryChargingVertical = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
BatteryChargingVertical.displayName = "BatteryChargingVertical";

export default BatteryChargingVertical;
//# sourceMappingURL=BatteryChargingVertical.esm.js.map
