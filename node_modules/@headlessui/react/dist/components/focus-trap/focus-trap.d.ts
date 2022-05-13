import { ElementType, MutableRefObject, Ref } from 'react';
import { Props } from '../../types';
export declare let FocusTrap: (<TTag extends ElementType<any> = "div">(props: Omit<import("../../types").PropsOf<TTag>, "as" | "children" | "refName" | "className"> & {
    as?: TTag | undefined;
    children?: import("react").ReactNode | ((bag: any) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>);
    refName?: string | undefined;
} & (import("../../types").PropsOf<TTag> extends {
    className?: any;
} ? {
    className?: string | ((bag: any) => string) | undefined;
} : {}) & {
    initialFocus?: MutableRefObject<HTMLElement | null> | undefined;
}, ref: Ref<HTMLElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null) & {
    displayName: string;
};
