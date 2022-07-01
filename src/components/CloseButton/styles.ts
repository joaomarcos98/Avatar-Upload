import styled from "styled-components"

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 5px;
    top: 36px;
    right: 28px;
    border: 0;
    background: transparent;
    cursor: pointer;

    &:focus {
        outline-color: #3f80ff;
        outline-offset: 2px;
    }
`

export const Image = styled.img`
    height: 12px;
    width: 12px;
`
