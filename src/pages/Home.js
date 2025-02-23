import {useDispatch, useSelector} from "react-redux";
import { login, logout } from "../store/features/authSlice";

function Home() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    return user ? (
        <div>
            <h2>Welcome, {user.name}!</h2>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    ) : (
        <button onClick={() => dispatch(login({name: "John Doe"}))}>Login</button>
    );
}

export default Home;