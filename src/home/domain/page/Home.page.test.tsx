import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';

import Home from './Home.page';

describe('Home Page', () => {
  test('snapshot UI testing', () => {
    const view = render(Home, {});
    expect(view).toMatchSnapshot();
  });
});
