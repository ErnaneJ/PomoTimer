import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M71.6,144,32,176V48a8,8,0,0,1,8-8H168a8,8,0,0,1,8,8v88a8,8,0,0,1-8,8Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M80,144v40a8,8,0,0,0,8,8h96.4L224,224V96a8,8,0,0,0-8-8H176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M80,144v40a8,8,0,0,0,8,8h96.4L224,224V96a8,8,0,0,0-8-8H176v48a8,8,0,0,1-8,8Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M71.6,144,32,176V48a8,8,0,0,1,8-8H168a8,8,0,0,1,8,8v88a8,8,0,0,1-8,8Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M80,144v40a8,8,0,0,0,8,8h96.4L224,224V96a8,8,0,0,0-8-8H176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M232,96a16,16,0,0,0-16-16H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a7.9,7.9,0,0,0,4.6,7.2,7.8,7.8,0,0,0,8.4-1l35-28.3V184a16,16,0,0,0,16,16h93.6L219,230.2a7.8,7.8,0,0,0,8.4,1A7.9,7.9,0,0,0,232,224Zm-42.6,89.8a7.7,7.7,0,0,0-5-1.8H88V152h80a16,16,0,0,0,16-16V96h32V207.2Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M71.6,144,32,176V48a8,8,0,0,1,8-8H168a8,8,0,0,1,8,8v88a8,8,0,0,1-8,8Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M80,144v40a8,8,0,0,0,8,8h96.4L224,224V96a8,8,0,0,0-8-8H176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M71.6,144,32,176V48a8,8,0,0,1,8-8H168a8,8,0,0,1,8,8v88a8,8,0,0,1-8,8Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M80,144v40a8,8,0,0,0,8,8h96.4L224,224V96a8,8,0,0,0-8-8H176",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M71.6,144,32,176V48a8,8,0,0,1,8-8H168a8,8,0,0,1,8,8v88a8,8,0,0,1-8,8Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M80,144v40a8,8,0,0,0,8,8h96.4L224,224V96a8,8,0,0,0-8-8H176",
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

var Chats = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Chats.displayName = "Chats";

export default Chats;
//# sourceMappingURL=Chats.esm.js.map
