import React, { useState, useEffect } from "react";
import axios from "axios";
import MainAppRouter from "./components/MainAppRouter";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/")
            .then(response => setMessage(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <Provider store={store}>
            <div className="hartetoti-app-container">
                <MainAppRouter />
            </div>
        </Provider>
    );
}

export default App;
