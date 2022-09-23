import styled from 'styled-components'

const DivInput = styled.div`
  margin-bottom: 15px;
`

const InputSelect = styled.select`
  width: 100%;
  outline: none;
  display: block;
  padding: 15px;
  border: 2px solid ${(props) => props.error ? 'var(--error-color)' : 'var(--primary-color)'};
  caret-color: var(--primary-color);
  font-family: 'Inter';
  font-weight: regular;
  color: var(--title-black);
  border-radius: var(--border-radius); 
`

const ErrorMessage = styled.p`
  font-size: 12px;
  margin-top: 5px;
  color: var(--error-color);
`

export {InputSelect, ErrorMessage, DivInput}