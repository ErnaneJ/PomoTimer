import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M83.8,61.3A48,48,0,0,1,176,80a47.4,47.4,0,0,1-8.2,26.8h0L80,224h96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M83.8,61.3A48,48,0,0,1,176,80a47.4,47.4,0,0,1-8.2,26.8h0L80,224h96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M184,224a8,8,0,0,1-8,8H80a7.3,7.3,0,0,1-2.5-.4A8,8,0,0,1,72,224a8,8,0,0,1,1.7-5l87.6-116.8A40,40,0,1,0,91.1,64.4a8,8,0,1,1-14.7-6.2,56,56,0,1,1,98,53.1c0,.1-.1.2-.2.3L96,216h80A8,8,0,0,1,184,224Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M83.8,61.3A48,48,0,0,1,176,80a47.4,47.4,0,0,1-8.2,26.8h0L80,224h96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M83.8,61.3A48,48,0,0,1,176,80a47.4,47.4,0,0,1-8.2,26.8h0L80,224h96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M83.8,61.3A48,48,0,0,1,176,80a47.4,47.4,0,0,1-8.2,26.8h0L80,224h96",
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

var NumberTwo = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
NumberTwo.displayName = "NumberTwo";

export default NumberTwo;
//# sourceMappingURL=NumberTwo.esm.js.map
