import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { App } from 'components/App';
import { StyledEngineProvider } from '@mui/material/styles';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter  >
    <StyledEngineProvider injectFirst>
    <App />
    </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
// basename='Music-land'