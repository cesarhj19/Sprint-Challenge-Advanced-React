import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddGoals from './addGoals';

afterEach(cleanup);

it('displays the number of goals', () => {
	const { getByTestId } = render(<AddGoals />);
	expect(getByTestId('count')).toHaveTextContent('0');
});

it('increments number of goals', () => {
	const { getByTestId, getByText } = render(<AddGoals />);
	fireEvent.click(getByText('Add Goal'));
	expect(getByTestId('count')).toHaveTextContent('1');
});
