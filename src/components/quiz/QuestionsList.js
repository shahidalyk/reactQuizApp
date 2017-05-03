import React, {Component} from 'react'
import Question from './Question'

class QuestionsList extends Component {

	render(){
		return (
			<div>
			{
				this.props.questions.map(question => {
					if (question.id === this.props.current) {
						return (
							<Question question={question} key={question.id} {...this.props} />
						)
					}
					
				})
			}
			</div>
		)
	}
}

export default QuestionsList