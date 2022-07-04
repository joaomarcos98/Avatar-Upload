/** @name Dependecies */
import styled, { css } from "styled-components"

export const Container = styled.button`
    ${({ theme }) => css`
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
            outline-color: ${theme.colors.blue_100};
            outline-offset: 2px;
        }
    `}
`

export const Image = styled.img`
    height: 12px;
    width: 12px;
`
