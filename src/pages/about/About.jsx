import React from 'react';
import Post from '../../components/post/Post';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutPage>
      <Post />
    </AboutPage>
  );
};

const AboutPage = styled.div`
  min-width: 1440px;
`;

export default About;
