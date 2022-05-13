import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "16"
  }), React.createElement("circle", {
    cx: "64",
    cy: "128",
    r: "16"
  }), React.createElement("circle", {
    cx: "192",
    cy: "128",
    r: "16"
  }));
});
pathsByWeight.set("duotone", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "192",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "64",
    cy: "128",
    r: "12"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm52-12a12,12,0,1,0,12,12A12,12,0,0,0,192,116ZM64,116a12,12,0,1,0,12,12A12,12,0,0,0,64,116Z"
  }));
});
pathsByWeight.set("light", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "10"
  }), React.createElement("circle", {
    cx: "64",
    cy: "128",
    r: "10"
  }), React.createElement("circle", {
    cx: "192",
    cy: "128",
    r: "10"
  }));
});
pathsByWeight.set("thin", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "8"
  }), React.createElement("circle", {
    cx: "64",
    cy: "128",
    r: "8"
  }), React.createElement("circle", {
    cx: "192",
    cy: "128",
    r: "8"
  }));
});
pathsByWeight.set("regular", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "192",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "64",
    cy: "128",
    r: "12"
  }));
});

var renderPath = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};

var DotsThree = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
DotsThree.displayName = "DotsThree";

export default DotsThree;
//# sourceMappingURL=DotsThree.esm.js.map
