import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMail, AiFillLock } from 'react-icons/ai';
import styled from 'styled-components';

const Login = () => {
  return (
    <LoginForm>
      <p>
        Don't have an account yet? <Link to='/signup'>Sign up</Link>
      </p>
      <div className='loginBox'>
        <label>* Email </label>
        <div className='loginInput'>
          <AiOutlineMail />
          <input type='email' placeholder='e-mail' />
        </div>
        <label>* Password </label>
        <div className='loginInput'>
          <AiFillLock />
          <input type='password' placeholder='password' />
        </div>
        <button type='submit' className='loginButton'>
          Sign In
        </button>
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 100%;
  height: 100%;
  padding: 20px;

  border: 3px solid ${({ theme }) => theme.hyperMint};
  border-radius: 15px;

  p {
    text-align: center;
    color: #c0c0c0;
  }

  .loginBox {
    display: flex;
    flex-direction: column;

    .loginInput {
      display: flex;
      align-items: center;
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
