import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

const EmailInput = () => {
  <>
    <label>* Email </label>
    <div className='loginInput'>
      <AiOutlineMail />
      <input type='email' placeholder='e-mail' />
    </div>
  </>;
};

export default EmailInput;
