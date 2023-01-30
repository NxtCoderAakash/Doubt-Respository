import GameContext from '../../context/GameContext'
import {ButtonImage, PlayingButton} from './styledComponents'

const PlayButton = props => {
  const {data} = props
  const {id, imageUrl} = data

  return (
    <GameContext.Consumer>
      {value => {
        const {setSelectionUser} = value
        const setUser = () => {
          setSelectionUser(id)
        }
        return (
          <PlayingButton
            data-testid={`${id.toLowerCase()}Button`}
            onClick={setUser}
            type="button"
          >
            <ButtonImage alt={id} src={imageUrl} />
          </PlayingButton>
        )
      }}
    </GameContext.Consumer>
  )
}

export default PlayButton
