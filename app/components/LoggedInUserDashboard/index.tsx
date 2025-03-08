import { Button } from "@mui/material"
import { initGame } from "~/helpers/gameHelper"

const LoggedInUserDashboard = () => {
    const handleInitGameClick = () => {
        initGame()
    }
    return (
        <div className="logged-in-user-dahsboard min-h-[var(--min-page-height)] flex items-center justify-center">
            <Button variant="contained" onClick={handleInitGameClick}>
                Start game
            </Button>
        </div>
    )
}

export default LoggedInUserDashboard