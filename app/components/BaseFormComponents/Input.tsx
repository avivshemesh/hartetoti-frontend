import { TextField } from '@mui/material';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, label, className, placeholder }) => {
  return (
    <div className='input__container'>
      {label && <p>{label}</p>}
      <TextField
        value={value}
        onChange={(e) => onChange(e.target.value)}
        InputProps={{ className }}
        placeholder={placeholder}
        size='small'
      />
    </div>
  );
};

export default Input;
