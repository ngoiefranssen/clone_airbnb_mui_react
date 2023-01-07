import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import { dFlex, flexBetweenCenter } from '../Themes/ComStyles';
import Logo from '../Components/Logo'

const Header = () => {
  return (
    <Box
        sx={{ 
            ...dFlex,
            minHeight: 70,
            borderBottom: '1px solid #ddd',
         }}
    >
        <Container maxWidth='xl'>
            <Box
                sx={{
                    ...flexBetweenCenter,
                    minHeight: 70,
                    px: 4,
                }}
            >
                <Logo />
            </Box>
        </Container>

    </Box>
  );
};

export default Header
