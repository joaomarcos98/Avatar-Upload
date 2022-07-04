/** @name Dependencies */
import styled, { css } from "styled-components"

export const Container = styled.div`
    ${({ theme }) => css`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 113px;
        height: 113px;
        border-radius: 72px;
        overflow: hidden;
        background-color: ${theme.colors.shape};
        z-index: 1;
    `}
`

type ImageProps = {
    zoom: string
}

export const Image = styled.img<ImageProps>`
    width: 200px;
    height: 200px;
    transform: scale(calc(${({ zoom }) => zoom} / 20));
`
