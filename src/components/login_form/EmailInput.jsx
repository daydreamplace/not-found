import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import styled from 'styled-components';

const EmailInput = () => {
  return (
    <Input>
      <label>* Email </label>
      <div className='loginInput'>
        <AiOutlineMail />
        <input type='email' placeholder='e-mail' autoComplete='username' />
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

export default EmailInput;
