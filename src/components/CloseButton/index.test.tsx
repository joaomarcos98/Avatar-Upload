import { fireEvent, screen } from "@testing-library/react"
import { CloseButton } from "."
import { renderWithTheme } from "../../utils/test/renderWithTheme"
import userEvent from "@testing-library/user-event"

const onCloseMock = jest.fn()

describe("Close button component", () => {
    it("should be render correctly ", () => {
        renderWithTheme(<CloseButton onClose={onCloseMock} />)

        expect(
            screen.getByRole("button", {
                name: /close crop/i
            })
        ).toBeInTheDocument()
        expect(
            screen.getByRole("img", {
                name: /close crop/i
            })
        ).toBeInTheDocument()
    })

    it("should dispatch onClose", () => {
        renderWithTheme(<CloseButton onClose={onCloseMock} />)

        fireEvent.click(
            screen.getByRole("button", {
                name: /close crop/i
            })
        )

        expect(onCloseMock).toHaveBeenCalled()
    })

    it("should be accessible with tab", () => {
        renderWithTheme(<CloseButton onClose={onCloseMock} />)

        expect(document.body).toHaveFocus()
        userEvent.tab()
        expect(
            screen.getByRole("button", {
                name: /close crop/i
            })
        ).toHaveFocus()
    })
})
