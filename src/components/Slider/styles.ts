import styled from "styled-components"

export const Container = styled.div`
    position: relative;
`

export const Input = styled.input`
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
        background-color: #3f80ff;
        border-radius: 50%;
    }

    &:focus {
        outline-color: #3f80ff;
        outline-offset: 2px;
    }
`

export const Bar = styled.span`
    position: absolute;
    z-index: 0;
    top: 13px;
    width: 100%;
    height: 2px;
    background-color: #b9d1ff;
    border-radius: 2px;
`

type FillProps = {
    percentagem: string
}
export const Fill = styled.span<FillProps>`
    display: block;
    width: ${({ percentagem }) => `${percentagem}%`};
    height: 100%;
    background-color: #3f80ff;
    border-radius: 2px;
`
