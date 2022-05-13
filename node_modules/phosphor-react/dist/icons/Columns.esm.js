import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "-6",
    y: "102",
    width: "176",
    height: "52",
    rx: "8",
    transform: "translate(210 46) rotate(90)",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("rect", {
    x: "86",
    y: "102",
    width: "176",
    height: "52",
    rx: "8",
    transform: "translate(302 -46) rotate(90)",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "-4",
    y: "100",
    width: "176",
    height: "56",
    rx: "8",
    transform: "translate(212 44) rotate(90)",
    opacity: "0.2"
  }), React.createElement("rect", {
    x: "84",
    y: "100",
    width: "176",
    height: "56",
    rx: "8",
    transform: "translate(300 -44) rotate(90)",
    opacity: "0.2"
  }), React.createElement("rect", {
    x: "-4",
    y: "100",
    width: "176",
    height: "56",
    rx: "8",
    transform: "translate(212 44) rotate(90)",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("rect", {
    x: "84",
    y: "100",
    width: "176",
    height: "56",
    rx: "8",
    transform: "translate(300 -44) rotate(90)",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M120,48V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V48A16,16,0,0,1,64,32h40A16,16,0,0,1,120,48Zm72-16H152a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "-4",
    y: "100",
    width: "176",
    height: "56",
    rx: "8",
    transform: "translate(212 44) rotate(90)",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("rect", {
    x: "84",
    y: "100",
    width: "176",
    height: "56",
    rx: "8",
    transform: "translate(300 -44) rotate(90)",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "-4",
    y: "100",
    width: "176",
    height: "56",
    rx: "8",
    transform: "translate(212 44) rotate(90)",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("rect", {
    x: "84",
    y: "100",
    width: "176",
    height: "56",
    rx: "8",
    transform: "translate(300 -44) rotate(90)",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "-4",
    y: "100",
    width: "176",
    height: "56",
    rx: "8",
    transform: "translate(212 44) rotate(90)",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("rect", {
    x: "84",
    y: "100",
    width: "176",
    height: "56",
    rx: "8",
    transform: "translate(300 -44) rotate(90)",
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

var Columns = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Columns.displayName = "Columns";

export default Columns;
//# sourceMappingURL=Columns.esm.js.map
