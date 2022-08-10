import styled from "styled-components";

export const List = styled.ul`
    align-items: center ;
    background-color: #FFFFFF;
    border-top: 1px solid #DFE0EB;
    border-bottom: 1px solid #DFE0EB;
    display: grid  ;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 0;
    padding: 26px;
    text-align: center;
    &  svg{
        cursor: pointer;
    }
    & > div {
        display: flex ;
        gap: 8px ;
        justify-content : center ;
    }
`

export const Itens = styled.li`
    text-decoration: none ;
    list-style: none ;
`

export const TextAside = styled.p `
    color: #A4A6B3;
    font-size: 16px;
    font-weight: 400;
`

export const AsideList = styled.ul`
    display: flex;
    flex-direction: column ;
`

export const ListAsideItens = styled.li`
    align-items: center ;
    cursor: pointer;
    display: flex ;
    gap: 8px;
    padding: 12px 0 12px 24px ;
    &:last-of-type{
        border-top: 1px solid #DFE0EB;
    }
`