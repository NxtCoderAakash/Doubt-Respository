// import GameContext from '../../context/GameContext'
import {ButtonImage, PlayingButton} from './styledComponents'

const PlayButton = props => {
  const {data, setSelectionUser} = props
  const {id, imageUrl} = data

  //   return (
  //     <GameContext.Consumer>
  //       {value => {
  //         const {setSelectionUser} = value
  const setUser = () => {
    setSelectionUser(id)
  }

  const lowerId = id.toLowerCase()

  return (
    <li>
      <PlayingButton
        type="button"
        data-testid={`${lowerId}Button`}
        onClick={setUser}
      >
        <ButtonImage alt={id} src={imageUrl} />
      </PlayingButton>
    </li>
  )
  //   }}
  // </GameContext.Consumer>
  //   )
}

export default PlayButton
