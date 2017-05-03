import React, { Component } from 'react'
import QuestionsList from './quiz/QuestionsList'
import Score from './quiz/Score'
import Results from './quiz/Results'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      score: 0,
      current: 1,
      questions: [
        {
          id: 1,
          text: 'What is your name?',
          choices: [
            {
              id: 'a',
              text: 'Somebody'
            },
            {
              id: 'b',
              text: 'Homo Sapien'
            },
            {
              id: 'c',
              text: 'Ape'
            },
            {
              id: 'd',
              text: 'Robot'
            }
          ],

          correct: 'b'
        },

        {
          id: 2,
          text: 'Who are you?',
          choices: [
            {
              id: 'a',
              text: 'Somebody'
            },
            {
              id: 'b',
              text: 'Homo Sapien'
            },
            {
              id: 'c',
              text: 'Ape'
            },
            {
              id: 'd',
              text: 'Robot'
            }
          ],

          correct: 'b'
        },

        {
          id: 3,
          text: 'Sure?',
          choices: [
            {
              id: 'a',
              text: 'Somebody'
            },
            {
              id: 'b',
              text: 'Homo Sapien'
            },
            {
              id: 'c',
              text: 'Ape'
            },
            {
              id: 'd',
              text: 'Robot'
            }
          ],

          correct: 'b'
        },

        {
          id: 4,
          text: 'Come again?',
          choices: [
            {
              id: 'a',
              text: 'Somebody'
            },
            {
              id: 'b',
              text: 'Homo Sapien'
            },
            {
              id: 'c',
              text: 'Ape'
            },
            {
              id: 'd',
              text: 'Robot'
            }
          ],

          correct: 'b'
        }

      ]
    }

  }

  setCurrent(current){
    this.setState({
      current
    })
  }

  setScore(score){
    this.setState({
      score
    })
  }

  render() {

    if (this.state.current > this.state.questions.length) {
      var scorebox = ''
      var results = <Results {...this.state} />
    } else {
      var scorebox = <Score {...this.state} />
      var results = '';
    }

    return (
      <div className="App">
        {scorebox}
        {results}
        <QuestionsList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
      </div>
    )
  }
}

export default App;
