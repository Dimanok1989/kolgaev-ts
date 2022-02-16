import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AppState } from "../../store/types/app";
import { Avatar, Menu, Dropdown } from "antd";
import User from "./User";

const Header: React.FC = () => {

    const { user }: AppState = useTypedSelector(state => state.app);

    return <div className="fixed top-0 left-0 right-0 z-50 flex items-center h-14 bg-zinc-900 text-white">

        <div className="mx-auto w-full max-w-screen-lg flex justify-between items-center">

            <div className="relative">
                <a href="/" className="hover:opacity-80" title="Kolgaev.ru - Главная страница">
                    <Avatar src="/logo192.jpg" className="mr-2" />
                </a>
            </div>

            <div className="relative">
                <User user={user} />
            </div>

        </div>

    </div>

}

export default Header;