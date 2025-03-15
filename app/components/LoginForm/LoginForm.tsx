import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Input from "../BaseFormComponents/Input";
import { CircularProgress } from "@mui/material";
import api from "~/api";
import { Link } from "react-router";
import { Eye, EyeClosed } from "lucide-react";
import HartetotiButton from "../BaseFormComponents/HarteotiButton";

// Validation Schema
const schema = z.object({
  email: z.string().email("Invalid email").min(5, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    setServerError(null);
    setIsLoading(true);

    try {
      await api.auth.login(data);
      const profile = await api.auth.profile();
      console.log(profile);
    } catch (e: any) {
      console.error(e);
      setServerError(e.response?.data?.message || "Error logging in");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="w-full max-w-md rounded-lg p-6 text-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        className="mb-4 min-w-[320px]"
        label="Email"
        placeholder="Email"
        {...register("email")}
        error={!!errors.email}
        errorMessage={errors.email?.message}
      />
      <Input
        className="mb-4 min-w-[320px]"
        label="Password"
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        error={!!errors.password}
        errorMessage={errors.password?.message}
        {...register("password")}
        append={
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
          </button>
        }
      />

      {serverError && (
        <p className="animate--fade-in-slide-from-top mb-4 text-red-800">
          {serverError}
        </p>
      )}

      <HartetotiButton type="submit" className="w-full">
        {isLoading ? <CircularProgress size={16} color="inherit" /> : "Login"}
      </HartetotiButton>

      <p className="mt-4 flex justify-center gap-2">
        <span>Don't have an account?</span>
        <Link className="font-semibold hover:underline" to="/register">
          Register!
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
