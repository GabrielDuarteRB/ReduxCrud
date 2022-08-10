import styled from "styled-components";

export const Button = styled.button(({backgroundColor, width, height, borderRadius}) => ({
    backgroundColor,
    border: backgroundColor,
    borderRadius: borderRadius ? borderRadius : '40px',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
    height: height ? height : '25px',
    width: width ? width : '150px',
}));