import React, { useState } from "react";
import Input from "../BaseFormComponents/Input";
import { CircularProgress } from "@mui/material";
import api from "~/api";
import { Link } from "react-router";
import HartetotiButton from "../BaseFormComponents/HarteotiButton";
import { Eye, EyeClosed } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    email: z.string().email("Invalid email").min(5, "Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const RegisterForm = () => {
  const [serverError, setServerError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: { email: string; password: string, confirmPassword: string }) => {
    setServerError(null);
    setIsLoading(true);

    try {
      await api.auth.register(data);

      const profile = await api.auth.profile();
      console.log(profile);
    } catch (e: any) {
      console.error(e);
      setServerError(e.response?.data?.message || "Error registering new account");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordToggleButton = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md p-6 text-white">
      <Input
        className="mb-4 min-w-[320px]"
        label="Email"
        placeholder="Enter your email"
        error={!!errors.email}
        errorMessage={errors.email?.message}
        {...register("email")}
      />
      <Input
        className="mb-4 min-w-[320px]"
        label="Password"
        placeholder="Enter password"
        type={showPassword ? "text" : "password"}
        error={!!errors.password}
        errorMessage={errors.password?.message}
        append={
          <button
            className="cursor-pointer"
            type="button"
            onClick={handlePasswordToggleButton}
          >
            {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
          </button>
        }
        {...register("password")}
      />
      <Input
        className="mb-4 min-w-[320px]"
        label="Confirm Password"
        placeholder="Confirm password"
        type={showPassword ? "text" : "password"}
        error={!!errors.confirmPassword}
        errorMessage={errors.confirmPassword?.message}
        {...register("confirmPassword")}
      />

      {serverError && <p className="mb-4 text-red-800 animate--fade-in-slide-from-top">{serverError}</p>}

      <HartetotiButton
        className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
        type="submit"
      >
        {isLoading ? <CircularProgress size={16} color="white" /> : "Register"}
      </HartetotiButton>

      <p className="mt-4 flex flex-row justify-center gap-2 text-white">
        <span>Already have an account?</span>
        <Link className="font-semibold hover:underline" to="/login">
          Login!
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
