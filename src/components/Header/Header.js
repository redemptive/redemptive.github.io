import React, {Component} from 'react';

import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<header>
				<nav>
					<ul>
						{this.props.navLinks.map((element, key) => {
							return (<li key={key}><Link to={element.page}>{element.text}</Link></li>);
						})}
					</ul>
				</nav>
				<a href="https://github.com/redemptive"><button>GitHub</button></a>
			</header>
		);
	}
}

export default Header;