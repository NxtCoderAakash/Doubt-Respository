// import GameContext from '../../context/GameContext'
import {
  GameHead,
  HeaderContainer,
  ScoreCard,
  ScoreNumber,
  Para,
} from './styledComponents'

const ResultHeader = props => {
  //   <GameContext.Consumer>
  //     {value => {
  const {score} = props
  return (
    <HeaderContainer>
      <div className="logo-card">
        <GameHead as="h1">Rock Paper Scissors</GameHead>
      </div>
      <ScoreCard>
        <Para>SCORE</Para>
        <ScoreNumber as="p">{score}</ScoreNumber>
      </ScoreCard>
    </HeaderContainer>
  )
  //     }}
  //   </GameContext.Consumer>
}

export default ResultHeader
