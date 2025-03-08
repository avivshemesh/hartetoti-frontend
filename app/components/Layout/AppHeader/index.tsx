import { Link } from "react-router"

const AppHeader = () => {
    return (
        <header className='app-header fixed top-0 left-0 bg-amber-500 w-[100vw] h-[var(--header-height)] p-3 grid grid-cols-3 grid-rows-1'>
            <div className='app-header__start flex items-center'>
                <Link to="/login">
                    Login
                </Link>
            </div>
            <div className='app-header__center h-[100%] flex justify-center'>
                <img className="max-h-[100%]" src="/hartetoti-logo.png" alt="Hartetoti" />
            </div>
            <div className='app-header__end'>
            </div>
        </header>
    )
}

export default AppHeader