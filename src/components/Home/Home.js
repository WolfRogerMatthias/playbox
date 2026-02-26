import React from 'react';
import {useTheme} from "@mui/material";
import {homeStyles} from "styles";

function Home() {
    const theme = useTheme();
    const styles = homeStyles(theme)
    return (
        <div style={styles.container}>
            <h1>
                Home
            </h1>
        </div>
    )
}

export default Home;
