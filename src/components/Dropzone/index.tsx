/** @name Styles */
import { Container, Message, Image, Title } from "./styles"
/** @name Icons */
import ImageIcon from "@assets/imageIcon.svg"
/** @name Dependencies */
import { useCallback } from "react"
import { useDropzone, FileRejection } from "react-dropzone"

type DropzoneProps = {
    onAccept(files: File[]): void
    onReject(errors: FileRejection[]): void
}

export function Dropzone({ onAccept, onReject }: DropzoneProps) {
    const onDrop = useCallback(
        (acceptedFiles: File[], rejection: FileRejection[]) => {
            !!acceptedFiles.length && onAccept(acceptedFiles)
            !!rejection.length && onReject(rejection)
        },
        []
    )

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: ["image/*"],
        multiple: false
    })

    return (
        <Container className="dropzone" {...getRootProps()}>
            <input id="dropzone" {...getInputProps()} />
            <Title>
                <Image src={ImageIcon} alt="Image icon" /> Organization Logo
            </Title>
            <Message>Drop the image here or click to browse.</Message>
        </Container>
    )
}
