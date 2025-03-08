import React, { useState } from 'react';
import Input from '../BaseFormComponents/Input';
import { Button, CircularProgress } from '@mui/material';
import api from '~/api';
import { Link } from 'react-router';

const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault();

    console.log(email, password);
    setIsLoading(true);
    await api.auth.login({
      email,
      password
    })
  };

  return (
    <form className='space-y-6 bg-white p-6 rounded-lg shadow-md w-full max-w-md' onSubmit={handleSubmit}>
      <div className='mb-4'>
        <Input
          className='mb-2 min-w-[320px]'
          label='Email'
          placeholder='Email'
          value={email}
          onChange={setEmail}
        />
        <Input
          className='mb-2 min-w-[320px]'
          label='Password'
          placeholder='Password'
          type='password'
          value={password}
          onChange={setPassword}
        />
      </div>
      <Button
        className='min-h-[42px] w-full'
        variant='outlined'
        onClick={handleSubmit}
      >
        {isLoading ? <CircularProgress size={16} /> : 'Login'}
      </Button>
      <Link className='font-semibold block mt-4' to="/register">
        Don't have an account? Register!
      </Link>
    </form>
  );
};

export default LoginForm;
