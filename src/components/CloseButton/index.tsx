/** @name Styles */
import { Container, Image } from "./styles"
/** @name Icons */
import closeIcon from "@assets/closeIcon.svg"
import { memo } from "react"

type CloseButtonProps = {
    onClose(): void
}

export const CloseButton = memo(
    ({ onClose }: CloseButtonProps) => {
        return (
            <Container onClick={onClose}>
                <Image src={closeIcon} alt="Close crop" />
            </Container>
        )
    },
    (prevProps, nextProps) => {
        return Object.is(nextProps.onClose, prevProps.onClose)
    }
)
