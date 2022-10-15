import React from 'react';
import { AiOutlineMail, AiFillLock } from 'react-icons/ai';
import styled from 'styled-components';

const Login = () => {
  return (
    <LoginForm>
      <p>
        Don't have an account yet? <span>Sign up</span>
      </p>
      <div className='loginBox'>
        <label>* Email </label>
        <div className='loginInput'>
          <AiOutlineMail />
          <input type='email' placeholder='이메일' />
        </div>
        <label>* Password </label>
        <div className='loginInput'>
          <AiFillLock />
          <input type='password' placeholder='비밀번호' />
        </div>
        <button className='loginButton'>Sign In</button>
      </div>
      <p> or connect with </p>
      <div className='anotherLogin'>
        <button>Google</button>
        <button>Kakao Talk</button>
      </div>
    </LoginForm>
  );
};

const LoginForm = styled.form`
  width: 100%;
  margin: 0 auto;
  padding: 20px;

  border: 3px solid ${({ theme }) => theme.hyperMint};
  border-radius: 4px;

  p {
    text-align: center;
  }

  .loginBox {
    display: flex;
    flex-direction: column;

    .loginInput {
      margin-bottom: 10px;
      padding: 10px;
      border: 1px solid black;
      border-radius: 0.625rem;

      input {
        width: 95%;
        border: none;
        outline: none;
      }
    }

    .loginButton {
      margin: 10px 0;
      padding: 10px;

      border: none;
      border-radius: 0.625rem;
    }
  }
  .anotherLogin {
    display: flex;
    justify-content: center;

    button {
      margin: 0 10px;
      padding: 10px;
      background-color: ${({ theme }) => theme.hyperMint};
      border: none;
      border-radius: 4px;
    }
  }
`;

export default Login;
