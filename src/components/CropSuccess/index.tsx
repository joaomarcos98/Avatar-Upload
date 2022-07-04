/** @name Styles*/
import { Container } from "./styles"
/** @name Dependecies*/
import { FileRejection } from "react-dropzone"
/** @name Components*/
import { Dropzone } from "@components/Dropzone"
import { CropImage } from "@components/CropImage"

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
        <Container className="crop-success">
            <CropImage imageUrl={imageUrl} zoom={zoom} />
            <Dropzone onAccept={onAccept} onReject={onReject} />
        </Container>
    )
}
