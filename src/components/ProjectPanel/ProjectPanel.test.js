/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import ProjectPanel from './ProjectPanel';

test('Project panel displays a title', () => {
	const { getByText } = render(<ProjectPanel 
		title="Test"
		paragraphs={[
			'I am talking',
			'About a project I made'
		]}
		codeLink="https://github.com/redemptive/space-invaders"
		playLink="https://redemptive.github.io/space-invaders/"
	/>);
	const linkElement = getByText(/Test/i);
	expect(linkElement).toBeInTheDocument();
});

test('Project panel has no playLink if is isn\'t passed', () => {
	const { queryByTestId } = render(<ProjectPanel 
		title="Test"
		paragraphs={[
			'I am talking',
			'About a project I made'
		]}
		codeLink="https://github.com/redemptive/space-invaders"
	/>);
	expect(queryByTestId('play-link')).toBeNull();
});

test('Project panel has no codeLink if is isn\'t passed', () => {
	const { queryByTestId } = render(<ProjectPanel 
		title="Test"
		paragraphs={[
			'I am talking',
			'About a project I made'
		]}
		playLink="https://github.com/redemptive/space-invaders"
	/>);
	expect(queryByTestId('code-link')).toBeNull();
});