import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M92.9,166.1a50.7,50.7,0,0,1,70.2,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M59,132.1a98.8,98.8,0,0,1,138,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("circle", {
    cx: "128",
    cy: "200",
    r: "16"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M134,208.9a7.9,7.9,0,0,1-12.1-.1L50.4,124.5a119.9,119.9,0,0,1,155.2,0Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M20.2,75.9C83.7,28,172.3,28,235.8,75.9A8,8,0,0,1,237,87.5L134,208.9a7.9,7.9,0,0,1-12.1-.1L19,87.6A8.1,8.1,0,0,1,20.2,75.9Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M50.4,124.5a119.9,119.9,0,0,1,155.2,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M240.6,69.6C174.3,19.5,81.7,19.5,15.4,69.5a16.1,16.1,0,0,0-6.2,11,16.6,16.6,0,0,0,3.7,12.3L115.8,214a16.1,16.1,0,0,0,12.2,5.7h0a16,16,0,0,0,12.1-5.6h0l103-121.4a16,16,0,0,0,3.7-12.2A15.6,15.6,0,0,0,240.6,69.6ZM25,82.3Zm179.5,31.2a131,131,0,0,0-17-10.7l-.8-.4a122.1,122.1,0,0,0-17.8-7.6l-1.5-.4A115.2,115.2,0,0,0,149,89.8l-1.6-.2a118.4,118.4,0,0,0-38.8,0l-1.6.2a126.7,126.7,0,0,0-18.4,4.5l-1.5.5a127,127,0,0,0-17.8,7.6l-.8.4a123.5,123.5,0,0,0-16.9,10.7h0L25.1,82.3c60.6-45.7,145.3-45.7,205.8.1Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M92.9,166.1a50.7,50.7,0,0,1,70.2,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M59,132.1a98.8,98.8,0,0,1,138,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("circle", {
    cx: "128",
    cy: "200",
    r: "10"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M92.9,166.1a50.7,50.7,0,0,1,70.2,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M59,132.1a98.8,98.8,0,0,1,138,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("circle", {
    cx: "128",
    cy: "200",
    r: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M92.9,166.1a50.7,50.7,0,0,1,70.2,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M59,132.1a98.8,98.8,0,0,1,138,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("circle", {
    cx: "128",
    cy: "200",
    r: "12"
  }));
});

var renderPath = function renderPath(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};

var WifiMedium = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
WifiMedium.displayName = "WifiMedium";

export default WifiMedium;
//# sourceMappingURL=WifiMedium.esm.js.map
