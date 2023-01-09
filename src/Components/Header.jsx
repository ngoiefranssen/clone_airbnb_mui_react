import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import { dFlex, flexBetweenCenter } from '../Themes/ComStyles';
import Logo from '../Components/Logo'
import LocationSearch from './LocationSearch';
import ProfileSetting from './ProfileSetting';

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
                <Logo />
                <LocationSearch />
                <ProfileSetting />
            </Box>
        </Container>

    </Box>
  );
};

export default Header
