import { initGame } from "~/helpers/gameHelper";
import HartetotiButton from "../BaseFormComponents/HarteotiButton";

const LoggedInUserDashboard = () => {
  const handleInitGameClick = () => {
    initGame();
  };
  return (
    <div className="logged-in-user-dahsboard flex items-center justify-center">
      <div className="min-w-[240px]">
        <HartetotiButton className="w-full" onClick={handleInitGameClick}>
          Start game
        </HartetotiButton>
      </div>
    </div>
  );
};

export default LoggedInUserDashboard;
