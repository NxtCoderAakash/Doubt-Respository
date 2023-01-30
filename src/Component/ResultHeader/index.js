import GameContext from '../../context/GameContext'
import {
  GameHead,
  HeaderContainer,
  ScoreCard,
  ScoreNumber,
  Para,
} from './styledComponents'

const ResultHeader = () => (
  <GameContext.Consumer>
    {value => {
      const {score} = value
      return (
        <HeaderContainer>
          <div className="logo-card">
            <GameHead as="h1">ROCK PAPER SCISSORS</GameHead>
          </div>
          <ScoreCard>
            <Para>SCORE</Para>
            <ScoreNumber as="p">{score}</ScoreNumber>
          </ScoreCard>
        </HeaderContainer>
      )
    }}
  </GameContext.Consumer>
)

export default ResultHeader
