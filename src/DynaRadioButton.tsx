import * as React from 'react';

const style: any = require('./DynaRadioButton.less');

export interface IDynaRadioButtonProps {
  checked?: boolean;
  caption?: string;
  size?: number;
  foregoundColor?: string;
  backgoundColor?: string;
  onChange?: (checked: boolean) => void;
}

export class DynaRadioButton extends React.Component<IDynaRadioButtonProps, any> {
  static defaultProps: IDynaRadioButtonProps = {
    foregoundColor: 'black',
    backgoundColor: 'transparent',
    size: 50,
  };


  private handleClick():void{
    const {checked, onChange} = this.props;
    onChange(!checked);
  }

  public render(): JSX.Element {
    const {
      foregoundColor, backgoundColor,
      size, caption,
      checked
    } = this.props;

    const strokeWidth: number = 1;
    const coreBulletWidth:number= checked ? (size/2) * 0.6 : 0;

    return (
      <div className={style.container}>
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
              <circle
                cx={size / 2}
                cy={size / 2}
                r={coreBulletWidth}
                stroke={foregoundColor}
                strokeWidth={strokeWidth}
                fill="foregoundColor"
              />
            </g>
          </svg>
        </div>
        <div className={style.textContainer}>{caption}</div>
      </div>
    );
  }
}
