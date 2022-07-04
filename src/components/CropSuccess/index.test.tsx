import { CropSuccess } from "."
import { renderWithTheme } from "../../utils/test/renderWithTheme"

describe("Crop success component", () => {
    it("should be renders all elements correctly", () => {
        const { container } = renderWithTheme(
            <CropSuccess
                onAccept={jest.fn()}
                onReject={jest.fn()}
                zoom="20"
                imageUrl="any-image"
            />
        )
        expect(container.querySelector(".dropzone")).toBeInTheDocument()
        expect(container.querySelector(".crop-image")).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })
})
