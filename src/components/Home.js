import React from 'react';
import {useTheme} from "@mui/material";
import {homeStyles} from "../styles/homeStyles";

function Home({toggleTheme}) {
    const theme = useTheme();
    console.log(theme)
    const styles = homeStyles(theme)
    return (
        <div style={styles.container}>
            <button
                onClick={toggleTheme}
            >

            </button>
        </div>
    )
}

export default Home;
