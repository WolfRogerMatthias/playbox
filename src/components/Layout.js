import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from './Bars';
import {Box} from "@mui/material";
import {layoutStyles} from "styles";
import  { useTheme} from "@mui/material";

function Layout({ toggleTheme }) {
    const theme = useTheme();
    const styles = layoutStyles(theme);
    return (
        <Box style={styles.container}>
            <TopBar toggleTheme={toggleTheme} />
            <main>
                <Outlet />
            </main>
        </Box>
    )
}

export default Layout;