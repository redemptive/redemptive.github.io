import React, {Component} from 'react';

class ProjectPanel extends Component {
	render() {
		return (
			<div className="ProjectPanel">
				<h3>{this.props.title}</h3>
				{ 
					this.props.paragraphs.map((element, key) => {
						return (<p key={key}>{element}</p>);
					})
				}
				<p><a href={this.props.codeLink}>View code</a></p>
				{ (this.props.playLink ? <p><a data-testid="play-link" href={this.props.playLink}>Play it!</a></p> : null) }
			</div>
		);
	}
}

export default ProjectPanel;