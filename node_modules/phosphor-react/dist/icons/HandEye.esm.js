import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "128",
    cy: "184",
    r: "16"
  }), React.createElement("path", {
    d: "M88,68V36a20,20,0,0,1,40,0v68",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M168,168s-8-28-40-28-40,28-40,28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M128,52a20,20,0,0,1,40,0v60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M168,116v-4a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V68a20,20,0,0,1,40,0v44",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M188,92a20.1,20.1,0,0,0-20,20V52a20,20,0,0,0-40,0V36a20,20,0,0,0-40,0V68a20,20,0,0,0-40,0v84a80,80,0,0,0,160,0V112A20.1,20.1,0,0,0,188,92Zm-14.6,80.4c-5.7,8.8-20.8,27.6-45.4,27.6s-39.7-18.8-45.4-27.6a8.2,8.2,0,0,1,0-8.8c5.7-8.8,20.8-27.6,45.4-27.6s39.7,18.8,45.4,27.6A8.2,8.2,0,0,1,173.4,172.4Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M88,68V36a20,20,0,0,1,40,0v68",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M82.6,163.6a8.2,8.2,0,0,0,0,8.8c5.7,8.8,20.8,27.6,45.4,27.6s39.7-18.8,45.4-27.6a8.2,8.2,0,0,0,0-8.8c-5.7-8.8-20.8-27.6-45.4-27.6S88.3,154.8,82.6,163.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M128,52a20,20,0,0,1,40,0v60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M168,116v-4a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V68a20,20,0,0,1,40,0v44",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "128",
    cy: "168",
    r: "12"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M188,84a28.2,28.2,0,0,0-12,2.7V52a28.1,28.1,0,0,0-28-28,27.8,27.8,0,0,0-13.4,3.4A28,28,0,0,0,80,36v6.7A28,28,0,0,0,40,68v84a88,88,0,0,0,176,0V112A28.1,28.1,0,0,0,188,84Zm12,68a72,72,0,0,1-144,0V68a12,12,0,0,1,24,0v44a8,8,0,0,0,16,0V36a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V52a12,12,0,0,1,24,0v64a8,8,0,0,0,16,0v-4a12,12,0,0,1,24,0Zm-72-16c-26.7,0-43,20.6-48.8,29.4a12.1,12.1,0,0,0,0,13.2C85,187.4,101.3,208,128,208s43-20.6,48.8-29.4a12.1,12.1,0,0,0,0-13.2C171,156.6,154.7,136,128,136Zm0,52a16,16,0,1,1,16-16A16,16,0,0,1,128,188Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M88,68V36a20,20,0,0,1,40,0v68",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M82.6,163.6a8.2,8.2,0,0,0,0,8.8c5.7,8.8,20.8,27.6,45.4,27.6s39.7-18.8,45.4-27.6a8.2,8.2,0,0,0,0-8.8c-5.7-8.8-20.8-27.6-45.4-27.6S88.3,154.8,82.6,163.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M128,52a20,20,0,0,1,40,0v60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M168,116v-4a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V68a20,20,0,0,1,40,0v44",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "168",
    r: "10"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M88,68V36a20,20,0,0,1,40,0v68",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M82.6,163.6a8.2,8.2,0,0,0,0,8.8c5.7,8.8,20.8,27.6,45.4,27.6s39.7-18.8,45.4-27.6a8.2,8.2,0,0,0,0-8.8c-5.7-8.8-20.8-27.6-45.4-27.6S88.3,154.8,82.6,163.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M128,52a20,20,0,0,1,40,0v60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M168,116v-4a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V68a20,20,0,0,1,40,0v44",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("circle", {
    cx: "128",
    cy: "168",
    r: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M88,68V36a20,20,0,0,1,40,0v68",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M82.6,163.6a8.2,8.2,0,0,0,0,8.8c5.7,8.8,20.8,27.6,45.4,27.6s39.7-18.8,45.4-27.6a8.2,8.2,0,0,0,0-8.8c-5.7-8.8-20.8-27.6-45.4-27.6S88.3,154.8,82.6,163.6Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M128,52a20,20,0,0,1,40,0v60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M168,116v-4a20,20,0,0,1,40,0v40a80,80,0,0,1-160,0V68a20,20,0,0,1,40,0v44",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "128",
    cy: "168",
    r: "12"
  }));
});

var renderPath = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};

var HandEye = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
HandEye.displayName = "HandEye";

export default HandEye;
//# sourceMappingURL=HandEye.esm.js.map
