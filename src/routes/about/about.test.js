/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import About from './about';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<About />, div);
	ReactDOM.unmountComponentAtNode(div);
});