import React from 'react';
import Post from '../../components/post/post';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutPage>
      about page
      <Post />
    </AboutPage>
  );
};

const AboutPage = styled.div``;

export default About;
