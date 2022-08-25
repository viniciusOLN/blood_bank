import styled from 'styled-components'

const Button = styled.button`
  width: 100%;
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
  border-radius: var(--border-radius);
  margin-top: 10px;
  cursor: pointer;

  &:hover{
    background-color: var(--primary-color);
    color: var(--background-white-color);
  }
`

export { Button }