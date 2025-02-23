import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/")
            .then(response => setMessage(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>React + Node.js</h1>
            <p>Backend says: {message}</p>
        </div>
    );
}

export default App;
