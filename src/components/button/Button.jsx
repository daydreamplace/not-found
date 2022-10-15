import React from 'react';
import styled from 'styled-components';

const Button = ({ text, width, height, background, color, fontSize, hoverColor, hoverBackground }) => {
  return (
    <Buttons
      width={width}
      height={height}
      background={background}
      color={color}
      fontSize={fontSize}
      hoverColor={hoverColor}
      hoverBackground={hoverBackground}>
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
  border: ${(props) => props.border};
  border-radius: 0.625rem;
  color: ${(props) => props.color};
  text-align: center;
  line-height: 36px;
  font-size: ${(props) => props.fontSize};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.hoverBackground};
    color: ${(props) => props.hoverColor};
  }
`;

export default Button;
