import React, { useState } from 'react';
import { ThemeProvider} from "@mui/material";
import { getAppTheme} from "./styles";
import {Home} from "./components";

function App() {

    const [mode, setMode] = useState('light');
    const theme = getAppTheme(mode);

    const toggleTheme = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeProvider theme={theme}>
            <Home toggleTheme={toggleTheme}/>
        </ThemeProvider>
    )
}

export default App;