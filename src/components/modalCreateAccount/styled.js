import styled from  'styled-components';

const TitleLogin = styled.h2`
  font-size: 30px;
  color: var(--title-black);
  font-weight: bold;
  margin-bottom: 25px;
`

const BrandLogo = styled.div`
  width: 50%;
  margin-bottom: 10px;

  img{
     width: 100%;
     height: 100%;
  }
`
const DivLogin = styled.div`
  width: 90%;
  margin-bottom: 20px;

  .errorApi {
    font-size: 14px;
    margin-bottom: 12px;
    color: var(--error-color);
    font-weight: 500;
  }

  .passwordSecurity{
    font-size: 12px;
    margin-bottom: 15px;
  }

  .passwordSecurity span{
    color: var(${(props) => props.colorTipPassword});
    font-weight: 800;
    text-transform: uppercase;
  }
`

const CreateAccount = styled.p`
  font-size: 14px;
  color: var(--title-black);
  text-align: center;
  margin-top: 25px;
`

export { TitleLogin, BrandLogo, DivLogin, CreateAccount }