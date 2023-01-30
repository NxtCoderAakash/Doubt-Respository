import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  TriggerButton,
  PopupContainer,
  RulesImage,
  PoppedupContainer,
} from './styledComponents'

const Rules = () => (
  <PopupContainer>
    <Popup modal trigger={<TriggerButton type="button">Rules</TriggerButton>}>
      {close => (
        <>
          <PoppedupContainer>
            <TriggerButton type="button" onClick={() => close()}>
              <RiCloseLine />
            </TriggerButton>
            <RulesImage
              alt="rules"
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            />
          </PoppedupContainer>
        </>
      )}
    </Popup>
  </PopupContainer>
)
export default Rules
