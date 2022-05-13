import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M218.5,162.9C205.9,193.7,183.1,216,164,216H92c-28,0-64-48-64-100A60,60,0,0,1,128,71.3h0a60,60,0,0,1,87.2,7.6h0a48,48,0,0,0,3.3,84Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M218.5,162.9C205.9,193.7,183.1,216,164,216H92c-28,0-64-48-64-100A60,60,0,0,1,128,71.3h0a60,60,0,0,1,87.2,7.6h0a48,48,0,0,0,3.3,84Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M143.5,23.4A31.9,31.9,0,0,1,168,12",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M218.5,162.9C205.9,193.7,183.1,216,164,216H92c-28,0-64-48-64-100A60,60,0,0,1,128,71.3h0a60,60,0,0,1,87.2,7.6h0a48,48,0,0,0,3.3,84Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M138.1,32.5A32,32,0,0,1,168,12",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M218.5,162.9C205.9,193.7,183.1,216,164,216H92c-28,0-64-48-64-100A60,60,0,0,1,128,71.3h0a60,60,0,0,1,87.2,7.6h0a48,48,0,0,0,3.3,84Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M130.7,29.6A40.2,40.2,0,0,1,168,4a8,8,0,0,1,0,16,24.1,24.1,0,0,0-22.4,15.4,8,8,0,0,1-7.5,5.1,9.2,9.2,0,0,1-2.8-.5A8,8,0,0,1,130.7,29.6ZM222,155.8a40,40,0,0,1-2.7-70A8.2,8.2,0,0,0,221.5,74,68,68,0,0,0,128,61,68,68,0,0,0,20,116a135,135,0,0,0,22.9,74c14.4,21.3,32.7,34,49.1,34h72c22.5,0,47.9-23.9,61.9-58A7.9,7.9,0,0,0,222,155.8Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M138.1,32.5A32,32,0,0,1,168,12",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M218.5,162.9C205.9,193.7,183.1,216,164,216H92c-28,0-64-48-64-100A60,60,0,0,1,128,71.3h0a60,60,0,0,1,87.2,7.6h0a48,48,0,0,0,3.3,84Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M138.1,32.5A32,32,0,0,1,168,12",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M218.5,162.9C205.9,193.7,183.1,216,164,216H92c-28,0-64-48-64-100A60,60,0,0,1,128,71.3h0a60,60,0,0,1,87.2,7.6h0a48,48,0,0,0,3.3,84Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M138.1,32.5A32,32,0,0,1,168,12",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M218.5,162.9C205.9,193.7,183.1,216,164,216H92c-28,0-64-48-64-100A60,60,0,0,1,128,71.3h0a60,60,0,0,1,87.2,7.6h0a48,48,0,0,0,3.3,84Z",
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

var AppleLogo = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
AppleLogo.displayName = "AppleLogo";

export default AppleLogo;
//# sourceMappingURL=AppleLogo.esm.js.map
