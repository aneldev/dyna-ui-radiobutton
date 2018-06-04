import * as React from "react";
import { ESize, EColor, EStyle, EMode } from "dyna-ui-field-wrapper";
import "./DynaRadioButton.less";
export interface IDynaRadioButtonProps {
    className?: string;
    name: string;
    mode?: EMode;
    style?: EStyle;
    color?: EColor;
    size?: ESize;
    disabled?: boolean;
    label?: string;
    checked: boolean;
    onChange: (name: string, checked: boolean) => void;
}
export declare class DynaRadioButton extends React.Component<IDynaRadioButtonProps> {
    static defaultProps: IDynaRadioButtonProps;
    private handleClick();
    render(): JSX.Element;
}
