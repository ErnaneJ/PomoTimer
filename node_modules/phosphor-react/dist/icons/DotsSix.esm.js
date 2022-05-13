import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "60",
    cy: "92",
    r: "16"
  }), React.createElement("circle", {
    cx: "128",
    cy: "92",
    r: "16"
  }), React.createElement("circle", {
    cx: "196",
    cy: "92",
    r: "16"
  }), React.createElement("circle", {
    cx: "60",
    cy: "164",
    r: "16"
  }), React.createElement("circle", {
    cx: "128",
    cy: "164",
    r: "16"
  }), React.createElement("circle", {
    cx: "196",
    cy: "164",
    r: "16"
  }));
});
pathsByWeight.set("duotone", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "60",
    cy: "92",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "92",
    r: "12"
  }), React.createElement("circle", {
    cx: "196",
    cy: "92",
    r: "12"
  }), React.createElement("circle", {
    cx: "60",
    cy: "164",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "164",
    r: "12"
  }), React.createElement("circle", {
    cx: "196",
    cy: "164",
    r: "12"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M72,92A12,12,0,1,1,60,80,12,12,0,0,1,72,92Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,80Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,104ZM60,152a12,12,0,1,0,12,12A12,12,0,0,0,60,152Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,152Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,152Z"
  }));
});
pathsByWeight.set("light", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "60",
    cy: "92",
    r: "10"
  }), React.createElement("circle", {
    cx: "128",
    cy: "92",
    r: "10"
  }), React.createElement("circle", {
    cx: "196",
    cy: "92",
    r: "10"
  }), React.createElement("circle", {
    cx: "60",
    cy: "164",
    r: "10"
  }), React.createElement("circle", {
    cx: "128",
    cy: "164",
    r: "10"
  }), React.createElement("circle", {
    cx: "196",
    cy: "164",
    r: "10"
  }));
});
pathsByWeight.set("thin", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "60",
    cy: "92",
    r: "8"
  }), React.createElement("circle", {
    cx: "128",
    cy: "92",
    r: "8"
  }), React.createElement("circle", {
    cx: "196",
    cy: "92",
    r: "8"
  }), React.createElement("circle", {
    cx: "60",
    cy: "164",
    r: "8"
  }), React.createElement("circle", {
    cx: "128",
    cy: "164",
    r: "8"
  }), React.createElement("circle", {
    cx: "196",
    cy: "164",
    r: "8"
  }));
});
pathsByWeight.set("regular", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "60",
    cy: "92",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "92",
    r: "12"
  }), React.createElement("circle", {
    cx: "196",
    cy: "92",
    r: "12"
  }), React.createElement("circle", {
    cx: "60",
    cy: "164",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "164",
    r: "12"
  }), React.createElement("circle", {
    cx: "196",
    cy: "164",
    r: "12"
  }));
});

var renderPath = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};

var DotsSix = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
DotsSix.displayName = "DotsSix";

export default DotsSix;
//# sourceMappingURL=DotsSix.esm.js.map
