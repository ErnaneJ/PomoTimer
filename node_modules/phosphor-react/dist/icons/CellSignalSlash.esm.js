import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "48",
    y1: "40",
    x2: "208",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M208,216H27.3a8,8,0,0,1-5.6-13.7l91.1-91.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M141.1,82.9l45.2-45.2A8,8,0,0,1,200,43.3V147.7",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M200,43.3V208a8,8,0,0,1-8,8H27.3a7.9,7.9,0,0,1-5.6-13.6L186.3,37.7A8,8,0,0,1,200,43.3Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M135.4,88.6l50.9-50.9A8,8,0,0,1,200,43.3V159.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "48",
    y1: "40",
    x2: "208",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M208,216H27.3a8,8,0,0,1-5.6-13.7l91.1-91.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M129.5,94a8,8,0,0,1,.3-11.1L180.7,32A16,16,0,0,1,208,43.3V159.6a8,8,0,0,1-5.1,7.5,7.4,7.4,0,0,1-2.9.5,7.9,7.9,0,0,1-5.9-2.6Zm84.4,116.6-160-176a8,8,0,0,0-11.3-.5,7.9,7.9,0,0,0-.5,11.3L101.7,111,16,196.7A16,16,0,0,0,27.3,224H208a8.2,8.2,0,0,0,5.4-2.1A8,8,0,0,0,213.9,210.6Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "48",
    y1: "40",
    x2: "208",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M135.4,88.6l50.9-50.9A8,8,0,0,1,200,43.3V159.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M208,216H27.3a8,8,0,0,1-5.6-13.7l91.1-91.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "48",
    y1: "40",
    x2: "208",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M135.4,88.6l50.9-50.9A8,8,0,0,1,200,43.3V159.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M208,216H27.3a8,8,0,0,1-5.6-13.7l91.1-91.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "48",
    y1: "40",
    x2: "208",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M135.4,88.6l50.9-50.9A8,8,0,0,1,200,43.3V159.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M208,216H27.3a8,8,0,0,1-5.6-13.7l91.1-91.1",
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

var CellSignalSlash = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
CellSignalSlash.displayName = "CellSignalSlash";

export default CellSignalSlash;
//# sourceMappingURL=CellSignalSlash.esm.js.map
