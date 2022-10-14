import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import { ThemeProvider } from 'styled-components';
import * as Theme from './styles/Theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
