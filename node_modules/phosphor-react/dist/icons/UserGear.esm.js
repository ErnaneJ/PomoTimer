import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "224",
    y1: "136",
    x2: "224",
    y2: "116",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "224",
    y1: "136",
    x2: "205",
    y2: "129.8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "224",
    y1: "136",
    x2: "212.2",
    y2: "152.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "224",
    y1: "136",
    x2: "235.8",
    y2: "152.2",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("line", {
    x1: "224",
    y1: "136",
    x2: "243",
    y2: "129.8",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("circle", {
    cx: "108",
    cy: "100",
    r: "60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M22.2,200a112,112,0,0,1,171.6,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "108",
    cy: "100",
    r: "60",
    opacity: "0.2"
  }), React.createElement("circle", {
    cx: "108",
    cy: "100",
    r: "60",
    fill: "none",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M22.2,200a112,112,0,0,1,171.6,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "220",
    cy: "136",
    r: "16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "220",
    y1: "120",
    x2: "220",
    y2: "108",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "206.1",
    y1: "128",
    x2: "195.8",
    y2: "122",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "206.1",
    y1: "144",
    x2: "195.8",
    y2: "150",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "220",
    y1: "152",
    x2: "220",
    y2: "164",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "233.9",
    y1: "144",
    x2: "244.2",
    y2: "150",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "233.9",
    y1: "128",
    x2: "244.2",
    y2: "122",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M199.9,194.9a7.8,7.8,0,0,1,1.1,8.5,7.9,7.9,0,0,1-7.2,4.6H22.2a7.9,7.9,0,0,1-7.2-4.6,7.8,7.8,0,0,1,1.1-8.5,118.4,118.4,0,0,1,55.8-37.3,68,68,0,1,1,72.2,0A118.4,118.4,0,0,1,199.9,194.9ZM251.2,154a8,8,0,0,1-7,4,7.6,7.6,0,0,1-4-1.1l-4.6-2.7a24,24,0,0,1-7.6,4.4V164a8,8,0,0,1-16,0v-5.4a24,24,0,0,1-7.6-4.4l-4.6,2.7a7.6,7.6,0,0,1-4,1.1,8,8,0,0,1-4-14.9l4.6-2.7a24.4,24.4,0,0,1,0-8.8l-4.6-2.7a7.9,7.9,0,0,1-3-10.9,8.1,8.1,0,0,1,11-2.9l4.6,2.7a24,24,0,0,1,7.6-4.4V108a8,8,0,0,1,16,0v5.4a24,24,0,0,1,7.6,4.4l4.6-2.7a8.1,8.1,0,0,1,11,2.9,7.9,7.9,0,0,1-3,10.9l-4.6,2.7a24.4,24.4,0,0,1,0,8.8l4.6,2.7A7.9,7.9,0,0,1,251.2,154ZM220,144a8,8,0,1,0-8-8A8,8,0,0,0,220,144Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "108",
    cy: "100",
    r: "60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M22.2,200a112,112,0,0,1,171.6,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("circle", {
    cx: "220",
    cy: "136",
    r: "16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "220",
    y1: "120",
    x2: "220",
    y2: "108",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "206.1",
    y1: "128",
    x2: "195.8",
    y2: "122",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "206.1",
    y1: "144",
    x2: "195.8",
    y2: "150",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "220",
    y1: "152",
    x2: "220",
    y2: "164",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "233.9",
    y1: "144",
    x2: "244.2",
    y2: "150",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("line", {
    x1: "233.9",
    y1: "128",
    x2: "244.2",
    y2: "122",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "108",
    cy: "100",
    r: "60",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M22.2,200a112,112,0,0,1,171.6,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("circle", {
    cx: "220",
    cy: "136",
    r: "16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "220",
    y1: "120",
    x2: "220",
    y2: "108",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "206.1",
    y1: "128",
    x2: "195.8",
    y2: "122",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "206.1",
    y1: "144",
    x2: "195.8",
    y2: "150",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "220",
    y1: "152",
    x2: "220",
    y2: "164",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "233.9",
    y1: "144",
    x2: "244.2",
    y2: "150",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("line", {
    x1: "233.9",
    y1: "128",
    x2: "244.2",
    y2: "122",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "108",
    cy: "100",
    r: "60",
    fill: "none",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M22.2,200a112,112,0,0,1,171.6,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "220",
    cy: "136",
    r: "16",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "220",
    y1: "120",
    x2: "220",
    y2: "108",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "206.1",
    y1: "128",
    x2: "195.8",
    y2: "122",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "206.1",
    y1: "144",
    x2: "195.8",
    y2: "150",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "220",
    y1: "152",
    x2: "220",
    y2: "164",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "233.9",
    y1: "144",
    x2: "244.2",
    y2: "150",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("line", {
    x1: "233.9",
    y1: "128",
    x2: "244.2",
    y2: "122",
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

var UserGear = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
UserGear.displayName = "UserGear";

export default UserGear;
//# sourceMappingURL=UserGear.esm.js.map
