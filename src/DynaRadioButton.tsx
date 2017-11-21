import * as React from 'react';
import {Motion, MotionProps, spring, Style} from "react-motion";

const style: any = require('./DynaRadioButton.less');

export interface IDynaRadioButtonProps {
  checked?: boolean;
  caption?: string;
  size?: number;
  foregoundColor?: string;
  onChange?: (checked: boolean) => void;
}

export class DynaRadioButton extends React.Component<IDynaRadioButtonProps, any> {
  static defaultProps: IDynaRadioButtonProps = {
    foregoundColor: 'black',
    size: 20,
  };


  private handleClick():void{
    const {checked, onChange} = this.props;
    onChange(!checked);
  }

  public render(): JSX.Element {
    const {
      foregoundColor,
      size, caption,
      checked
    } = this.props;

    const strokeWidth: number = 1;
    const coreBulletWidth:number= checked ? (size/2) * 0.55 : 0;
	  let motionStyle: Style;
	  if (checked)
		  motionStyle = {bulletWidth: {stiffness: 300, damping: 10, val: coreBulletWidth, precision: 1}};
	  else
		  motionStyle = {bulletWidth: {stiffness: 300, damping: 26, val: coreBulletWidth, precision: 1}};

    return (
      <div className={style.container} onClick={this.handleClick.bind(this)}>
        <div className={style.bulletContainer}>
          <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            <g>
              <circle
                cx={size / 2}
                cy={size / 2}
                r={(size / 2) - strokeWidth}
                stroke={foregoundColor}
                strokeWidth={strokeWidth}
                fill="transparent"
              />
	            <Motion defaultStyle={{bulletWidth: 0}} style={motionStyle}>
		            {interpolatingStyle => (
			            <circle
				            cx={size / 2}
				            cy={size / 2}
				            r={interpolatingStyle.bulletWidth}
				            stroke={foregoundColor}
				            strokeWidth={strokeWidth}
				            fill="foregoundColor"
			            />
		            )}
	            </Motion>
            </g>
          </svg>
        </div>
        <div className={style.textContainer}>{caption}</div>
      </div>
    );
  }
}
