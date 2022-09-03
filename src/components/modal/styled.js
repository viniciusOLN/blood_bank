import styled from 'styled-components';

const OverlayDiv = styled.div`
  width: 32%;
  position: absolute;
  top: 0;
  margin-top: 50px;
  background-color: var(--background-white-color);
  border-radius: var(--border-radius);
  box-shadow: var(--modal-box-shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;

  @media(max-width: 1250px) {
    width: 400px;
  }
`

const CloseButtonDiv = styled.div`
  width: 100%;
  display: flex;
  height: 30px;
  justify-content: end;

  i{
    font-size: 30px;
    cursor: pointer;
    color: var(--title-black)
  }
`

export {OverlayDiv, CloseButtonDiv}