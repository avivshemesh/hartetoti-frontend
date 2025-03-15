import React, { useState } from "react";
import Input from "../BaseFormComponents/Input";
import { Button, CircularProgress } from "@mui/material";
import api from "~/api";
import { Link } from "react-router";
import { Eye, EyeClosed } from "lucide-react";
import HartetotiButton from "../BaseFormComponents/HarteotiButton";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>,
  ) => {
    e.preventDefault();

    setIsLoading(true);
    await api.auth.login({
      email,
      password,
    });
  };

  const handlePasswordToggleButton = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      className="w-full max-w-md rounded-lg p-6 text-white"
      onSubmit={handleSubmit}
    >
      <Input
        className="mb-4 min-w-[320px]"
        label="Email"
        placeholder="Email"
        value={email}
        onChange={setEmail}
      />
      <Input
        className="mb-4 min-w-[320px]"
        label="Password"
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={setPassword}
        append={
          <button
            className="cursor-pointer"
            type="button"
            onClick={handlePasswordToggleButton}
          >
            {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
          </button>
        }
      />
      <HartetotiButton className="w-full" onClick={handleSubmit}>
        {isLoading ? <CircularProgress size={16} /> : "Login"}
      </HartetotiButton>
      <p className="mt-4 flex gap-2 justify-center">
        <span>Don't have an account?</span>
        <Link className="font-semibold hover:underline" to="/register">
          Register!
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
