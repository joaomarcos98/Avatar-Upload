/** @name Dependencies */
import styled, { css } from "styled-components"

export const Container = styled.div`
    position: relative;
`

export const Input = styled.input`
    ${({ theme }) => css`
        width: 100%;
        position: relative;
        -webkit-appearance: none;
        height: 2px;
        background-color: transparent;
        z-index: 2;

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 13px;
            width: 13px;
            background-color: ${theme.colors.blue_100};
            border-radius: 50%;
        }

        &:focus {
            outline-color: ${theme.colors.blue_100};
            outline-offset: 2px;
        }
    `}
`

export const Bar = styled.span`
    ${({ theme }) => css`
        position: absolute;
        z-index: 0;
        top: 13px;
        width: 100%;
        height: 2px;
        background-color: ${theme.colors.blue_400};
        border-radius: 2px;
    `}
`

type FillProps = {
    percentagem: string
}
export const Fill = styled.span<FillProps>`
    ${({ theme, percentagem }) => css`
        display: block;
        width: ${`${(Number(percentagem) - 10) * 2}%`};
        height: 100%;
        background-color: ${theme.colors.blue_100};
        border-radius: 2px;
    `}
`
