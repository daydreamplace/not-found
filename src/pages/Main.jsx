import React from 'react';
import space from '../assets/images/space.jpg';
import Login from './login/Login';
import styled from 'styled-components';

const Main = () => {
  return (
    <MainPage>
      <img src={space} alt='background-image' />
      <div className='login'>
        <Login />
      </div>
    </MainPage>
  );
};

const MainPage = styled.div`
  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 600px;
  }
`;

export default Main;
