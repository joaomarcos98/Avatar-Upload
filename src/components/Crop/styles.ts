/** @name Dependencies */
import styled, { css } from "styled-components"

export const Container = styled.section`
    width: 100%;
    padding: 32px;
    position: relative;
    font-family: Inter;
    display: flex;
    align-items: center;
`

export const Title = styled.h2`
    ${({ theme }) => css`
        font-size: ${theme.font.size.normal};
        line-height: 29px;
        color: ${theme.colors.gray_500};
        font-weight: 400;
        margin: 2px 0;
    `}
`

export const SaveButton = styled.button`
    ${({ theme }) => css`
        margin-top: 30px;
        align-self: end;
        font-size: ${theme.font.size.small};
        line-height: 25px;
        padding: 2px 35px;
        border-radius: 16px;
        font-weight: 600;
        border: 0;
        background-color: ${theme.colors.gray_700};
        color: ${theme.colors.shape};
        cursor: pointer;

        &:focus {
            outline-color: ${theme.colors.blue_100};
            outline-offset: 2px;
        }
    `}
`

export const Content = styled.div`
    width: 275px;
    display: flex;
    flex-direction: column;
    margin-left: 32px;
`
