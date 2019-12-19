/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import ProjectPanel from './ProjectPanel';

test('Project panel displays a title', () => {
	const { getByText } = render(<ProjectPanel 
		title="Space Invaders"
		paragraphs={[
			'I don\'t think this one needs any introduction.',
			'I\'ve remade this old school classic into a browser playable game. Ground breaking in it\'s time, \
			simple game mechanics combine to make the game everybody knows.'
		]}
		codeLink="https://github.com/redemptive/space-invaders"
		playLink="https://redemptive.github.io/space-invaders/"
	/>);
	const linkElement = getByText(/Space Invaders/i);
	expect(linkElement).toBeInTheDocument();
});