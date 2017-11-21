/// <reference types="react" />
import * as React from 'react';
export interface IDynaRadioButtonProps {
    checked?: boolean;
    caption?: string;
    size?: number;
    foregoundColor?: string;
    onChange?: (checked: boolean) => void;
}
export declare class DynaRadioButton extends React.Component<IDynaRadioButtonProps, any> {
    static defaultProps: IDynaRadioButtonProps;
    private handleClick();
    render(): JSX.Element;
}
