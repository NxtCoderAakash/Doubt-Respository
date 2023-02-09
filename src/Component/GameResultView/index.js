// import GameContext from '../../context/GameContext'
import {
  PlayAgainButton,
  ResultSectionContainer,
  SelectedImage,
  Heading1,
  ResultContainer,
} from './styledComponents'

const GameResultView = props => {
  //   <GameContext.Consumer>
  //     {value => {
  const {
    userSelection,
    computerSelection,
    result,
    choicesList,
    setPlayAgain,
  } = props

  const getUserImage = () => {
    const userUrl = choicesList.filter(item => item.id === userSelection)[0]
      .imageUrl

    return userUrl
  }
  const getOpponentImage = () => {
    const computerUrl = choicesList.filter(
      item => item.id === computerSelection,
    )[0].imageUrl

    return computerUrl
  }

  const displayResult = data => {
    switch (data) {
      case 1:
        return 'YOU WON'
      case -1:
        return 'YOU LOSE'
      case 0:
        return 'IT IS DRAW'

      default:
        return null
    }
  }

  return (
    <ResultSectionContainer>
      <ResultContainer>
        <div>
          <p>YOU</p>
          <SelectedImage src={getUserImage()} alt="your choice" />
        </div>
        <div>
          <p>OPPONENT</p>
          <SelectedImage src={getOpponentImage()} alt="opponent choice" />
        </div>
      </ResultContainer>
      <Heading1 as="p">{displayResult(result)}</Heading1>
      <PlayAgainButton type="button" onClick={setPlayAgain}>
        PLAY AGAIN
      </PlayAgainButton>
    </ResultSectionContainer>
  )
  //     }}
  //   </GameContext.Consumer>
}

export default GameResultView
