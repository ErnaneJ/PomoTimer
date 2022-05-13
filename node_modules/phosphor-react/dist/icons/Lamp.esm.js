import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M69.3,40H186.7a8.1,8.1,0,0,1,7.4,4.8l41.1,96a8,8,0,0,1-7.3,11.2H28.1a8,8,0,0,1-7.3-11.2l41.1-96A8.1,8.1,0,0,1,69.3,40Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "128",
    y1: "152",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "96",
    y1: "216",
    x2: "160",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "200",
    y1: "152",
    x2: "200",
    y2: "192",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M69.3,40H186.7a8.1,8.1,0,0,1,7.4,4.8l41.1,96a8,8,0,0,1-7.3,11.2H28.1a8,8,0,0,1-7.3-11.2l41.1-96A8.1,8.1,0,0,1,69.3,40Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M69.3,40H186.7a8.1,8.1,0,0,1,7.4,4.8l41.1,96a8,8,0,0,1-7.3,11.2H28.1a8,8,0,0,1-7.3-11.2l41.1-96A8.1,8.1,0,0,1,69.3,40Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "128",
    y1: "152",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "96",
    y1: "216",
    x2: "160",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "200",
    y1: "152",
    x2: "200",
    y2: "192",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M241.2,152.8a15.8,15.8,0,0,1-13.3,7.2H208v32a8,8,0,0,1-16,0V160H136v48h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V160H28.1a16.1,16.1,0,0,1-14.7-22.3l41.2-96A15.9,15.9,0,0,1,69.3,32H186.7a15.9,15.9,0,0,1,14.7,9.7l41.2,96A15.9,15.9,0,0,1,241.2,152.8Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M69.3,40H186.7a8.1,8.1,0,0,1,7.4,4.8l41.1,96a8,8,0,0,1-7.3,11.2H28.1a8,8,0,0,1-7.3-11.2l41.1-96A8.1,8.1,0,0,1,69.3,40Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "128",
    y1: "152",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "96",
    y1: "216",
    x2: "160",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "200",
    y1: "152",
    x2: "200",
    y2: "192",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M69.3,40H186.7a8.1,8.1,0,0,1,7.4,4.8l41.1,96a8,8,0,0,1-7.3,11.2H28.1a8,8,0,0,1-7.3-11.2l41.1-96A8.1,8.1,0,0,1,69.3,40Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "128",
    y1: "152",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "96",
    y1: "216",
    x2: "160",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "200",
    y1: "152",
    x2: "200",
    y2: "192",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M69.3,40H186.7a8.1,8.1,0,0,1,7.4,4.8l41.1,96a8,8,0,0,1-7.3,11.2H28.1a8,8,0,0,1-7.3-11.2l41.1-96A8.1,8.1,0,0,1,69.3,40Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "128",
    y1: "152",
    x2: "128",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "96",
    y1: "216",
    x2: "160",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "200",
    y1: "152",
    x2: "200",
    y2: "192",
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

var Lamp = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Lamp.displayName = "Lamp";

export default Lamp;
//# sourceMappingURL=Lamp.esm.js.map
