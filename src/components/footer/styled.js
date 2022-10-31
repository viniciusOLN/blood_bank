import styled from 'styled-components'

const FooterDiv = styled.footer`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--title-white);
  font-weight: bold;
  font-size: 16px;
  background-color: var(--primary-color);
  margin-top: 200px;

  i{
    color: var(--error-color);
    margin: 0px 10px;
    font-size: 26px;
  }

  @media (max-width: 800px){
    font-size: 12px;
  }
`

export { FooterDiv }