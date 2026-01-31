import { createTheme } from '@mui/material/styles';

export const getAppTheme = (mode) => {
    return createTheme({
        palette: {
            mode,
            background: {
                default: mode === 'light' ? '#ffffff' : '#000000',
            }
        }
    })
}