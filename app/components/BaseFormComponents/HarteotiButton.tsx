import { Button } from "@mui/material";
import type React from "react";

interface ButtonProps {
  onClick?: any;
  children: any;
  className?: string;
  type?: "submit" | "button" | "reset";
}

const HartetotiButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  type = "button",
}) => {
  return (
    <Button
      className={`min-h-10 ${className}`}
      type={type}
      variant="outlined"
      onClick={onClick}
      sx={{
        "&.MuiButtonBase-root": {
          border: "none",
          backgroundColor: "var(--color-soft-orange)",
          color: "white",
          fontWeight: "600",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default HartetotiButton;
