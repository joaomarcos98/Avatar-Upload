import styled, { css } from "styled-components"

export const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 32px;
    position: relative;
`

export const Icon = styled.img`
    ${({ theme }) => css`
        width: 20px;
        height: 20px;
        padding: 45px;
        background-color: ${theme.colors.gray_400};
        border-radius: ${theme.border.radius.round};
        margin-right: 32px;
    `}
`

export const Content = styled.div`
    justify-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Title = styled.h4`
    ${({ theme }) => css`
        font-size: ${theme.font.size.normal};
        line-height: 29px;
        font-weight: 400;
        color: ${theme.colors.red};
        margin: 2px 0;
    `}
`

export const Message = styled.span`
    ${({ theme }) => css`
        font-size: ${theme.font.size.normal};
        line-height: 29px;
        font-weight: 400;
        color: ${theme.colors.gray_700};
        text-decoration: underline;
        text-underline-offset: 2px;
    `}
`
