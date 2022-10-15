import React from 'react';
import EmailInput from '../../components/login_form/EmailInput';
import PasswordInput from '../../components/login_form/PasswordInput';
import Button from '../../components/login_form/button/Button';
import logo from '../../assets/images/logo1.png';
import space from '../../assets/images/space.jpg';
import styled from 'styled-components';

const SignUp = () => {
  return (
    <>
      <img src={space} alt='background-image' />
      <Form>
        <SignUpForm>
          <img src={logo} alt='logo' />
          <p>Create new account 🚀 </p>
          <div className='loginBox'>
            <EmailInput />
            <PasswordInput passwordLabel='Password' />
            <PasswordInput passwordLabel='Confirm password' />
            <Button type='submit' text='Sign Up' />
          </div>
        </SignUpForm>
      </Form>
    </>
  );
};

const Form = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 600px;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 100%;
  height: 100%;
  padding: 20px 30px;

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
      margin: 30px 0;
      padding: 5px;
      background-color: ${({ theme }) => theme.hyperMint};
      border: 1px solid ${({ theme }) => theme.hyperMint};

      &:hover {
        color: #fff;
      }
    }
  }
`;

export default SignUp;
