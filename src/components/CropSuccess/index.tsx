import { FileRejection } from "react-dropzone"
import { CropImage } from "../CropImage"
import { Dropzone } from "../Dropzone"
import { Container } from "./styles"

type CropSuccessProps = {
    imageUrl: string
    zoom: string
    onAccept(files: File[]): void
    onReject(errors: FileRejection[]): void
}

export const CropSuccess = ({
    imageUrl,
    zoom,
    onAccept,
    onReject
}: CropSuccessProps) => {
    return (
        <Container>
            <CropImage imageUrl={imageUrl} zoom={zoom} />
            <Dropzone onAccept={onAccept} onReject={onReject} />
        </Container>
    )
}
