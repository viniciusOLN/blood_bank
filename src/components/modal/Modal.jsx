import { OverlayDiv } from "./styled";

const Modal = (props) => {
  return(
    <OverlayDiv>
      <div>

      </div>
      {props.children}
    </OverlayDiv>
  )
}

export default Modal