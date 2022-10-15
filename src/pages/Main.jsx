import React from 'react';
import Login from './login/Login';
import styled from 'styled-components';

const Main = () => {
  return (
    <MainPage>
      <h1>메인페이지</h1>
      <Login />
    </MainPage>
  );
};

const MainPage = styled.div``;

export default Main;
