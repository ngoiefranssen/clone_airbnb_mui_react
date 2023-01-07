import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'

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
                    ...flex
                }}>

            </Box>
        </Container>

    </Box>
  );
};

export default Header
