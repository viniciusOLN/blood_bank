import styled from 'styled-components'

const DivInput = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 10px;
  &:focus-within #text{
    transform: translate(0, -22px) scale(0.80);
  }

  i{
    font-size: 18px;
    font-weight: bold;
    color: var(--title-black);
    position: absolute;
    right: 0;
    transform: translate(-15px, 18px);
    cursor: pointer;
  }

`

const Input = styled.input `
  width: 100%;
  outline: none;
  padding: 15px;
  border: 2px solid var(--primary-color);
  caret-color: var(--primary-color);
  font-family: 'Inter';
  font-weight: regular;
  color: var(--title-black);
  border-radius: var(--border-radius);  
`
const Placeholder = styled.div`
  background-color: var(--background-white-color);
  padding: 5px;
  position: absolute;
  top: 12px;
  left: 8px;
  transform: ${(props)=> props.isActive ? 'translate(0, -22px) scale(0.80)' : ' transform: translate(0, -22px) scale(0.80)' };
  transform-origin: top left;
  transition: all 0.2s ease-out;
  pointer-events: none;
  color: var(--title-black);
  font-weight: bold;
`

export { Input, Placeholder, DivInput }