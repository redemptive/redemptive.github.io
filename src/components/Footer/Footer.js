import React, {Component} from 'react';

class Footer extends Component {
	render() {
		return (
			<footer>
				<h3>{this.props.title}</h3>
				<p>
            This site is made with react and react-router-dom. <a href="https://github.com/redemptive/redemptive.github.io">
            See the code here
					</a>
				</p>
			</footer>
		);
	}
}

export default Footer;