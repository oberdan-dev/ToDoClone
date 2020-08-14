import Styled from 'styled-components';

export const Container = Styled.div`
    width: 250px;
    height: 200px;
    /* Criando sombra a partir do site: https://cssmatic.com/box-shadow */
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 20px;

    &:hover {
        opacity: 0.5;
        cursor: pointer;
        transition: all 0.3s easy;
    }
`
export const TopCard = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const BottomCard = Styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;

    strong{
        color: #EE6B26;
        font-weight: bold;
    }

    span{
        color: #707070;
        font-weight: bold;
    }
`

