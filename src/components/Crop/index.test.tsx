import { screen } from "@testing-library/react"
import { Crop } from "."
import { renderWithTheme } from "../../utils/test/renderWithTheme"

const onSaveMock = jest.fn()
const onCloseMock = jest.fn()
const handleChangeMock = jest.fn()

describe("Crop component", () => {
    it("should be renders all elements", () => {
        renderWithTheme(
            <Crop
                zoom="20"
                imageUrl="any_image"
                onSave={onSaveMock}
                onClose={onCloseMock}
                handleChangeZoom={handleChangeMock}
            />
        )

        expect(screen.getByRole("img")).toBeInTheDocument()
        expect(screen.getByRole("slider")).toBeInTheDocument()
        expect(
            screen.getByRole("button", { name: /close crop/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole("heading", {
                name: /crop/i
            })
        ).toBeInTheDocument()
        expect(
            screen.getByRole("button", {
                name: /save/i
            })
        ).toBeInTheDocument()
    })
})
