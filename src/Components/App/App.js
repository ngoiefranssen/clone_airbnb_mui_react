import React from 'react';
import './App.css';
import { Box, CssBaseline } from '@mui/material';
import Header from '../Header';
import OptionsTab from '../OptionsTab';

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
      </Box>
    </React.Fragment>
  );
}

export default App;
