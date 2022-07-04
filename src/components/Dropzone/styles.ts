/** @name Dependencies */
import styled, { css } from "styled-components"

export const Container = styled.div`
    cursor: pointer;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    /* padding-left: 50px; */
`

export const Title = styled.h3`
    ${({ theme }) => css`
        font-size: ${theme.font.size.normal};
        color: ${theme.colors.gray_600};
        line-height: 25px;
        margin: 0;
    `}
`

export const Image = styled.img`
    min-width: 16px;
    min-height: 12px;
    padding-right: 12px;
`

export const Message = styled.p`
    ${({ theme }) => css`
        color: ${theme.colors.gray_500};
        line-height: 25px;
        font-size: ${theme.font.size.small};
        margin: 0;
    `}
`
