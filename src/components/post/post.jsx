import React from 'react';
import styled from 'styled-components';

const Post = () => {
  return (
    <PostPage>
      <h1>
        ABOUT
        <br />
        HyperCloud
      </h1>
    </PostPage>
  );
};

const PostPage = styled.div`
  h1 {
    /* font-family */
  }
`;

export default Post;
