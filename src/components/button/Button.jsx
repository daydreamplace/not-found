import React from 'react';
import styled from 'styled-components';

const Button = ({ text, width, height, background, color, fontSize }) => {
  return (
    <Buttons width={width} height={height} background={background} color={color} fontSize={fontSize}>
      {text}
    </Buttons>
  );
};

const Buttons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  border: none;
  border-radius: 0.625rem;
  color: ${(props) => props.color};
  text-align: center;
  line-height: 36px;
  font-size: ${(props) => props.fontSize};

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export default Button;
