import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Router from 'Router';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
