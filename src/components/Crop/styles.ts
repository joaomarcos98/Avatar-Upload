import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    padding: 32px;
    position: relative;
    font-family: Inter;
    display: flex;
    align-items: center;
`

export const Title = styled.h2`
    font-size: 16px;
    line-height: 29px;
    color: #677489;
    font-weight: 400;
    margin: 2px 0;
`

export const SaveButton = styled.button`
    margin-top: 30px;
    align-self: end;
    font-size: 14;
    line-height: 25px;
    padding: 2px 35px;
    border-radius: 16px;
    font-weight: 600;
    border: 0;
    background-color: #3d485f;
    color: #fff;
    cursor: pointer;

    &:focus {
        outline-color: #3f80ff;
        outline-offset: 2px;
    }
`

export const Content = styled.div`
    width: 275px;
    display: flex;
    flex-direction: column;
    margin-left: 32px;
`
