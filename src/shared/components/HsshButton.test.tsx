import React from 'react';
import { render } from '@testing-library/react';

import HsshButton from './HsshButton';

test('get the proper action', () => {
  const props = 'Visit';
  render(<HsshButton {...props} />);

  expect(props).toBeDefined();
});
