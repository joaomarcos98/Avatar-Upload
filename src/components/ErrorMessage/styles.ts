import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 32px;
    position: relative;
`

export const Icon = styled.img`
    width: 20px;
    height: 20px;
    padding: 45px;
    background-color: #c3cbd5;
    border-radius: 50%;
    margin-right: 32px;
`

export const Content = styled.div`
    justify-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Title = styled.h4`
    font-size: 16px;
    line-height: 29px;
    font-weight: 400;
    color: #c64d32;
    margin: 2px 0;
`

export const Message = styled.span`
    font-size: 16px;
    line-height: 29px;
    font-weight: 400;
    color: #3d485f;
    text-decoration: underline;
    text-underline-offset: 2px;
`
