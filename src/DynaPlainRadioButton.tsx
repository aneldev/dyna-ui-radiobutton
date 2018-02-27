import * as React from 'react';
import {Motion, Style} from "react-motion";
import {EMode} from "dyna-ui-field-wrapper";

import "./DynaPlainRadioButton.less";

export interface IDynaPlainRadioButtonProps {
	className?: string;
	mode?: EMode;
	checked?: boolean;
	label?: string;
	size?: number;
	disabled?: boolean;
	onChange?: (checked: boolean) => void;
}

export class DynaPlainRadioButton extends React.Component<IDynaPlainRadioButtonProps> {
	static defaultProps: IDynaPlainRadioButtonProps = {
		className: '',
		mode: EMode.EDIT,
		checked: true,
		label: '',
		size: 20,
		disabled: false,
		onChange: (checked: boolean) => undefined,
	};

	private handleClick(): void {
		const {mode, checked, disabled, onChange} = this.props;
		if (disabled) return;
		if (mode !== EMode.EDIT) return;
		onChange(!checked);
	}

	public render(): JSX.Element {
		const {
			className: cn,
			mode,
			size, label,
			disabled,
			checked,
		} = this.props;

		const className: string = [
			"dyna-plain-radio-button",
			cn,
			`dyna-plain-radio-button--${disabled ? 'disabled' : 'enabled'}`,
			`dyna-plain-radio-button--mode-${mode}`,
		].join(' ').trim();

		const strokeWidth: number = 1;
		const coreBulletWidth: number = checked ? (size / 2) * 0.55 : 0;
		let motionStyle: Style;
		if (checked)
			motionStyle = {bulletWidth: {stiffness: 300, damping: 10, val: coreBulletWidth, precision: 1}};
		else
			motionStyle = {bulletWidth: {stiffness: 300, damping: 26, val: coreBulletWidth, precision: 1}};

		return (
			<div className={className} onClick={this.handleClick.bind(this)}>
				<div className="bullet-container">
					<svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
						<g>
							<circle
								cx={size / 2}
								cy={size / 2}
								r={(size / 2) - strokeWidth}
								strokeWidth={strokeWidth}
								fill="transparent"
							/>
							<Motion defaultStyle={{bulletWidth: 0}} style={motionStyle}>
								{(interpolatingStyle: Style) => (
									<circle
										cx={size / 2}
										cy={size / 2}
										r={interpolatingStyle.bulletWidth >= 0 ? Number(interpolatingStyle.bulletWidth) : 0}
										strokeWidth={strokeWidth}
									/>
								)}
							</Motion>
						</g>
					</svg>
				</div>
				<div className="text-container">{label}</div>
			</div>
		);
	}
}
