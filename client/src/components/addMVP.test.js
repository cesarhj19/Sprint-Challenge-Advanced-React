import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddMVP from './addMVP';

afterEach(cleanup);

it('displays the number of MVPs', () => {
	const { getByTestId } = render(<AddMVP />);
	expect(getByTestId('mvp')).toHaveTextContent('0');
});

it('increments number of MVPs', () => {
	const { getByTestId, getByText } = render(<AddMVP />);
	fireEvent.click(getByText('Add MVP'));
	expect(getByTestId('mvp')).toHaveTextContent('1');
});
