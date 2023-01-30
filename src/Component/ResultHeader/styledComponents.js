import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 500px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid white;
  border-radius: 10px;
  padding: 20px;
  font-family: Bree Serif;
`
export const ScoreCard = styled.div`
  text-align: center;
  color: #223a5f;
  background-color: white;
  padding: 10px;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 10px;
`

export const Para = styled.p`
  margin: 0px;
`

export const ScoreNumber = styled(Para)`
  font-size: 28px;
  font-family: Roboto;
`
export const GameHead = styled.h1`
  width: 100px;
  font-size: 20px;
`
