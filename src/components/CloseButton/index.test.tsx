import { screen } from "@testing-library/react"
import { CloseButton } from "."
import { renderWithTheme } from "../../utils/test/renderWithTheme"

const onCloseMock = jest.fn()

describe("Close button component", () => {
    it("should be render correctly ", () => {
        renderWithTheme(<CloseButton onClose={onCloseMock} />)

        expect(screen.getByRole("button")).toBeInTheDocument()
    })
})
