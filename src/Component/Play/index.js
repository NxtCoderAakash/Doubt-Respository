import PlayButton from '../PlayButton'
import {PlayContainer} from './styledComponents'

const Play = props => {
  const {choicesList} = props

  return (
    <PlayContainer>
      {choicesList.map(item => (
        <PlayButton key={item.id} data={item} />
      ))}
    </PlayContainer>
  )
}

export default Play
