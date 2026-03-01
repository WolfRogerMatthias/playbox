import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getAppTheme } from './styles';
import { Layout } from './components';
import { APP_ROUTES } from './components/routes';

function App() {

  const [mode, setMode] = useState('light');
  const theme = getAppTheme(mode);

  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout toggleTheme={toggleTheme}/>}>
            {APP_ROUTES.map(( route ) => (
              <Route
                key={route.path}
                index={route.index}
                path={route.index ? undefined : route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App;