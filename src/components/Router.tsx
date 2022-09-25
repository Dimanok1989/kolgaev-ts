import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import NotFound from "./Errors/NotFound";
import Auth from "./User/Auth";
import CarExpenses from "./CarExpenses";

const Router: React.FC = () => {

    return <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/carexpenses" element={<CarExpenses />} />
        <Route path="*" element={<NotFound />} />
    </Routes>

}

export default Router;