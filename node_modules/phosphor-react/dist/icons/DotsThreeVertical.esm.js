import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "64",
    r: "16"
  }), React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "16"
  }), React.createElement("circle", {
    cx: "128",
    cy: "192",
    r: "16"
  }));
});
pathsByWeight.set("duotone", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "64",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "192",
    r: "12"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM128,76a12,12,0,1,0-12-12A12,12,0,0,0,128,76Zm0,104a12,12,0,1,0,12,12A12,12,0,0,0,128,180Z"
  }));
});
pathsByWeight.set("light", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "64",
    r: "10"
  }), React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "10"
  }), React.createElement("circle", {
    cx: "128",
    cy: "192",
    r: "10"
  }));
});
pathsByWeight.set("thin", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "64",
    r: "8"
  }), React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "8"
  }), React.createElement("circle", {
    cx: "128",
    cy: "192",
    r: "8"
  }));
});
pathsByWeight.set("regular", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "64",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "192",
    r: "12"
  }));
});

var renderPath = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};

var DotsThreeVertical = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
DotsThreeVertical.displayName = "DotsThreeVertical";

export default DotsThreeVertical;
//# sourceMappingURL=DotsThreeVertical.esm.js.map
