import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "60",
    cy: "60",
    r: "16"
  }), React.createElement("circle", {
    cx: "128",
    cy: "60",
    r: "16"
  }), React.createElement("circle", {
    cx: "196",
    cy: "60",
    r: "16"
  }), React.createElement("circle", {
    cx: "60",
    cy: "128",
    r: "16"
  }), React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "16"
  }), React.createElement("circle", {
    cx: "196",
    cy: "128",
    r: "16"
  }), React.createElement("circle", {
    cx: "60",
    cy: "196",
    r: "16"
  }), React.createElement("circle", {
    cx: "128",
    cy: "196",
    r: "16"
  }), React.createElement("circle", {
    cx: "196",
    cy: "196",
    r: "16"
  }));
});
pathsByWeight.set("duotone", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "60",
    cy: "60",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "60",
    r: "12"
  }), React.createElement("circle", {
    cx: "196",
    cy: "60",
    r: "12"
  }), React.createElement("circle", {
    cx: "60",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "196",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "60",
    cy: "196",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "196",
    r: "12"
  }), React.createElement("circle", {
    cx: "196",
    cy: "196",
    r: "12"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M60,48A12,12,0,1,0,72,60,12,12,0,0,0,60,48Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,48Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,184ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,116Z"
  }));
});
pathsByWeight.set("light", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "60",
    cy: "60",
    r: "10"
  }), React.createElement("circle", {
    cx: "128",
    cy: "60",
    r: "10"
  }), React.createElement("circle", {
    cx: "196",
    cy: "60",
    r: "10"
  }), React.createElement("circle", {
    cx: "60",
    cy: "128",
    r: "10"
  }), React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "10"
  }), React.createElement("circle", {
    cx: "196",
    cy: "128",
    r: "10"
  }), React.createElement("circle", {
    cx: "60",
    cy: "196",
    r: "10"
  }), React.createElement("circle", {
    cx: "128",
    cy: "196",
    r: "10"
  }), React.createElement("circle", {
    cx: "196",
    cy: "196",
    r: "10"
  }));
});
pathsByWeight.set("thin", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "60",
    cy: "60",
    r: "8"
  }), React.createElement("circle", {
    cx: "128",
    cy: "60",
    r: "8"
  }), React.createElement("circle", {
    cx: "196",
    cy: "60",
    r: "8"
  }), React.createElement("circle", {
    cx: "60",
    cy: "128",
    r: "8"
  }), React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "8"
  }), React.createElement("circle", {
    cx: "196",
    cy: "128",
    r: "8"
  }), React.createElement("circle", {
    cx: "60",
    cy: "196",
    r: "8"
  }), React.createElement("circle", {
    cx: "128",
    cy: "196",
    r: "8"
  }), React.createElement("circle", {
    cx: "196",
    cy: "196",
    r: "8"
  }));
});
pathsByWeight.set("regular", function () {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "60",
    cy: "60",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "60",
    r: "12"
  }), React.createElement("circle", {
    cx: "196",
    cy: "60",
    r: "12"
  }), React.createElement("circle", {
    cx: "60",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "196",
    cy: "128",
    r: "12"
  }), React.createElement("circle", {
    cx: "60",
    cy: "196",
    r: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "196",
    r: "12"
  }), React.createElement("circle", {
    cx: "196",
    cy: "196",
    r: "12"
  }));
});

var renderPath = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};

var DotsNine = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
DotsNine.displayName = "DotsNine";

export default DotsNine;
//# sourceMappingURL=DotsNine.esm.js.map
