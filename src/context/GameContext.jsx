import React from 'react'

const GameContext = React.createContext({
  userSelection: null,
  computerSelection: null,
  setSelectionUser: () => {},
  result: 0,
  score: 0,
  choicesList: [],
  setPlayAgain: () => {},
})

export default GameContext
