import {createPortal, render} from 'react-dom';

const createDivModal = () => {
  const divModal = document.createElement('div')

  divModal.setAttribute('id', 'modal')
  document.body.appendChild(divModal)

  const idModal = document.getElementById('modal')

  return idModal
}

const renderModal = (modal) => {
  const idModal = createDivModal()
  const res = createPortal(modal, idModal)
  render(res, document.createElement('div'))
}

  
const removeModal = (modal) => modal.remove();

export { renderModal, removeModal }