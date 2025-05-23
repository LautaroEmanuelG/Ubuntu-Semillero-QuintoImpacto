import { Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import Header from './views/Header';
import { SnackbarProvider } from 'notistack';
import { CssBaseline } from '@mui/material';
import Chatbot from './components/chatbot/ChatBot';

export default function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={2000}
        hideOnMouseLeave={true}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <CssBaseline />
        <Header />
        <main>
          <Outlet />
        </main>
        {location.pathname.includes('/Admin') 
        || location.pathname.includes('/Inversor') 
        || location.pathname.includes('/login')
        ? null : <Chatbot />}
      </SnackbarProvider>
    </ThemeProvider>
  );
}
