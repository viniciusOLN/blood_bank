import styled from 'styled-components'

const Button = styled.button`
  width: 100%;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme === 'default' ? 'var(--primary-color)' : 'var(--button-white)'};
  color: ${(props) => props.theme === 'default' ? 'var(--primary-color)' : 'var(--button-white)'};
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
  border-radius: var(--border-radius);
  margin-top: 10px;
  cursor: pointer;

  &:hover{
    background-color: ${(props) => props.theme === 'default' ? 'var(--primary-color)' : 'var(--button-white)'};
    color: ${(props) => props.theme === 'default' ? 'var(--background-white-color)' : 'var(--primary-color)'}
  }
`

export { Button }