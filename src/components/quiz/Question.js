import React, {Component} from 'react';

class Question extends Component {

	onChange(event){
		event.preventDefault();

		const {setCurrent, setScore, question} = this.props;

		let selected = event.target.value;

		if (selected === question.correct) {
			setScore(this.props.score + 1);
		}

		setCurrent(this.props.current + 1);
	}

	render(){
		const {question} = this.props;

		return (
			<div className="well">
				<h3>{question.text}</h3>
				<hr />
				<ul className="list-group">
					{
						this.props.question.choices.map(choice => {
							return (
								<li className="list-group-item" key={choice.id}>
								<input type="radio" onChange={this.onChange.bind(this)} name={question.id} value={choice.id} />
								{choice.id} - {choice.text}
								</li>
							)

						})
					}
				</ul>
			</div>
		)
	}
}

export default Question