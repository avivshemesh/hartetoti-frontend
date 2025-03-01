import React, { useState } from 'react';
import Input from '../BaseFormComponents/Input';
import { Button, CircularProgress } from '@mui/material';
import api from '~/api';

const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault();

    console.log(email, username);
    setIsLoading(true);
    await api.auth.login({
        username,
        email
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-4'>
        <Input
          className='mb-2 min-w-[320px]'
          label='Username'
          placeholder='Username'
          value={username}
          onChange={setUsername}
        />
        <Input
          className='mb-2 min-w-[320px]'
          label='Email'
          placeholder='Email'
          value={email}
          onChange={setEmail}
        />
      </div>
      <Button
        className='min-h-[42px] w-full'
        variant='outlined'
        onClick={handleSubmit}
      >
        {isLoading ? <CircularProgress size={16} /> : 'Confirm'}
      </Button>
    </form>
  );
};

export default LoginForm;
