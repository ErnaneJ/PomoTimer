import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M59.3,40H196.7a8,8,0,0,1,5.6,13.7L128,128,53.7,53.7A8,8,0,0,1,59.3,40Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M59.3,216H196.7a8,8,0,0,0,5.6-13.7L128,128,53.7,202.3A8,8,0,0,0,59.3,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "176",
    y1: "176",
    x2: "80",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M53.7,202.3A8,8,0,0,0,59.3,216H196.7a8,8,0,0,0,5.6-13.7L176,176H80Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M59.3,40H196.7a8,8,0,0,1,5.6,13.7L128,128,53.7,53.7A8,8,0,0,1,59.3,40Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M59.3,216H196.7a8,8,0,0,0,5.6-13.7L128,128,53.7,202.3A8,8,0,0,0,59.3,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "176",
    y1: "176",
    x2: "80",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M139.3,128,208,59.3A16,16,0,0,0,196.7,32H59.3A16,16,0,0,0,48,59.3L116.7,128,48,196.7A16,16,0,0,0,59.3,224H196.7A16,16,0,0,0,208,196.7Zm-80-80H196.7L128,116.7ZM128,139.3,156.7,168H99.3Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M59.3,40H196.7a8,8,0,0,1,5.6,13.7L128,128,53.7,53.7A8,8,0,0,1,59.3,40Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M59.3,216H196.7a8,8,0,0,0,5.6-13.7L128,128,53.7,202.3A8,8,0,0,0,59.3,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "176",
    y1: "176",
    x2: "80",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M59.3,40H196.7a8,8,0,0,1,5.6,13.7L128,128,53.7,53.7A8,8,0,0,1,59.3,40Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M59.3,216H196.7a8,8,0,0,0,5.6-13.7L128,128,53.7,202.3A8,8,0,0,0,59.3,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "176",
    y1: "176",
    x2: "80",
    y2: "176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M59.3,40H196.7a8,8,0,0,1,5.6,13.7L128,128,53.7,53.7A8,8,0,0,1,59.3,40Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M59.3,216H196.7a8,8,0,0,0,5.6-13.7L128,128,53.7,202.3A8,8,0,0,0,59.3,216Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "176",
    y1: "176",
    x2: "80",
    y2: "176",
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

var HourglassSimpleLow = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
HourglassSimpleLow.displayName = "HourglassSimpleLow";

export default HourglassSimpleLow;
//# sourceMappingURL=HourglassSimpleLow.esm.js.map
