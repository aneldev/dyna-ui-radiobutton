declare let window: any;
declare let global: any, jasmine: any, describe: any, clearTest: any, it: any, expect: any;
if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

import {DynaRadioButton} from '../../src';

// help: https://facebook.github.io/jest/docs/expect.html

describe('Simple unit test', () => {
  it('should import the component', () => {
		expect(DynaRadioButton).not.toBe(undefined);
	});
});
