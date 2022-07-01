import { ChangeEvent, useState } from "react"
import { Bar, Container, Fill, Input } from "./styles"

type RangeEvent = ChangeEvent<HTMLInputElement>
type SliderProps = {
    onInput?(value: string): void
}

export const Slider = ({ onInput }: SliderProps) => {
    const [value, setValue] = useState("20")

    const onChange = (event: RangeEvent) => {
        const inputValue = event.target.value

        setValue(inputValue)
        !!onInput && onInput(inputValue)
    }

    return (
        <Container>
            <Bar>
                <Fill percentagem={value}></Fill>
            </Bar>
            <Input
                type="range"
                min="1"
                max="100"
                onChange={onChange}
                defaultValue={value}
            />
        </Container>
    )
}
