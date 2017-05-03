import React, {Component} from 'react';

class Results extends Component {
	render(){
		var percent = (this.props.score / this.props.questions.length) * 100
		if (percent > 80) {
			var message = 'Awesome'
		}
		else if (percent < 80 && percent > 50) {
			var message = 'Great'
		}
		else {
			var message = 'Alrighty'
		}

		return (
			<div className="well">
				<h4>You got {this.props.score} correct out of {this.props.questions.length}</h4>
				<h1>{percent}% - {message}</h1>
				<hr />
				<a href="/app">Take Again</a>
			</div>
		)
	}
}

export default Results