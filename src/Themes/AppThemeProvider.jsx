import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react'

const AppThemeProvider = () => {
    const theme = createTheme({});
    return (
        <ThemeProvider theme={theme}>
        
        </ThemeProvider>
    );
}

export default AppThemeProvider;
