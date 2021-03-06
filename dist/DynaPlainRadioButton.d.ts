import * as React from 'react';
import { EMode, EColor } from "dyna-ui-field-wrapper";
import "./DynaPlainRadioButton.less";
export interface IDynaPlainRadioButtonProps {
    className?: string;
    mode?: EMode;
    color?: EColor;
    checked?: boolean;
    label?: string;
    size?: number;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
}
export declare class DynaPlainRadioButton extends React.Component<IDynaPlainRadioButtonProps> {
    static defaultProps: IDynaPlainRadioButtonProps;
    private handleClick;
    render(): JSX.Element;
}
