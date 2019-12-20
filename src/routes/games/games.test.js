/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import Games from './games';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Games />, div);
	ReactDOM.unmountComponentAtNode(div);
});