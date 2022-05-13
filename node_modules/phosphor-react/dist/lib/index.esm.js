import { createContext } from 'react';

var IconContext = /*#__PURE__*/createContext({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false
});
var renderPathForWeight = function renderPathForWeight(weight, color, pathsByWeight) {
  var path = pathsByWeight.get(weight);
  if (!!path) return path(color);
  console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
  return null;
};

export { IconContext, renderPathForWeight };
//# sourceMappingURL=index.esm.js.map
