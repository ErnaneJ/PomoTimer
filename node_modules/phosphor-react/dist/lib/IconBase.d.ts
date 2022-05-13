import React from "react";
import { IconProps, IconWeight } from "../lib";
export declare type RenderFunction = (weight: IconWeight, color: string) => React.ReactNode | null;
interface IconBaseProps extends IconProps {
    renderPath: RenderFunction;
}
declare const IconBase: React.ForwardRefExoticComponent<IconBaseProps & React.RefAttributes<SVGSVGElement>>;
export default IconBase;
