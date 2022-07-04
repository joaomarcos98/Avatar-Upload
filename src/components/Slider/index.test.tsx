/** @name Dependencies */
import { fireEvent, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
/** @name Components */
import { Slider } from "."
/** @name Utils */
import { renderWithTheme } from "@utils/test/renderWithTheme"

const onInputStub = jest.fn()

describe("Slider component", () => {
    it("should be renders correctly", () => {
        const { container } = renderWithTheme(<Slider />)

        expect(screen.getByRole("slider")).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })

    it("should be render with default value", () => {
        renderWithTheme(<Slider />)

        expect(screen.getByRole("slider")).toHaveValue("20")
    })

    it("should change value", () => {
        renderWithTheme(<Slider onInput={onInputStub} />)

        const slider = screen.getByRole("slider")

        expect(slider).toHaveValue("20")
        fireEvent.change(slider, { target: { value: "30" } })
        expect(slider).toHaveValue("30")
        expect(onInputStub).toHaveBeenCalledWith("30")
    })

    it("should be accessible with tab", () => {
        renderWithTheme(<Slider />)

        expect(document.body).toHaveFocus()
        userEvent.tab()
        expect(screen.getByRole("slider")).toHaveFocus()
    })
})
