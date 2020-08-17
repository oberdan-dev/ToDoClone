import Styled from 'styled-components';

export const Container = Styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Form = Styled.div`
    width: 50%;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TypeIcons = Styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
    .inactive{
        opacity: 0.5;
    }

    button{
        border: none;
        background: none;
    }

    img {
        width: 50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;
        &:hover{
            opacity: 0.5;
        }
    }
`

export const InputDataTask = Styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span{
        color: #707070;
        margin: 5px 0;
    }

    input{
        font-size: 16px;
        padding: 15px;
        margin-bottom: 5px;
        border: none;
        border-bottom: 1px solid #EE6B26;

    }

    img {
        width: 20px;
        height: 20px;
        position: relative;
        left: 92%;
        bottom: 40px;
    }
`

export const TextArea = Styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span{
        color: #707070;
        margin: 5px 0;
    }

    textarea{
        font-size: 16px;
        padding: 15px;
        margin-bottom: 5px;
        border: 1px solid #EE6B26;

    }
`
export const Options = Styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;

    button{
        font-weight: bold;
        font-size: 18px;
        color: #20295F;
        border: none;
        background: none;
        cursor: pointer;
        
        &:hover{
            opacity: 0.7;
        }
    }

    div{
        display: flex;
        align-items: center;
        color: #EE6B26;
        font-weight: bold;
        font-size: 18px;
    }
`

export const Save = Styled.div`
    width: 50%;
    display: flex;
    margin-top:20px;
    margin-bottom:70px;

    button{
        width: 100%;
        border: none;
        border-radius: 30px;
        background: #EE6B26;
        color: #FFF;
        font-size: 20px;
        font-weight: bold;
        padding: 10px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }
`
