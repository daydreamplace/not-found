import React from 'react';
import space from '../assets/images/space.jpg';
import styled from 'styled-components';

const Main = () => {
  return (
    <>
      <MainPage>
        <img src={space} alt='background-image' />
      </MainPage>
    </>
  );
};

const MainPage = styled.div``;

export default Main;
