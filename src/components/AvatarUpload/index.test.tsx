/** @name Dependencies*/
import { fireEvent, screen, waitFor } from "@testing-library/react"
/** @name Component*/
import { AvatarUpload } from "."
/** @name Utils*/
import { renderWithTheme } from "../../utils/test/renderWithTheme"
/** @name Mocks*/
import { fileMock, rejectFileMock } from "../Dropzone/index.test"

describe("Avatar upload component", () => {
    it("should be renders correctly", () => {
        const { container } = renderWithTheme(<AvatarUpload />)

        expect(container.querySelector(".dropzone")).toBeInTheDocument()
        expect(
            container.querySelector(".error-message")
        ).not.toBeInTheDocument()
        expect(container.querySelector(".crop")).not.toBeInTheDocument()
        expect(container.querySelector(".crop-success")).not.toBeInTheDocument()
    })

    it("should be renders correctly when all pass is correct", async () => {
        global.URL.createObjectURL = jest.fn(
            () => "https://avatars.githubusercontent.com/u/72817686?v=4"
        )
        const { container } = renderWithTheme(<AvatarUpload />)

        const dropzone = container.querySelector("#dropzone")

        await waitFor(() =>
            fireEvent.change(dropzone!, { target: { files: [fileMock] } })
        )

        await waitFor(() => {
            expect(container.querySelector(".crop")).toBeInTheDocument()
            expect(container.querySelector(".dropzone")).not.toBeInTheDocument()
            expect(
                container.querySelector(".error-message")
            ).not.toBeInTheDocument()
            expect(
                container.querySelector(".crop-success")
            ).not.toBeInTheDocument()
        })

        fireEvent.click(screen.getByText(/save/i))

        await waitFor(() => {
            expect(container.querySelector(".crop")).not.toBeInTheDocument()
            expect(container.querySelector(".dropzone")).toBeInTheDocument()
            expect(
                container.querySelector(".error-message")
            ).not.toBeInTheDocument()
            expect(container.querySelector(".crop-success")).toBeInTheDocument()
        })
    })

    it("should be renders correctly Error message when file passed is invalid", async () => {
        const { container } = renderWithTheme(<AvatarUpload />)

        const dropzone = container.querySelector("#dropzone")

        await waitFor(() =>
            fireEvent.change(dropzone!, { target: { files: [rejectFileMock] } })
        )

        await waitFor(() => {
            expect(container.querySelector(".crop")).not.toBeInTheDocument()
            expect(container.querySelector(".dropzone")).not.toBeInTheDocument()
            expect(
                container.querySelector(".error-message")
            ).toBeInTheDocument()
            expect(
                container.querySelector(".crop-success")
            ).not.toBeInTheDocument()
        })
    })

    it("should be renders correctly Dropzone when user click on close crop", async () => {
        const { container } = renderWithTheme(<AvatarUpload />)

        const dropzone = container.querySelector("#dropzone")

        await waitFor(() =>
            fireEvent.change(dropzone!, { target: { files: [fileMock] } })
        )

        await waitFor(() => {
            expect(container.querySelector(".crop")).toBeInTheDocument()
            expect(container.querySelector(".dropzone")).not.toBeInTheDocument()
            expect(
                container.querySelector(".error-message")
            ).not.toBeInTheDocument()
            expect(
                container.querySelector(".crop-success")
            ).not.toBeInTheDocument()
        })

        fireEvent.click(
            screen.getByRole("button", {
                name: /close crop/i
            })
        )

        await waitFor(() => {
            expect(container.querySelector(".crop")).not.toBeInTheDocument()
            expect(container.querySelector(".dropzone")).toBeInTheDocument()
            expect(
                container.querySelector(".error-message")
            ).not.toBeInTheDocument()
            expect(
                container.querySelector(".crop-success")
            ).not.toBeInTheDocument()
        })
    })
})
