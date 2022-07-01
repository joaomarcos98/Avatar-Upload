import styled, { css } from "styled-components"

const containerModifiers = {
    dragActive: () => css`
        border-color: #78e5d5;
    `,
    dragReject: () => css`
        border-color: #e57878;
    `
}

type ContainerProps = {
    isDragActive: boolean
    isDragReject: boolean
}
export const Container = styled.div<ContainerProps>`
    ${({ isDragActive, isDragReject }) => css`
        cursor: pointer;
        transition: height 0.2s ease;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        display: flex;
        padding-left: 50px;
        ${isDragActive && containerModifiers.dragActive()};
        ${isDragReject && containerModifiers.dragReject()};
    `};
`

const messageColors = {
    default: "#999",
    error: "#e57878",
    success: "#78e5d5"
}

type MessageProps = {
    type: "default" | "error" | "success"
}

export const Message = styled.p<MessageProps>`
    color: ${({ type }) => messageColors[type]};
    line-height: 25px;
    font-size: 14px;
    margin: 0;
`

export const Image = styled.img`
    width: 16px;
    height: 12px;
    padding-right: 12px;
`

export const Title = styled.h3`
    font-size: 14px;
    color: #495567;
    line-height: 25px;
    margin: 0;
`
