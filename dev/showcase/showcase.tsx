import * as React from 'react';
import {DynaPlainRadioButton} from "../../src";

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
