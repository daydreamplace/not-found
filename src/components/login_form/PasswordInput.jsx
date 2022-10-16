import React from 'react';
import { AiFillLock } from 'react-icons/ai';
import styled from 'styled-components';

const PasswordInput = ({ passwordLabel }) => {
  return (
    <Input>
      <label>* {passwordLabel} </label>
      <div className='loginInput'>
        <AiFillLock />
        <input type='password' placeholder='password' autoComplete='current-password' />
      </div>
    </Input>
  );
};

const Input = styled.div`
  .loginInput {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;

    border: 1px solid ${({ theme }) => theme.hyperMint};
    border-radius: 0.625rem;

    &:hover {
      border: 2px solid ${({ theme }) => theme.hyperMint};
    }

    input {
      width: 95%;
      margin-left: 5px;

      background: transparent;
      border: none;
      outline: none;
    }
  }
`;

export default PasswordInput;
