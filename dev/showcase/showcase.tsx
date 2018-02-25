import * as React from 'react';
import {EColor, EMode, ESize} from "dyna-ui-field-wrapper";

import {DynaRadioButton, DynaPlainRadioButton} from "../../src";

import {faIcon, IShowcase} from "dyna-showcase";
import {Logo} from "../logo";

import "./showcase.less";

export default {
	logo: <Logo/>,
	views: [
		{
			slug: 'intro',
			faIconName: 'circle-o-notch',
			title: 'Introduction',
			center: true,
			component: (
				<div>
					<h3>dyna-ui-radio-button</h3>
					<p>a plain radio button with animation</p>
				</div>
			),
		},
		{
			slug: 'plain-radio-button',
			faIconName: 'flask',
			title: 'plain radio button',
			center: true,
			component: (() => {
				class MyApp extends React.Component<{}, { checked: boolean }> {
					constructor(props: {}) {
						super(props);
						this.state = {
							checked: true,
						}
					}

					public render(): JSX.Element {
						return (
							<DynaPlainRadioButton
								label="I am happy"
								checked={this.state.checked}
								onChange={(checked: boolean) => this.setState({checked})}
							/>
						);
					}
				}

				return <MyApp/>;
			})(),
			wrapperStyle: {
			},
		},
		{
			slug: 'dyna-radio-button',
			faIconName: 'flask',
			title: 'dyna radio button',
			center: true,
			component: (() => {
				interface IMyAppProps {
					size?: ESize;
				}

				interface IMyAppState {
					checked: boolean
				}

				class MyApp extends React.Component<IMyAppProps, IMyAppState> {
					constructor(props: IMyAppProps) {
						super(props);
						this.state = {
							checked: true,
						}
					}

					public render(): JSX.Element {
						return (
							<div>
								<h4>edit mode</h4>
								<DynaRadioButton
									name="happy"
									size={this.props.size}
									color={EColor.GRAY_WHITE}
									label="I am happy"
									checked={this.state.checked}
									onChange={(name: string, checked: boolean) => this.setState({checked})}
								/>
								<h4>view mode</h4>
								<DynaRadioButton
									mode={EMode.VIEW}
									name="happy"
									size={this.props.size}
									color={EColor.GRAY_WHITE}
									label="I am happy"
									checked={this.state.checked}
									onChange={(name: string, checked: boolean) => this.setState({checked})}
								/>

							</div>
						);
					}
				}

				return <MyApp/>;
			})(),
			wrapperStyle: {},
			props: Object.keys(ESize).map((size: ESize) => ({
				slug: `size-${size}`,
				title: `size ${size.toLowerCase()}`,
				props: {
					size,
				}
			}))
		},
		{
			slug: 'the-end',
			title: 'the end',
			description: 'Thank you',
			center: true,
			component: (
				<div style={{textAlign: 'center'}}>
					<h1>The end</h1>
					<div style={{fontSize: '20px'}}>
					</div>
				</div>
			),
		},
	]
}as IShowcase;
