import { TextField } from '@mui/material';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  type?: string;
  inputMode?: "text" | "search" | "email" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined;
}

const Input: React.FC<InputProps> = (
  {
    value,
    onChange,
    label,
    className,
    placeholder,
    type = 'text',
    inputMode = 'text'
  }
) => {
  return (
    <div className='input__container'>
      {
        label &&
        <p>{label}</p>
      }
      <TextField
        className='w-full'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        InputProps={{ className }}
        placeholder={placeholder}
        size='small'
        type={type}
        inputMode={inputMode}
      />
    </div>
  );
};

export default Input;
