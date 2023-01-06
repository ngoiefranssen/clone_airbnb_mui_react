import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react'

const theme = createTheme({});

const AppThemeProvider = (prop) => {
    return (
        <ThemeProvider theme={theme}>
            {prop.children}
        </ThemeProvider>
    );
}

export default AppThemeProvider;
