import styled, { css, DefaultTheme } from "styled-components"

type ContainerProps = {
    dashed?: boolean
}

const containerModifier = {
    dashed: (theme: DefaultTheme) => css`
        border: 1px dashed ${theme.colors.gray_300};
    `
}

export const Container = styled.section<ContainerProps>`
    ${({ theme, dashed }) => css`
        font-family: Inter, sans-serif;
        background-color: ${theme.colors.background};
        border-radius: ${theme.border.radius.small};
        cursor: pointer;
        transition: height 0.2s ease;
        width: 530px;
        height: 177px;
        justify-content: center;
        align-items: center;
        display: flex;

        ${dashed && containerModifier.dashed(theme)}
    `}
`
