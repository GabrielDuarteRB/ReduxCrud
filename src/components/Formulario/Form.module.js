import styled from "styled-components";

export const CardForm = styled.div`
    align-items: center;
    background-color: white;
    border: 1px solid #DFE0EB;
    border-radius: 8px; 
    display: flex;
    flex-direction: column ;
    height : auto;
    justify-content: center ;
    padding: 24px 8px;
    width: 380px;
`

export const Window = styled.div`
    align-items: center;
    background-color: #363740;
    display: flex;
    justify-content: center;
    height: 100vh;
`

export const Title = styled.h1`
    color: #252733;
    font-weight: 700;
    font-size: 24px;
    margin-bottom:  12px;
`

export const SubTitle = styled.h2 `
    color: #A4A6B3;
    font-size: 19px;
    font-weight: 700;
    margin: 12px 0 32px;
    opacity: 0.7 ;
`

export const SmallText = styled.small `
    color: #9FA2B4;
    cursor: ${props => props.small ? 'pointer' :  ''};
    font-size: ${props => props.small ? '10px' :  '14px'};
    font-weight: 400;
    &:nth-child(4){ 
        margin-bottom: 48px;
    }
`

export const FieldForm = styled.div `
    margin-bottom: 24px ;
    &>input {
        background: #FCFDFE;
        border: 1px solid #F0F1F7;
        border-radius: 8px;
        height:42px ;
        padding-left: 16px;
        margin-top: 8px;
        width: 316px ;
        &::placeholder {
            color: #4B506D;
            opacity: 0.4;
        }
    }
    & svg {
        margin-left: -30px ;
    }
    & > select {
        background: #FCFDFE;
        border: 1px solid #F0F1F7;
        border-radius: 8px;
        height:42px ;
        padding-left: 16px;
        margin-bottom: 8px;
        width: 316px ;
        &::placeholder {
            color: #4B506D;
            opacity: 0.4;
        }
    }
    & > textarea {
        background: #FCFDFE;
        border: 1px solid #F0F1F7;
        border-radius: 8px;
        height:80px ;
        padding: 8px 16px;
        margin-bottom: 8px;
        width: 316px ;
        &::placeholder {
            color: #4B506D;
            opacity: 0.4;
        }
    }
`

export const PasswordFieldTexts = styled.div `
    display: flex;
    justify-content: space-between ;
`