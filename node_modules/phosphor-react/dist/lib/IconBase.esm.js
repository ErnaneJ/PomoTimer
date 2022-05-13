import React, { forwardRef, useContext } from 'react';
import { IconContext } from './index.esm.js';
import { objectWithoutPropertiesLoose as _objectWithoutPropertiesLoose } from '../_virtual/_rollupPluginBabelHelpers.js';

var IconBase = /*#__PURE__*/forwardRef(function (props, ref) {
  var alt = props.alt,
      color = props.color,
      size = props.size,
      weight = props.weight,
      mirrored = props.mirrored,
      children = props.children,
      renderPath = props.renderPath,
      restProps = _objectWithoutPropertiesLoose(props, ["alt", "color", "size", "weight", "mirrored", "children", "renderPath"]);

  var _useContext = useContext(IconContext),
      _useContext$color = _useContext.color,
      contextColor = _useContext$color === void 0 ? "currentColor" : _useContext$color,
      contextSize = _useContext.size,
      _useContext$weight = _useContext.weight,
      contextWeight = _useContext$weight === void 0 ? "regular" : _useContext$weight,
      _useContext$mirrored = _useContext.mirrored,
      contextMirrored = _useContext$mirrored === void 0 ? false : _useContext$mirrored,
      restContext = _objectWithoutPropertiesLoose(_useContext, ["color", "size", "weight", "mirrored"]);

  return React.createElement("svg", Object.assign({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size != null ? size : contextSize,
    height: size != null ? size : contextSize,
    fill: color != null ? color : contextColor,
    viewBox: "0 0 256 256",
    transform: mirrored || contextMirrored ? "scale(-1, 1)" : undefined
  }, restContext, restProps), !!alt && React.createElement("title", null, alt), children, React.createElement("rect", {
    width: "256",
    height: "256",
    fill: "none"
  }), renderPath(weight != null ? weight : contextWeight, color != null ? color : contextColor));
});
IconBase.displayName = "IconBase";

export default IconBase;
//# sourceMappingURL=IconBase.esm.js.map
