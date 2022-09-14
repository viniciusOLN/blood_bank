import styled from 'styled-components'

const TABLET_SIZE = 1210;

const DivButton = styled.div`
  width: 40%;
  align-self: start;
  @media (max-width: ${TABLET_SIZE}px){
    width: 100%;
  }
`

export { DivButton }