import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import NotFound from "./Errors/NotFound";
import Auth from "./User/Auth";

const Router: React.FC = () => {

    return <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
    </Routes>

}

export default Router;