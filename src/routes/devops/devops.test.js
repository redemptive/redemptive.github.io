/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import DevOps from './devops';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<DevOps />, div);
	ReactDOM.unmountComponentAtNode(div);
});