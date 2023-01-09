import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import { dFlex, flexBetweenCenter, displayOnDesktop  } from '../Themes/ComStyles';
import Logo from '../Components/Logo'
import LocationSearch from './LocationSearch';
import ProfileSetting from './ProfileSetting';
import MobileSearch from './MobileSearch';

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
                    minHeight: 90,
                    px: 4,
                }}
            >   
                <Box sx={ displayOnDesktop }><Logo /></Box>
                <Box sx={ displayOnDesktop }><LocationSearch /></Box>
                <Box sx={ displayOnDesktop }><ProfileSetting /></Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}><MobileSearch /></Box>
            </Box>
        </Container>

    </Box>
  );
};

export default Header
