import React from 'react';
import { Link } from 'react-router-dom';
import EmailInput from '../../components/login_form/EmailInput';
import PasswordInput from '../../components/login_form/PasswordInput';
import Button from '../../components/login_form/button/Button';
import logo from '../../assets/images/logo1.png';
import space from '../../assets/images/space.jpg';
import { AiOutlineMail, AiFillLock } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { SiKakaotalk } from 'react-icons/si';
import styled from 'styled-components';

const Login = () => {
  return (
    <>
      <img src={space} alt='background-image' />
      <LoginPage>
        <LoginForm>
          <img src={logo} alt='logo' />
          <p>
            Don't have an account yet? <SignUp to='/signup'>Sign up</SignUp>
          </p>
          <div className='loginBox'>
            <EmailInput />
            <PasswordInput passwordLabel='Password' />
            <Button type='submit' text='Sign In' />
          </div>
          <p> ↯ - or connect with - ↯ </p>
          <div className='anotherLogin'>
            <Button text={<FcGoogle />} />
            <Button text={<SiKakaotalk />} />
          </div>
        </LoginForm>
      </LoginPage>
    </>
  );
};

const LoginPage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 600px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 100%;
  height: 100%;
  padding: 20px;

  border: 3px solid ${({ theme }) => theme.hyperMint};
  border-radius: 15px;
  color: #fff;

  p {
    text-align: center;
    color: ${({ theme }) => theme.hyperNeon};
  }

  .loginBox {
    display: flex;
    flex-direction: column;

    button {
      margin: 10px 0;
      padding: 5px;
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.hyperMint};
    }
  }
  .anotherLogin {
    display: flex;
    justify-content: center;

    button {
      height: 40px;
      margin: 0 10px;
      padding: 10px;

      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.hyperMint};
    }
  }
`;

const SignUp = styled(Link)`
  color: #fff;

  &:hover {
    color: ${({ theme }) => theme.hyperMint};
  }
`;

export default Login;
