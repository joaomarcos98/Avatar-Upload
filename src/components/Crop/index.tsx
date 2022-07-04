import { Slider } from "../Slider"
import { Container, SaveButton, Title, Content } from "./styles"
import { CloseButton } from "../CloseButton"
import { CropImage } from "../CropImage"

type CropProps = {
    zoom: string
    imageUrl: string
    onSave(): void
    onClose(): void
    handleChangeZoom(value: string): void
}

export const Crop = ({
    onClose,
    handleChangeZoom,
    imageUrl,
    zoom,
    onSave
}: CropProps) => {
    return (
        <Container className="crop">
            <CropImage imageUrl={imageUrl} zoom={zoom} />
            <CloseButton onClose={onClose} />
            <Content>
                <Title>Crop</Title>
                <Slider onInput={handleChangeZoom} />
                <SaveButton onClick={onSave}>Save</SaveButton>
            </Content>
        </Container>
    )
}
