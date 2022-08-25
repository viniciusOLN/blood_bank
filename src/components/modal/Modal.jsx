import { removeModal } from "../../utils/modalUtils";
import { OverlayDiv, CloseButtonDiv } from "./styled";

const Modal = (props) => {

  const handleCloseModal = () => {
    const modal = document.getElementById("modal");
    removeModal(modal);
  }

  return (
    <OverlayDiv>
      <CloseButtonDiv>
        <i className="ri-close-line" onClick={handleCloseModal}></i>
      </CloseButtonDiv>
      {props.children}
    </OverlayDiv>
  )
}

export default Modal