import * as React from 'react';
import "./DynaPlainRadioButton.less";
export interface IDynaPlainRadioButtonProps {
    className?: string;
    checked?: boolean;
    label?: string;
    size?: number;
    onChange?: (checked: boolean) => void;
}
export declare class DynaPlainRadioButton extends React.Component<IDynaPlainRadioButtonProps> {
    static defaultProps: IDynaPlainRadioButtonProps;
    private handleClick();
    render(): JSX.Element;
}
