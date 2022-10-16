import React from 'react';
import PostCard from './components/PostCard';
import logo from '../../assets/images/logo1.png';
import styled from 'styled-components';

const Post = () => {
  return (
    <PostPage>
      <div className='content'>
        <h1 className='contentTitle'>ABOUT HyperCloud</h1>
        <p>
          하이퍼클러우드는 모두가 XR Contents를 보다 재미있고 쉽게 접하며 가상과 현실이 융합된 공간에서 경계감 없이
          매끄럽고 스마트한 삶이기를 바랍니다.
        </p>
        <div>
          <img src={logo} alt='image' />
        </div>
        <h4 className='contentTitle'>TEAM Members</h4>
        <p>하이퍼클라우드의 Team member를 소개합니다.</p>
        <PostCard />
        <h4 className='contentTitle'>History</h4>
      </div>
    </PostPage>
  );
};

const PostPage = styled.div`
  width: 100%;
  /* 임시 */
  padding-top: 100px;

  .content {
    margin: 0 auto;

    .contentTitle {
      font-size: 3rem; /* 48px */
      line-height: 1;
      background: linear-gradient(
        to right bottom,
        ${({ theme }) => theme.hyperMint},
        ${({ theme }) => theme.hyperNeon}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      font-size: 1.125rem; /* 18px */
      line-height: 1.75rem; /* 28px */
    }

    img {
      width: 600px;
    }
  }
`;

export default Post;
