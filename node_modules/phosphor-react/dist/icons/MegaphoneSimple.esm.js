import React, { forwardRef } from 'react';
import { renderPathForWeight } from '../lib/index.esm.js';
import IconBase from '../lib/IconBase.esm.js';

/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M32,50.7V189.3A8,8,0,0,0,42.2,197l176-51.3A8,8,0,0,0,224,138V102a8,8,0,0,0-5.8-7.7L42.2,43A8,8,0,0,0,32,50.7Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React.createElement("path", {
    d: "M184,155.7V192a8,8,0,0,1-8,8H144a8,8,0,0,1-8-8V70.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M42.2,43A8,8,0,0,0,32,50.7V189.3A8,8,0,0,0,42.2,197L136,169.7V70.3Z",
    opacity: "0.2"
  }), React.createElement("path", {
    d: "M32,50.7V189.3A8,8,0,0,0,42.2,197l176-51.3A8,8,0,0,0,224,138V102a8,8,0,0,0-5.8-7.7L42.2,43A8,8,0,0,0,32,50.7Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M184,155.7V192a8,8,0,0,1-8,8H144a8,8,0,0,1-8-8V70.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M220.5,86.6,138.4,62.7h-.1L44.5,35.3a15.8,15.8,0,0,0-14.1,2.6A15.7,15.7,0,0,0,24,50.7V189.3a16,16,0,0,0,15.9,16,17.6,17.6,0,0,0,4.6-.6L128,180.3V192a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V161.7l28.5-8.3A16.1,16.1,0,0,0,232,138V102A16.1,16.1,0,0,0,220.5,86.6ZM176,192H144V175.7l32-9.4Zm40-54-34.4,10h0L144,159V81l72,21Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M32,50.7V189.3A8,8,0,0,0,42.2,197l176-51.3A8,8,0,0,0,224,138V102a8,8,0,0,0-5.8-7.7L42.2,43A8,8,0,0,0,32,50.7Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React.createElement("path", {
    d: "M184,155.7V192a8,8,0,0,1-8,8H144a8,8,0,0,1-8-8V70.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M32,50.7V189.3A8,8,0,0,0,42.2,197l176-51.3A8,8,0,0,0,224,138V102a8,8,0,0,0-5.8-7.7L42.2,43A8,8,0,0,0,32,50.7Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React.createElement("path", {
    d: "M184,155.7V192a8,8,0,0,1-8,8H144a8,8,0,0,1-8-8V70.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M32,50.7V189.3A8,8,0,0,0,42.2,197l176-51.3A8,8,0,0,0,224,138V102a8,8,0,0,0-5.8-7.7L42.2,43A8,8,0,0,0,32,50.7Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), React.createElement("path", {
    d: "M184,155.7V192a8,8,0,0,1-8,8H144a8,8,0,0,1-8-8V70.3",
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

var MegaphoneSimple = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(IconBase, Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
MegaphoneSimple.displayName = "MegaphoneSimple";

export default MegaphoneSimple;
//# sourceMappingURL=MegaphoneSimple.esm.js.map
