import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react'

const theme = createTheme({
    typography:{
        allVariants:{
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontSize: 15
        },
    },
    palette:{
        primary:{
            
        }
    }
});

const AppThemeProvider = (prop) => {
    return (
        <ThemeProvider theme={theme}>
            {prop.children}
        </ThemeProvider>
    );
}

export default AppThemeProvider;
