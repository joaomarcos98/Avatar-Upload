/** @name Styles */
import { Container } from "./styles"
/** @name Dependencies */
import { useCallback, useState } from "react"
/** @name Components */
import { Crop } from "@components/Crop"
import { Dropzone } from "@components/Dropzone"
import { CropSuccess } from "@components/CropSuccess"
import { ErrorMessage } from "@components/ErrorMessage"

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

    const handleChangeZoom = useCallback((value: string) => {
        setZoom(value)
    }, [])

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

    const onSave = useCallback(() => {
        if (file) {
            const newFile: FileProps = { ...file }
            newFile.saved = !newFile.saved
            setFile(newFile)

            console.log("[API] ~ Sending File:")
            console.log(file)
        }
    }, [file])

    const reset = useCallback(() => {
        setError(false)
        setImageUrl("")
    }, [])

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
            {!imageUrl && !error && (
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
