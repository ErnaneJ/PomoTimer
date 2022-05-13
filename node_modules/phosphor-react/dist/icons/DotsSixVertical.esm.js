import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "92",
    cy: "60",
    r: "16"
  }), React.createElement("circle", {
    cx: "164",
    cy: "60",
    r: "16"
  }), React.createElement("circle", {
    cx: "92",
    cy: "128",
    r: "16"
  }), React.createElement("circle", {
    cx: "164",
    cy: "128",
    r: "16"
  }), React.createElement("circle", {
    cx: "92",
    cy: "196",
    r: "16"
  }), React.createElement("circle", {
    cx: "164",
    cy: "196",
    r: "16"
  }));
});
pathsByWeight.set("duotone", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "92",
    cy: "60",
    r: "12"
  }), React.createElement("circle", {
    cx: "164",
    cy: "60",
    r: "12"
  }), React.createElement("circle", {
    cx: "92",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "164",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "92",
    cy: "196",
    r: "12"
  }), React.createElement("circle", {
    cx: "164",
    cy: "196",
    r: "12"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"
  }));
});
pathsByWeight.set("light", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "92",
    cy: "60",
    r: "10"
  }), React.createElement("circle", {
    cx: "164",
    cy: "60",
    r: "10"
  }), React.createElement("circle", {
    cx: "92",
    cy: "128",
    r: "10"
  }), React.createElement("circle", {
    cx: "164",
    cy: "128",
    r: "10"
  }), React.createElement("circle", {
    cx: "92",
    cy: "196",
    r: "10"
  }), React.createElement("circle", {
    cx: "164",
    cy: "196",
    r: "10"
  }));
});
pathsByWeight.set("thin", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "92",
    cy: "60",
    r: "8"
  }), React.createElement("circle", {
    cx: "164",
    cy: "60",
    r: "8"
  }), React.createElement("circle", {
    cx: "92",
    cy: "128",
    r: "8"
  }), React.createElement("circle", {
    cx: "164",
    cy: "128",
    r: "8"
  }), React.createElement("circle", {
    cx: "92",
    cy: "196",
    r: "8"
  }), React.createElement("circle", {
    cx: "164",
    cy: "196",
    r: "8"
  }));
});
pathsByWeight.set("regular", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "92",
    cy: "60",
    r: "12"
  }), React.createElement("circle", {
    cx: "164",
    cy: "60",
    r: "12"
  }), React.createElement("circle", {
    cx: "92",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "164",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "92",
    cy: "196",
    r: "12"
  }), React.createElement("circle", {
    cx: "164",
    cy: "196",
    r: "12"
  }));
});

var renderPath = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};

var DotsSixVertical = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
DotsSixVertical.displayName = "DotsSixVertical";

export default DotsSixVertical;
//# sourceMappingURL=DotsSixVertical.esm.js.map
