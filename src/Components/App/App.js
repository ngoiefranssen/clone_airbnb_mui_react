import React from 'react';
import './App.css';
import { Box, Container, CssBaseline } from '@mui/material';
import Header from '../Header';
import OptionsTab from '../OptionsTab';
import LocationCards from '../LocationCards';
import Footer from '../Footer/Footer';
import FooterMenu from '../Footer/FooterMenu';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}>
        <Box>
          <Header />
          <OptionsTab />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            height: 100,
            overflow: 'scroll',
          }}
        >
          <Container maxWidth='xl' sx={{ mb: 3 }}>
            <LocationCards />
          </Container>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <FooterMenu />
        </Box>
        <Box >
          <Footer />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
