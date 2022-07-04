/** @name Dependencies*/
import { screen } from "@testing-library/react"
/** @name Component*/
import { Crop } from "."
/** @name Utils*/
import { renderWithTheme } from "../../utils/test/renderWithTheme"

describe("Crop component", () => {
    it("should be renders all elements", () => {
        renderWithTheme(
            <Crop
                zoom="20"
                imageUrl="any_image"
                onSave={jest.fn()}
                onClose={jest.fn()}
                handleChangeZoom={jest.fn()}
            />
        )

        expect(
            screen.getByRole("img", {
                name: /avatar image/i
            })
        ).toBeInTheDocument()
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
