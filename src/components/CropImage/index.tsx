import { Container, Image } from "./styles"

type CropImageProps = {
    zoom: string
    imageUrl: string
}

export const CropImage = ({ zoom, imageUrl }: CropImageProps) => {
    return (
        <Container>
            <Image zoom={zoom} src={imageUrl} alt="" />
        </Container>
    )
}
