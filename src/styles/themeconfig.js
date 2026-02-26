import { createTheme } from '@mui/material/styles';

export const getAppTheme = (mode) => {
    return createTheme({
        palette: {
            mode,
            background: {
                default: mode === 'light' ? '#ffffff' : '#000000',
                topBar: mode === 'light' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'linear-gradient(135deg, #4c5eca 0%, #5b3584 100%)'
            }
        }
    })
}