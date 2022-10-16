import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './pages/Main';
import About from './pages/about/About';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { ThemeProvider } from 'styled-components';
import * as Theme from './styles/Theme';
import GlobalStyle from './GlobalStyle';

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/xr-business' element={<About />} />
            <Route path='/news' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
