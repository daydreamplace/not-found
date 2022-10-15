import React from 'react';
import { AiFillLock } from 'react-icons/ai';

const PasswordInput = ({ passwordLabel }) => {
  <>
    <label>* {passwordLabel} </label>
    <div className='loginInput'>
      <AiFillLock />
      <input type='password' placeholder='password' />
    </div>
  </>;
};

export default EmailInput;
