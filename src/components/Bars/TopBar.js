import React from 'react';
import {useTheme} from "@mui/material";
import {topbarStyles} from "styles"

const TopBar = ({toggleTheme}) => {
    const theme = useTheme();
    const styles = topbarStyles(theme);
    return (
        <div style={styles.bar}>
            <h1>Hello</h1>
            <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    )
};

export default TopBar;