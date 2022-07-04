/** @name Dependencies*/
import { fireEvent, screen, waitFor } from "@testing-library/react"
/** @name Components*/
import { Dropzone } from "."
/** @name Utils*/
import { renderWithTheme } from "../../utils/test/renderWithTheme"

const onAcceptMock = jest.fn()
const onRejectMock = jest.fn()
export const fileMock = new File(["mock"], "image/png", { type: "image/png" })
export const rejectFileMock = new File(["mock"], "mock.text", {
    type: "text/plain"
})

describe("Dropzone component", () => {
    it("should be renders correctly", () => {
        renderWithTheme(
            <Dropzone onAccept={onAcceptMock} onReject={onRejectMock} />
        )

        expect(
            screen.getByRole("heading", {
                name: /image icon organization logo/i
            })
        ).toBeInTheDocument()
        expect(
            screen.getByText(/drop the image here or click to browse\./i)
        ).toBeInTheDocument()
    })

    it("should dispatch onAccept when image on upload", async () => {
        const { container } = renderWithTheme(
            <Dropzone onAccept={onAcceptMock} onReject={onRejectMock} />
        )
        const dropzone = container.querySelector("#dropzone")

        await waitFor(() =>
            fireEvent.change(dropzone!, { target: { files: [fileMock] } })
        )
        expect(onAcceptMock).toHaveBeenCalled()
        expect(onRejectMock).not.toHaveBeenCalled()
    })

    it("should dispatch onReject when any file on upload", async () => {
        onAcceptMock.mockClear()

        const { container } = renderWithTheme(
            <Dropzone onAccept={onAcceptMock} onReject={onRejectMock} />
        )
        const dropzone = container.querySelector("#dropzone")

        await waitFor(() =>
            fireEvent.change(dropzone!, { target: { files: [rejectFileMock] } })
        )

        expect(onRejectMock).toHaveBeenCalled()
        expect(onAcceptMock).not.toHaveBeenCalled()
    })
})
