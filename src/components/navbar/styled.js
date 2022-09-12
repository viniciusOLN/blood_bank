import styled from  'styled-components';

const TABLET_AND_PHONE_SIZE = 1060;

export const NavbarDiv = styled.div`
    height: 90px;
    background: #6441EE;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-weight: bold;
    
    @media (max-width: ${TABLET_AND_PHONE_SIZE}px) {
        height: auto;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        padding: 10px;
    }

    #logo{
        width: 100px;
        height: auto;
    }

    a > img{
        width: 100%;
        height: 100%;
        display block;
    }

    button{
        width: 145px;
        height: 40px;
        border: 2px solid #FFFFFF;
        border-radius: 8px;
        background: transparent;
        font-family: 'Inter';
        font-weight: 700;
        font-size: 16px;
        color: #FFFFFF;
        cursor: pointer;

        &:hover{
            color: #6441EE;
            background-color: #fff;
        }
    }

    i{
        color: var(--title-white);
        font-size: 35px;
        cursor: pointer;
        display: none;
        margin-top: 20px;

        @media (max-width: ${TABLET_AND_PHONE_SIZE}px){
            display: block;
        }
    }
`

export const LinksDiv = styled.div`
    width: 900px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    a{
        font-family: 'Inter';
        font-weight: 700;
        font-size: 18px;
        color: #FFFFFF;
        text-align: center;
        &:active{
        color: #313030;
        }
    }

    @media (max-width: ${TABLET_AND_PHONE_SIZE}px) {
        flex-direction: column;
        align-items: end;
        margin: 20px 0px;
        width: 100%;
        display: ${(props)=> props.modalOpen ? 'flex' : 'none'};
        a{
            margin-bottom: 20px;
        }
    }
`

export const DivRowUtils = styled.div`
    @media (max-width: ${TABLET_AND_PHONE_SIZE}px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`