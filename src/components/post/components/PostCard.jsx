import React from 'react';
import styled from 'styled-components';

const PostCard = () => {
  const cardlist = [
    {
      team: '서비스개발팀',
      team_eng: 'Service R&D Team',
      content: [
        'Back & Front-end',
        'APP development',
        'WEB Accessibility',
        'AR/VR Intergrated development',
        'Server Construction',
        'Infra Construction',
      ],
    },
    {
      team: 'XR 팀',
      team_eng: 'eXtended Reality',
      content: [
        'AR/VR Content Production',
        'VPS R&D',
        'Plug-in Development',
        'Deep Learning Development',
        'Vision Engine Development',
      ],
    },
    {
      team: 'XR 팀_VeX Part',
      team_eng: 'Visual eXperience',
      content: ['3D Modeling', 'Rendering', 'Unity & Unreal Contents', 'Effect Scene Work', 'Visual Art Work'],
    },
    {
      team: '서비스개발팀',
      team_eng: 'Service R&D Team',
      content: [
        'Back & Front-end',
        'APP development',
        'WEB Accessibility',
        'AR/VR Intergrated development',
        'Server Construction',
        'Infra Construction',
      ],
    },
    {
      team: 'XR 팀',
      team_eng: 'eXtended Reality',
      content: [
        'AR/VR Content Production',
        'VPS R&D',
        'Plug-in Development',
        'Deep Learning Development',
        'Vision Engine Development',
      ],
    },
    {
      team: 'XR 팀_VeX Part',
      team_eng: 'Visual eXperience',
      content: ['3D Modeling', 'Rendering', 'Unity & Unreal Contents', 'Effect Scene Work', 'Visual Art Work'],
    },
  ];

  return (
    <CardList>
      {cardlist.map((card) => {
        return (
          <Card key={card.team}>
            <p className='team'>{card.team}</p>
            <p className='team'>{card.team_eng}</p>
            {card.content.map((content) => {
              return <p key={content}>• {content}</p>;
            })}
          </Card>
        );
      })}
    </CardList>
  );
};

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0;
`;

const Card = styled.li`
  width: calc(90% / 3);
  margin: 20px calc(10% / 6);
  /* margin-bottom: 10px;
  width: 300px;
  margin: 0 20px;*/
  padding: 20px;

  /* background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right bottom, ${({ theme }) => theme.hyperMint}, ${({ theme }) => theme.hyperNeon});
  background-origin: border-box;
  background-clip: content-box, border-box;*/
  border: 1px solid ${({ theme }) => theme.hyperNeon};
  border-top-right-radius: 70px;

  /* border-radius: 50%;
  border: 1px solid transparent;
  background-image: linear-gradient(#8cd1c8, #8cd1c8), linear-gradient(#8acfc6, #6db8b6, #58a8ab, #4c9ea4, #489ba2);
  background-origin: border-box;
  background-clip: content-box, border-box; */

  list-style: none;

  p {
    background: transparent;
  }
  .team {
    font-size: 1.5rem; /* 24px */
    line-height: 2rem; /* 32px */
    color: ${({ theme }) => theme.hyperMint};
  }

  &:hover {
    background: linear-gradient(to bottom, ${({ theme }) => theme.hyperMint}, ${({ theme }) => theme.hyperNeon});
    color: #000;
  }
`;

export default PostCard;
