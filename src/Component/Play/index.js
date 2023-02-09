import PlayButton from '../PlayButton'
import {PlayContainer} from './styledComponents'

const Play = props => {
  const {choicesList, setSelectionUser} = props

  return (
    <PlayContainer as="ul">
      {choicesList.map(item => (
        <PlayButton
          key={item.id}
          data={item}
          setSelectionUser={setSelectionUser}
        />
      ))}
    </PlayContainer>
  )
}

export default Play
