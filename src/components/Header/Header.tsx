import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AppState } from "../../store/types/app";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import User from "./User";

const Header: React.FC = () => {

    const { user }: AppState = useTypedSelector(state => state.app);

    return <div className="fixed top-0 left-0 right-0 z-50 flex items-center h-14 bg-zinc-900 text-white">

        <div className="mx-auto w-full max-w-screen-lg flex justify-between items-center">

            <div className="relative flex items-center">

                <a href="/" className="hover:opacity-80" title="Kolgaev.ru - Главная страница">
                    <Avatar src="/logo192.jpg" className="mr-2" />
                </a>

                {user?.access?.car_expenses && <Link to="/carexpenses" className="mx-2 opacity-60 text-white hover:opacity-100 hover:text-white">
                    <FontAwesomeIcon
                        icon={['fas', 'gas-pump']}
                        size="lg"
                        title="Авторасходы"
                    />
                </Link>}

            </div>

            <div className="relative">
                <User user={user} />
            </div>

        </div>

    </div>

}

export default Header;