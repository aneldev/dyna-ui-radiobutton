import * as React from 'react';

import {faIcon, IShowcase} from "dyna-showcase";
import {Logo} from "./Logo";
import {DynaRadioButton, IDynaRadioButtonProps} from "../../src/DynaRadioButton";

require('./showcase.less');

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
          <h3>dyna ts</h3>
          <h4>react module boilerplate</h4>
          <p>An easy way to develop react modules / components in typescript.</p>
        </div>
      ),
    },
    {
      slug: 'plain-button',
      faIconName: 'flask',
      title: 'plain button',
      description: 'The use plain button',
      center: true,
      component: (
        <DynaRadioButton
          caption="Super radio button"
          onChange={(checked) => console.log('checked', checked)}
        />
      ),
      props: [
        {
          slug: 'un-checked',
          title: 'Unchecked',
          props: {
            checked: false,
          } as IDynaRadioButtonProps,
        },
        {
          slug: 'checked',
          title: 'Checked',
          props: {
            checked: true,
          } as IDynaRadioButtonProps,
        },
      ]
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
            <p><a href="https://github.com/aneldev/dyna-ts-react-module-boilerplate">{faIcon('github')} Github</a></p>
            <p><a href="https://www.npmjs.com/package/dyna-ts-react-module-boilerplate">{faIcon('square')} npm</a></p>
          </div>
        </div>
      ),
    },
  ]
}as IShowcase;
