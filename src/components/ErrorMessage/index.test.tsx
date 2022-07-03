import { screen } from "@testing-library/react"
import { ErrorMessage } from "."
import { renderWithTheme } from "../../utils/test/renderWithTheme"

const onCloseMock = jest.fn()

describe("Error Message component", () => {
    it("should be renders correctly", () => {
        const { container } = renderWithTheme(
            <ErrorMessage onClose={onCloseMock} />
        )

        expect(
            screen.getByRole("heading", { name: /sorry, the upload failed./i })
        ).toBeInTheDocument()

        expect(screen.getByText(/try again/i)).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })
})
