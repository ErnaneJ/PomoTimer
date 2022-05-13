import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "128",
    y1: "48",
    x2: "128",
    y2: "24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M224,160c-14.6,51-82.2,68.8-94.2,71.6a7.3,7.3,0,0,1-3.6,0C114.2,228.8,46.6,211,32,160V125.8a8,8,0,0,1,5.5-7.6l88-29.4a8.5,8.5,0,0,1,5,0l88,29.4a8,8,0,0,1,5.5,7.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "128",
    y1: "168",
    x2: "128",
    y2: "88.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M56,112V56a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M224,160c-14.6,51-82.2,68.8-94.2,71.6a7.3,7.3,0,0,1-3.6,0C114.2,228.8,46.6,211,32,160V125.8a8,8,0,0,1,5.5-7.6l88-29.4a8.5,8.5,0,0,1,5,0l88,29.4a8,8,0,0,1,5.5,7.6Z",
    opacity: "0.2"
  }), React.createElement("line", {
    x1: "128",
    y1: "48",
    x2: "128",
    y2: "24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M224,160c-14.6,51-82.2,68.8-94.2,71.6a7.3,7.3,0,0,1-3.6,0C114.2,228.8,46.6,211,32,160V125.8a8,8,0,0,1,5.5-7.6l88-29.4a8.5,8.5,0,0,1,5,0l88,29.4a8,8,0,0,1,5.5,7.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "128",
    y1: "168",
    x2: "128",
    y2: "88.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M56,112V56a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v56",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M221.1,110.6,208,106.2V56a16,16,0,0,0-16-16H136V24a8,8,0,0,0-16,0V40H64A16,16,0,0,0,48,56v50.2l-13.1,4.4A16,16,0,0,0,24,125.8V160a8.3,8.3,0,0,0,.3,2.2c15.7,55,86.1,74,100.1,77.2a16.4,16.4,0,0,0,7.2,0c14-3.2,84.4-22.2,100.1-77.2a8.3,8.3,0,0,0,.3-2.2V125.8A16,16,0,0,0,221.1,110.6ZM136,168a8,8,0,0,1-16,0V112.4a8,8,0,0,1,16,0Zm56-67.1L133.1,81.3a16.2,16.2,0,0,0-10.2,0L64,100.9V56H192Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "128",
    y1: "48",
    x2: "128",
    y2: "24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M224,160c-14.6,51-82.2,68.8-94.2,71.6a7.3,7.3,0,0,1-3.6,0C114.2,228.8,46.6,211,32,160V125.8a8,8,0,0,1,5.5-7.6l88-29.4a8.5,8.5,0,0,1,5,0l88,29.4a8,8,0,0,1,5.5,7.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "128",
    y1: "168",
    x2: "128",
    y2: "88.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M56,112V56a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v56",
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
    y1: "48",
    x2: "128",
    y2: "24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M224,160c-14.6,51-82.2,68.8-94.2,71.6a7.3,7.3,0,0,1-3.6,0C114.2,228.8,46.6,211,32,160V125.8a8,8,0,0,1,5.5-7.6l88-29.4a8.5,8.5,0,0,1,5,0l88,29.4a8,8,0,0,1,5.5,7.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "128",
    y1: "168",
    x2: "128",
    y2: "88.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M56,112V56a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v56",
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
    y1: "48",
    x2: "128",
    y2: "24",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M224,160c-14.6,51-82.2,68.8-94.2,71.6a7.3,7.3,0,0,1-3.6,0C114.2,228.8,46.6,211,32,160V125.8a8,8,0,0,1,5.5-7.6l88-29.4a8.5,8.5,0,0,1,5,0l88,29.4a8,8,0,0,1,5.5,7.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "128",
    y1: "168",
    x2: "128",
    y2: "88.4",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M56,112V56a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v56",
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

var Boat = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Boat.displayName = "Boat";

export default Boat;
//# sourceMappingURL=Boat.esm.js.map
