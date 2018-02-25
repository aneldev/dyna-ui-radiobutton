import * as React from 'react';
import "./DynaRadioButton.less";
export interface IDynaRadioButtonProps {
    checked?: boolean;
    label?: string;
    size?: number;
    foregoundColor?: string;
    onChange?: (checked: boolean) => void;
}
export declare class RadioButton extends React.Component<IDynaRadioButtonProps, any> {
    static defaultProps: IDynaRadioButtonProps;
    private handleClick();
    render(): JSX.Element;
}
