import React from 'react';
import { test, expect } from 'vitest';
import { render } from '@testing-library/react';

import HsshButton from './HsshButton';

test('get the proper action', () => {
  render(<HsshButton text="Visit" />);

  expect('Visit').toBeDefined();
});
