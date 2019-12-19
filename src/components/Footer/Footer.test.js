/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('Footer renders a title from props', () => {
	const { getByText } = render(<Footer title="Test" />);
	const linkElement = getByText(/Test/i);
	expect(linkElement).toBeInTheDocument();
});