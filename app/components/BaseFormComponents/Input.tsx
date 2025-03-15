import { TextField } from "@mui/material";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
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
  error?: boolean
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  label,
  className,
  placeholder,
  type = "text",
  inputMode = "text",
  error,
  append,
}) => {
  return (
    <div className="input__container relative">
      <TextField
        className="w-full"
        label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        InputProps={{ className }}
        placeholder={placeholder}
        error={error}
        size="small"
        type={type}
        inputMode={inputMode}
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
      ></TextField>
      {append && <div className="absolute right-2 top-2.5">{append}</div>}
    </div>
  );
};

export default Input;
