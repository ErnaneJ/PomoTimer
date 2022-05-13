import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M38.2,48.5,96.4,203.7a8,8,0,0,0,15-.1l23.3-64.1a8.1,8.1,0,0,1,4.8-4.8l64.1-23.3a8,8,0,0,0,.1-15L48.5,38.2A8,8,0,0,0,38.2,48.5Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "136.6",
    y1: "136.6",
    x2: "208",
    y2: "208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M38.2,48.5,96.4,203.7a8,8,0,0,0,15-.1l23.3-64.1a8.1,8.1,0,0,1,4.8-4.8l64.1-23.3a8,8,0,0,0,.1-15L48.5,38.2A8,8,0,0,0,38.2,48.5Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M38.2,48.5,96.4,203.7a8,8,0,0,0,15-.1l23.3-64.1a8.1,8.1,0,0,1,4.8-4.8l64.1-23.3a8,8,0,0,0,.1-15L48.5,38.2A8,8,0,0,0,38.2,48.5Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "136.6",
    y1: "136.6",
    x2: "208",
    y2: "208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M150.5,139.2l55.9-20.3a16,16,0,0,0,.1-30L51.3,30.7A16,16,0,0,0,30.7,51.3h0L88.9,206.5a15.9,15.9,0,0,0,15,10.4h.1a15.9,15.9,0,0,0,14.9-10.5l20.3-55.9,63.1,63.2A8.5,8.5,0,0,0,208,216a8.3,8.3,0,0,0,5.7-2.3,8.1,8.1,0,0,0,0-11.4Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M38.2,48.5,96.4,203.7a8,8,0,0,0,15-.1l23.3-64.1a8.1,8.1,0,0,1,4.8-4.8l64.1-23.3a8,8,0,0,0,.1-15L48.5,38.2A8,8,0,0,0,38.2,48.5Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "136.6",
    y1: "136.6",
    x2: "208",
    y2: "208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M38.2,48.5,96.4,203.7a8,8,0,0,0,15-.1l23.3-64.1a8.1,8.1,0,0,1,4.8-4.8l64.1-23.3a8,8,0,0,0,.1-15L48.5,38.2A8,8,0,0,0,38.2,48.5Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "136.6",
    y1: "136.6",
    x2: "208",
    y2: "208",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M38.2,48.5,96.4,203.7a8,8,0,0,0,15-.1l23.3-64.1a8.1,8.1,0,0,1,4.8-4.8l64.1-23.3a8,8,0,0,0,.1-15L48.5,38.2A8,8,0,0,0,38.2,48.5Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "136.6",
    y1: "136.6",
    x2: "208",
    y2: "208",
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

var Cursor = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Cursor.displayName = "Cursor";

export default Cursor;
//# sourceMappingURL=Cursor.esm.js.map
