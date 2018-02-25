import * as React from "react";
import {DynaFieldWrapper, ESize, EColor, EStyle, EMode} from "dyna-ui-field-wrapper";
import {DynaPlainRadioButton} from "./DynaPlainRadioButton";

import "./DynaRadioButton.less"

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

export class DynaRadioButton extends React.Component<IDynaRadioButtonProps> {
	static defaultProps: IDynaRadioButtonProps = {
		className: '',
		name: null,
		mode: EMode.EDIT,
		style: EStyle.INLINE_ROUNDED,
		color: EColor.WHITE_BLACK,
		size: ESize.MEDIUM,
		disabled: false,
		label: '',
		checked: true,
		onChange: (name: string, checked: boolean) => undefined,
	};

	private handleClick(): void {
		const {mode, name, disabled, checked, onChange} = this.props;
		if (disabled) return;
		if (mode !== EMode.EDIT) return;
		console.log('clicked, new value', !checked);
		onChange(name, !checked);
	}

	public render(): JSX.Element {
		const {
			className,
			mode, style, color, size,
			label, checked,
		} = this.props;

		return (
			<DynaFieldWrapper
				className={`dyna-radio-button ${className}`}
				mode={mode}
				style={style}
				color={color}
				size={size}
				inputElementSelector="input"
				label={label}
				onClick={this.handleClick.bind(this)}
			>
				<DynaPlainRadioButton
					checked={checked}
				/>
				<div className="width-helper"/>
				<input onClick={this.handleClick.bind(this)}/>
			</DynaFieldWrapper>
		);
	}

	// 	return (
	// 		<DynaFieldWrapper
	// 			className={`dyna-radio-button ${className}`}
	// 			mode={mode}
	// 			style={style}
	// 			color={color}
	// 			inputElementSelector="input"
	// 		>
	// 			<DynaPlainRadioButton
	// 				checked={checked}
	// 				onChange={this.handleChange.bind(this)}
	// 			/>
	// 			<div className="label-container">
	// 				<input value={label} readOnly/>
	// 			</div>
	// 		</DynaFieldWrapper>
	// 	);
	// }

}
