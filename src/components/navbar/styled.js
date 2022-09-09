import styled from  'styled-components';

export const NavbarDiv = styled.div`
    height: 90px;
    background: #6441EE;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-weight: bold;
    
    @media (max-width: 890px) {
        height: auto;
        justify-content: space-between;
        padding: 10px;
    }

    #logo{
        width: 8%;
        height: auto;
        
        @media (max-width: 1220px) {
            width: 80px;
        }
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

    & .burguer{
        color: var(--title-white);
        font-size: 35px;
        cursor: pointer;
        display: none;

        @media (max-width: 890px){
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

    @media (max-width: 890px) {
        flex-direction: column;
        display: ${(props)=> props.modalOpen ? 'flex' : 'none'};
        a{
            margin-bottom: 20px;
        }
    }
`