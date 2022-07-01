import styled, { css } from "styled-components"

type ContainerProps = {
    dashed?: boolean
}

const containerModifier = {
    dashed: () => css`
        border: 1px dashed #c7cdd3;
    `
}

export const Container = styled.section<ContainerProps>`
    font-family: Inter, sans-serif;
    background-color: #f2f5f8;
    border-radius: 8px;
    cursor: pointer;
    transition: height 0.2s ease;
    width: 530px;
    height: 177px;
    justify-content: center;
    align-items: center;
    display: flex;

    ${({ dashed }) => dashed && containerModifier.dashed()}
`
