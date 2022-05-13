import { ComponentPropsWithoutRef } from "react";
export declare type IconWeight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
export declare type PaintFunction = (color: string) => React.ReactNode | null;
export interface IconProps extends ComponentPropsWithoutRef<"svg"> {
    alt?: string;
    color?: string;
    size?: string | number;
    weight?: IconWeight;
    mirrored?: boolean;
}
declare type IconComponentProps = IconProps & React.RefAttributes<SVGSVGElement>;
export declare type Icon = React.ForwardRefExoticComponent<IconComponentProps>;
export declare const IconContext: import("react").Context<IconProps>;
export declare const renderPathForWeight: (weight: IconWeight, color: string, pathsByWeight: Map<IconWeight, PaintFunction>) => React.ReactNode | null;
export {};
