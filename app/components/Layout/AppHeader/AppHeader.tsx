import { Link } from "react-router";
import { CircleUser } from "lucide-react";

const AppHeader = () => {
  return (
    <header className="app-header sticky left-0 top-0 h-[var(--header-height)] w-[100%] p-3">
      <div className="m-auto flex h-[100%] w-[100%] max-w-[var(--max-content-width)] items-center justify-between">
        <div className="flex h-[100%]">
          <Link to="/" aria-label="Home page" title="Home page">
            <img
              className="max-h-[100%]"
              src="/hartetoti-logo.png"
              alt="Hartetoti"
            />
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <Link to="/login" aria-label="Login" title="Login">
            <CircleUser color="white" size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
