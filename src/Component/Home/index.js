import {Component} from 'react'
import ResultHeader from '../ResultHeader'
import Play from '../Play'
import Rules from '../Rules'
import GameResultView from '../GameResultView'
import GameContext from '../../context/GameContext'
import {HomeContainer, RulesContainer} from './styledComponents'

class Home extends Component {
  state = {
    userSelection: 'ROCK',
    computerSelection: 'PAPER',
    result: 0,
    score: 0,
    showResult: false,
  }

  setSelectionUser = id => {
    const randomNum = Math.round(Math.random() * 2, 0)
    const {choicesList} = this.props
    this.setState(
      {userSelection: id, computerSelection: choicesList[randomNum].id},
      this.setResultAndScore,
    )
  }

  setResultAndScore = () => {
    const {userSelection, computerSelection} = this.state
    if (userSelection !== computerSelection) {
      const currentResult = this.checkResult(userSelection, computerSelection)
      this.setState(prevState => ({
        result: currentResult,
        score: prevState.score + currentResult,
        showResult: true,
      }))
    } else {
      this.setState({
        result: 0,
        showResult: true,
      })
    }
  }

  setPlayAgain = () => {
    this.setState({showResult: false})
  }

  checkResult = (user, comp) => {
    if (user === 'ROCK') {
      if (comp === 'SCISSORS') {
        return 1
      }
      return -1
    }
    if (user === 'PAPER') {
      if (comp === 'ROCK') {
        return 1
      }
      return -1
    }
    if (user === 'SCISSORS') {
      if (comp === 'PAPER') {
        return 1
      }
      return -1
    }
    return null
  }

  render() {
    const {
      showResult,
      userSelection,
      computerSelection,
      result,
      score,
    } = this.state
    const {choicesList} = this.props

    return (
      <GameContext.Provider
        value={{
          userSelection,
          computerSelection,
          setSelectionUser: this.setSelectionUser,
          result,
          score,
          choicesList,
          setPlayAgain: this.setPlayAgain,
        }}
      >
        <HomeContainer>
          <ResultHeader />
          {showResult ? <GameResultView /> : <Play choicesList={choicesList} />}
          <RulesContainer>
            <Rules />
          </RulesContainer>
        </HomeContainer>
      </GameContext.Provider>
    )
  }
}

export default Home
