/** @name Dependencies*/
import { screen } from "@testing-library/react"
/** @name Components*/
import { CropImage } from "."
/** @name Utils*/
import { renderWithTheme } from "../../utils/test/renderWithTheme"

describe("Crop Image component", () => {
    it("should be renders correctly", () => {
        const { container } = renderWithTheme(
            <CropImage imageUrl="any-img" zoom="20" />
        )

        expect(screen.getByRole("img")).toHaveAttribute("src", "any-img")
        expect(container.firstChild).toMatchSnapshot()
    })
})
