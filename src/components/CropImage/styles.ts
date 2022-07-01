import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 113px;
    height: 113px;
    border-radius: 72px;
    overflow: hidden;
    background-color: #fff;
    z-index: 34;
`

type ImageProps = {
    zoom: string
}

export const Image = styled.img<ImageProps>`
    width: 200px;
    height: 200px;
    transform: scale(calc(${({ zoom }) => zoom} / 10));
`
