import { useState } from "react"
import { Crop } from "../Crop"
import { Dropzone } from "../Dropzone"
import { Container } from "./styles"
import { ErrorMessage } from "../ErrorMessage"
import { CropSuccess } from "../CropSuccess"

type FileProps = {
    file: File
    zoom: string
    saved: boolean
} | null

export const AvatarUpload = () => {
    const [error, setError] = useState(false)
    const [imageUrl, setImageUrl] = useState("")
    const [file, setFile] = useState<FileProps>(null)
    const [zoom, setZoom] = useState("20")

    const handleChangeZoom = (value: string) => {
        setZoom(value)
    }

    const onUpload = (file: File[]) => {
        const newFile = {
            file: file[0],
            zoom,
            saved: false
        }
        const url = URL.createObjectURL(file[0])
        setImageUrl(url)
        setFile(newFile)
    }

    const onReject = () => {
        setError((state) => !state)
    }

    const onSave = () => {
        if (file) {
            const newFile: FileProps = { ...file }
            newFile.saved = !newFile.saved
            setFile(newFile)
        }
    }

    const reset = () => {
        setError(false)
        setImageUrl("")
    }

    if (file?.saved) {
        return (
            <Container dashed>
                <CropSuccess
                    onAccept={onUpload}
                    onReject={onReject}
                    zoom={zoom}
                    imageUrl={imageUrl}
                />
            </Container>
        )
    }

    return (
        <Container>
            {!imageUrl && (
                <Container dashed>
                    <Dropzone onAccept={onUpload} onReject={onReject} />
                </Container>
            )}
            {!!error && <ErrorMessage onClose={reset} />}
            {imageUrl && !file?.saved && (
                <Crop
                    onSave={onSave}
                    zoom={zoom}
                    imageUrl={imageUrl}
                    onClose={reset}
                    handleChangeZoom={handleChangeZoom}
                />
            )}
        </Container>
    )
}
