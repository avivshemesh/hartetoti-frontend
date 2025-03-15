import React, { useState } from "react";
import Input from "../BaseFormComponents/Input";
import { CircularProgress } from "@mui/material";
import api from "~/api";
import { Link } from "react-router";
import HartetotiButton from "../BaseFormComponents/HarteotiButton";
import { Eye, EyeClosed } from "lucide-react";

const RegisterForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>,
  ) => {
    e.preventDefault();

    setIsLoading(true);
    await api.auth.register({
      email,
      password,
      confirmPassword,
    });
  };

  const handlePasswordToggleButton = () => {
    setShowPassword(!showPassword)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md p-6 text-white">
      <Input
        className="mb-4 min-w-[320px]"
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={setEmail}
      />
      <Input
        className="mb-4 min-w-[320px]"
        label="Password"
        placeholder="Enter password"
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
      <Input
        className="mb-4 min-w-[320px]"
        label="Confirm Password"
        placeholder="Confirm password"
        type={showPassword ? "text" : "password"}
        value={confirmPassword}
        onChange={setConfirmPassword}
      />

      <HartetotiButton
        className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
        onClick={handleSubmit}
      >
        {isLoading ? <CircularProgress size={16} color="white" /> : "Register"}
      </HartetotiButton>

      <p className="mt-4 flex flex-row gap-2 text-white justify-center">
        <span>Already have an account?</span>
        <Link className="font-semibold hover:underline" to="/login">
          Login!
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
