/** @name Styles */
import { Container, SaveButton, Title, Content } from "./styles"
/** @name Components */
import { Slider } from "@components/Slider"
import { CropImage } from "@components/CropImage"
import { CloseButton } from "@components/CloseButton"

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
