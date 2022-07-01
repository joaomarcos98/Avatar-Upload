import { Container, Image } from "./styles"
import closeIcon from "../../assets/closeIcon.svg"

type CloseButtonProps = {
    onClose(): void
}

export const CloseButton = ({ onClose }: CloseButtonProps) => {
    return (
        <Container onClick={onClose}>
            <Image src={closeIcon} alt="Close crop" />
        </Container>
    )
}
