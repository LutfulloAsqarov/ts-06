import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="/" element={<Login />} /> */}
            </Routes>
        </>
    );
}

export default App;
