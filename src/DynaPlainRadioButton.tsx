import * as React from 'react';
import {Motion, MotionProps, spring, Style} from "react-motion";

import "./DynaPlainRadioButton.less";

export interface IDynaPlainRadioButtonProps {
	checked?: boolean;
	label?: string;
	size?: number;
	foregoundColor?: string;
	onChange?: (checked: boolean) => void;
}

export class DynaPlainRadioButton extends React.Component<IDynaPlainRadioButtonProps> {
	static defaultProps: IDynaPlainRadioButtonProps = {
		checked: true,
		label: '',
		size: 20,
		foregoundColor: 'black',
		onChange: (checked: boolean) => undefined,
	};

	private handleClick(): void {
		const {checked, onChange} = this.props;
		onChange(!checked);
	}

	public render(): JSX.Element {
		const {
			size, label,
			checked
		} = this.props;

		const strokeWidth: number = 1;
		const coreBulletWidth: number = checked ? (size / 2) * 0.55 : 0;
		let motionStyle: Style;
		if (checked)
			motionStyle = {bulletWidth: {stiffness: 300, damping: 10, val: coreBulletWidth, precision: 1}};
		else
			motionStyle = {bulletWidth: {stiffness: 300, damping: 26, val: coreBulletWidth, precision: 1}};

		return (
			<div className="dyna-plain-radio-button" onClick={this.handleClick.bind(this)}>
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
