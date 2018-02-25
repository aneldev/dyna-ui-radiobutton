import * as React from 'react';
import "./DynaPlainRadioButton.less";
export interface IDynaPlainRadioButtonProps {
    checked?: boolean;
    label?: string;
    size?: number;
    foregoundColor?: string;
    onChange?: (checked: boolean) => void;
}
export declare class DynaPlainRadioButton extends React.Component<IDynaPlainRadioButtonProps> {
    static defaultProps: IDynaPlainRadioButtonProps;
    private handleClick();
    render(): JSX.Element;
}
