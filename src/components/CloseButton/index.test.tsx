import { fireEvent, screen } from "@testing-library/react"
import { CloseButton } from "."
import { renderWithTheme } from "../../utils/test/renderWithTheme"

const onCloseMock = jest.fn()

describe("Close button component", () => {
    it("should be render correctly ", () => {
        renderWithTheme(<CloseButton onClose={onCloseMock} />)

        expect(screen.getByRole("button")).toBeInTheDocument()
        expect(screen.getByRole("img")).toBeInTheDocument()
    })

    it("should dispatch onClose", () => {
        renderWithTheme(<CloseButton onClose={onCloseMock} />)

        fireEvent.click(screen.getByRole("button"))

        expect(onCloseMock).toHaveBeenCalled()
    })
})
