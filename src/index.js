import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './theme'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode='light'></ColorModeScript>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);

//  ColorModeScript makes the initial color of the website light mode