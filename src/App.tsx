import { ThemeProvider } from "styled-components"
import { AvatarUpload } from "@components/AvatarUpload"
import GlobalStyle from "./styles/globalStyle"
import { theme } from "./styles/theme"

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AvatarUpload />
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App
