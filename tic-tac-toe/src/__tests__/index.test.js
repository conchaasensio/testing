import React from 'react';
import { render } from '@testing-library/react';
import { Game } from '../game';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

describe('Game history', function () {
  it('should start with empty history', async function () {
    const { queryAllByRole } = render(<Game />);

    const movementHistory = queryAllByRole('button', { name: /go to move/i });
    expect(movementHistory.length).toBe(0);
  });

  it('should remember the first movement', async function () {
    const { getByTestId, getAllByRole } = render(<Game />);

    await userEvent.click(getByTestId('square-1'));

    const movementHistory = getAllByRole('button', { name: /go to move/i });
    expect(movementHistory.length).toBe(1);
  });
});
