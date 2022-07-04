import { Container, Image } from "./styles"

type CropImageProps = {
    zoom: string
    imageUrl: string
}

export const CropImage = ({ zoom, imageUrl }: CropImageProps) => {
    return (
        <Container className="crop-image">
            <Image zoom={zoom} src={imageUrl} alt="Avatar image" />
        </Container>
    )
}
