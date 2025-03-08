import React, { useState } from 'react';
import Input from '../BaseFormComponents/Input';
import { Button, CircularProgress } from '@mui/material';
import api from '~/api';
import { Link } from 'react-router';

const RegisterForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault();

    setIsLoading(true);
    await api.auth.register({
      email,
      password,
      confirmPassword
    })
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6 bg-white p-6 rounded-lg shadow-md w-full max-w-md'>
      <div>
        <Input
          className="min-w-[320px]"
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={setEmail}
        />
      </div>

      <Input
        className="min-w-[320px]"
        label="Password"
        placeholder="Enter password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={setPassword}
      />
      <Input
        className="min-w-[320px]"
        label="Confirm Password"
        placeholder="Confirm password"
        type={showConfirmPassword ? "text" : "password"}
        value={confirmPassword}
        onChange={setConfirmPassword}
      />

      <Button
        className="w-full h-10 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        variant="outlined"
        onClick={handleSubmit}
      >
        {isLoading ? <CircularProgress size={16} className="text-white" /> : "Register"}
      </Button>

      <Link className='font-semibold mt-4 block' to="/login">
        Already have an account? Login
      </Link>
    </form>

  );
};

export default RegisterForm;
