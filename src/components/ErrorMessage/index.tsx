import { CloseButton } from "../CloseButton"
import { Container, Content, Icon, Message, Title } from "./styles"
import infoIcon from "../../assets/infoIcon.svg"

type ErrorMessageProps = {
    onClose(): void
}

export const ErrorMessage = ({ onClose }: ErrorMessageProps) => {
    return (
        <Container className="error-message">
            <Icon src={infoIcon} />
            <CloseButton onClose={onClose} />
            <Content>
                <Title>Sorry, the upload failed.</Title>
                <Message>Try again</Message>
            </Content>
        </Container>
    )
}
