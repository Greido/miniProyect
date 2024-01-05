import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#040404',
      paper: '#dcdada',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      secondary: '#ffffff',
      disabled: 'rgba(245,169,169,0.38)',
      hint: '#e2e0f5',
    },
  },
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>

  </React.StrictMode>,
)
