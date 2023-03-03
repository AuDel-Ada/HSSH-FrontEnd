import React from 'react';
import { test, expect } from 'vitest';
import { screen } from '@testing-library/react';

import customRender from '../../../test-utils';

import Header from './Header';

test('shows logo', () => {
  customRender(<Header />);
  expect(screen.getByTestId('logo'));
});
