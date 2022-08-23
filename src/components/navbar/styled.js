import styled from  'styled-components';

export const NavbarDiv = styled.div`
    height: 70px;
    width: 100%;
    background: #6441EE;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 40px;
    padding-left: 40px;

    

    img{
        height: 80%;
        cursor: pointer;
        margin-right: 10px;
    }

    button{
        width: 130px;
        height: 40px;
        border: 2px solid #FFFFFF;
        border-radius: 8px;
        background: transparent;
        font-family: 'Inter';
        font-weight: 700;
        font-size: 15px;
        color: #FFFFFF;
        cursor: pointer;
    }
`

export const LinksDiv = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    a{
        font-family: 'Inter';
        font-weight: 700;
        font-size: 13px;
        color: #FFFFFF;
        margin-right: 10px;
        text-align: center;
        &:hover{
        text-decoration: underline;
        }
    }




`