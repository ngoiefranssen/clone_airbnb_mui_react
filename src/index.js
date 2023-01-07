import ReactDOM from 'react-dom/client';
import App from './Components/App/App';
import AppThemeProvider from './Themes/AppThemeProvider'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppThemeProvider>
    <App />
  </AppThemeProvider>
);
