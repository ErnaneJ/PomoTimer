import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "40",
    y: "40",
    width: "176",
    height: "176",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M40,156H76.7a7.9,7.9,0,0,1,5.6,2.3l19.4,19.4a7.9,7.9,0,0,0,5.6,2.3h41.4a7.9,7.9,0,0,0,5.6-2.3l19.4-19.4a7.9,7.9,0,0,1,5.6-2.3H216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M76.7,160a7.9,7.9,0,0,1,5.6,2.3l19.4,19.4a7.9,7.9,0,0,0,5.6,2.3h41.4a7.9,7.9,0,0,0,5.6-2.3l19.4-19.4a7.9,7.9,0,0,1,5.6-2.3H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V160Z",
    opacity: "0.2"
  }), React.createElement("rect", {
    x: "40",
    y: "40",
    width: "176",
    height: "176",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M40,160H76.7a7.9,7.9,0,0,1,5.6,2.3l19.4,19.4a7.9,7.9,0,0,0,5.6,2.3h41.4a7.9,7.9,0,0,0,5.6-2.3l19.4-19.4a7.9,7.9,0,0,1,5.6-2.3H216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M208,32H48A16,16,0,0,0,32,48V159.9h0V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V168H76.7L96,187.3a15.9,15.9,0,0,0,11.3,4.7h41.4a15.9,15.9,0,0,0,11.3-4.7L179.3,168H208v40Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "40",
    y: "40",
    width: "176",
    height: "176",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M40,160H76.7a7.9,7.9,0,0,1,5.6,2.3l19.4,19.4a7.9,7.9,0,0,0,5.6,2.3h41.4a7.9,7.9,0,0,0,5.6-2.3l19.4-19.4a7.9,7.9,0,0,1,5.6-2.3H216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "40",
    y: "40",
    width: "176",
    height: "176",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M40,160H76.7a7.9,7.9,0,0,1,5.6,2.3l19.4,19.4a7.9,7.9,0,0,0,5.6,2.3h41.4a7.9,7.9,0,0,0,5.6-2.3l19.4-19.4a7.9,7.9,0,0,1,5.6-2.3H216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "40",
    y: "40",
    width: "176",
    height: "176",
    rx: "8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M40,160H76.7a7.9,7.9,0,0,1,5.6,2.3l19.4,19.4a7.9,7.9,0,0,0,5.6,2.3h41.4a7.9,7.9,0,0,0,5.6-2.3l19.4-19.4a7.9,7.9,0,0,1,5.6-2.3H216",
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

var Tray = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Tray.displayName = "Tray";

export default Tray;
//# sourceMappingURL=Tray.esm.js.map
