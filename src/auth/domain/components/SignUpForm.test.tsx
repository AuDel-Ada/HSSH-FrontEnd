import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import customRender from '../../../../test-utils';

import SignInForm from './SignUpForm';

test('pass valid email to test email input field', async () => {
  customRender(<SignInForm />);

  const goodEM = screen.getByTestId('email-input');
  await userEvent.type(goodEM, 'test@mail.com');

  expect(screen.getByTestId('email-input')).toHaveValue('test@mail.com');
  expect(screen.queryByTestId('email-error-msg')).not.toBeInTheDocument();
});

test('not accept password with less than 8 characters', async () => {
  customRender(<SignInForm />);

  const smallPW = screen.getByTestId('password-input');
  await userEvent.type(smallPW, 'test');

  expect(screen.getByTestId('password-input')).toHaveValue('test');
  expect(screen.queryByTestId('password-error-msg')).toBeInTheDocument();
});
