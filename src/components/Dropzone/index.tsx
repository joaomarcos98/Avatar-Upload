import { useCallback } from "react"
import { useDropzone, FileRejection } from "react-dropzone"
import { Container, Message, Image, Title } from "./styles"
import ImageIcon from "../../assets/imageIcon.svg"

type DropzoneProps = {
    onAccept(files: File[]): void
    onReject(errors: FileRejection[]): void
}

export function Dropzone({ onAccept, onReject }: DropzoneProps) {
    const onDrop = useCallback(
        (acceptedFiles: File[], rejection: FileRejection[]) => {
            !!acceptedFiles && onAccept(acceptedFiles)
            !!rejection.length && onReject(rejection)
        },
        []
    )

    const { getRootProps, getInputProps } =
        useDropzone({
            onDrop,
            accept: ["image/*"],
            multiple: false
        })

    return (
        <Container
            {...getRootProps()}
        >
            <input {...getInputProps()} />
            <Title>
                <Image src={ImageIcon} alt="lala" /> Organization Logo
            </Title>
            <Message>Drop the image here or click to browse.</Message>
        </Container>
    )
}
