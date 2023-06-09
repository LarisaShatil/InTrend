import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import {theme} from './styles/theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter basename='/InTrend'>
        <App/>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>

);
