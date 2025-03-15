import { TextField } from "@mui/material";
import { forwardRef } from "react";

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  type?: string;
  inputMode?:
    | "text"
    | "search"
    | "email"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal"
    | undefined;
  append?: any;
  error?: boolean;
  errorMessage?: string;
}

// Forward ref to support react-hook-form
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      className,
      placeholder,
      type = "text",
      inputMode = "text",
      error,
      append,
      name,
      errorMessage,
      ...rest // Accept other props like {...register("email")}
    },
    ref,
  ) => {
    return (
      <div className={`input__container relative ${className}`}>
        <TextField
          className="w-full"
          label={label}
          placeholder={placeholder}
          error={error}
          size="small"
          name={name}
          type={type}
          inputMode={inputMode}
          helperText={errorMessage}
          inputRef={ref} // Attach ref for react-hook-form
          {...rest} // Spread react-hook-form props (onChange, value, etc.)
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "var(--color-soft-orange)" },
              "&:hover fieldset": { borderColor: "var(--color-soft-orange)" },
              "&.Mui-focused fieldset": {
                borderColor: "var(--color-soft-orange)",
              },
            },
            "& .MuiInputBase-input": {
              color: "white", // Input text color
              fontSize: "16px",
            },
            "& .MuiFormLabel-root": {
              color: "white",
            },
            "& .MuiFormLabel-root.Mui-focused": {
              color: "white",
            },
          }}
        />
        {append && <div className="absolute right-2 top-2.5">{append}</div>}
      </div>
    );
  },
);

Input.displayName = "Input"; // Fix for React DevTools warning

export default Input;
