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
            <p>{card.team}</p>
            <p>{card.team_eng}</p>
            {card.content.map((content) => {
              return <li key={content}>{content}</li>;
            })}
          </Card>
        );
      })}
    </CardList>
  );
};

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Card = styled.ul`
  width: 300px;
  margin: 0 20px;
  padding: 20px;
  border: 1px solid yellowgreen;
  border-top-right-radius: 70px;

  p {
    color: ${({ theme }) => theme.hyperMint};
  }
`;

export default PostCard;
