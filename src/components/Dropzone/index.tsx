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

    const renderDragMessage = (
        isDragActive: boolean,
        isDragReject: boolean
    ) => {
        if (!isDragActive) {
            return (
                <>
                    <Title>
                        <Image src={ImageIcon} alt="lala" /> Organization Logo
                    </Title>
                    <Message type="default">
                        Drop the image here or click to browse.
                    </Message>
                </>
            )
        }
        if (isDragReject) {
            return <Message type="error"> Arquivo não suportado</Message>
        }
        return <Message type="success"> Solte os arquivos</Message>
    }

    const { getRootProps, getInputProps, isDragActive, isDragReject } =
        useDropzone({
            onDrop,
            accept: ["image/*"],
            multiple: false
        })

    return (
        <Container
            isDragActive={isDragActive}
            isDragReject={isDragReject}
            {...getRootProps()}
        >
            <input {...getInputProps()} />
            {renderDragMessage(isDragActive, isDragReject)}
        </Container>
    )
}
