import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M168,120V68a20,20,0,0,1,40,0v84a80,80,0,0,1-80,80c-44.2,0-64-24-96.6-92.7a20,20,0,0,1,34.7-20l21.9,38V52a20,20,0,0,1,40,0v68",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M168,68V36a20,20,0,0,0-40,0V52",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M128,52V36a20,20,0,0,1,40,0V68a20,20,0,0,1,40,0v84a80,80,0,0,1-80,80c-44.2,0-64-24-96.6-92.7a20,20,0,0,1,34.7-20l21.9,38V52a20,20,0,0,1,40,0Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M168,120V68a20,20,0,0,1,40,0v84a80,80,0,0,1-80,80c-44.2,0-64-24-96.6-92.7a20,20,0,0,1,34.7-20l21.9,38V52a20,20,0,0,1,40,0v68",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M168,68V36a20,20,0,0,0-40,0V52",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M188,40a28.2,28.2,0,0,0-12,2.7V36a28,28,0,0,0-54.6-8.6A27.8,27.8,0,0,0,108,24,28.1,28.1,0,0,0,80,52v75.4l-7-12.1A28,28,0,0,0,24.3,143c32.5,68.4,54.1,97,103.7,97a88.1,88.1,0,0,0,88-88V68A28.1,28.1,0,0,0,188,40Zm12,112a72.1,72.1,0,0,1-72,72c-20.2,0-34.2-5.5-47-18.2S56.3,173,38.7,135.9l-.3-.6a11.6,11.6,0,0,1-1.2-9.1,11.8,11.8,0,0,1,5.6-7.3,12,12,0,0,1,9.1-1.2,11.6,11.6,0,0,1,7.2,5.6l22,38a8.1,8.1,0,0,0,9,3.7,7.9,7.9,0,0,0,5.9-7.7V52a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V36a12,12,0,0,1,24,0v84a8,8,0,0,0,16,0V68a12,12,0,0,1,24,0Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M168,120V68a20,20,0,0,1,40,0v84a80,80,0,0,1-80,80c-44.2,0-64-24-96.6-92.7a20,20,0,0,1,34.7-20l21.9,38V52a20,20,0,0,1,40,0v68",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M168,68V36a20,20,0,0,0-40,0V52",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M168,120V68a20,20,0,0,1,40,0v84a80,80,0,0,1-80,80c-44.2,0-64-24-96.6-92.7a20,20,0,0,1,34.7-20l21.9,38V52a20,20,0,0,1,40,0v68",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M168,68V36a20,20,0,0,0-40,0V52",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M168,120V68a20,20,0,0,1,40,0v84a80,80,0,0,1-80,80c-44.2,0-64-24-96.6-92.7a20,20,0,0,1,34.7-20l21.9,38V52a20,20,0,0,1,40,0v68",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M168,68V36a20,20,0,0,0-40,0V52",
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

var Hand = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Hand.displayName = "Hand";

export default Hand;
//# sourceMappingURL=Hand.esm.js.map
