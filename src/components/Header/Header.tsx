import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AppState } from "../../store/types/app";
import User from "./User";

const Header: React.FC = () => {

    const { user }: AppState = useTypedSelector(state => state.app);

    return <div className="fixed top-0 left-0 right-0 z-50 flex items-center h-14 bg-zinc-900 text-white">
        
        <div className="mx-auto w-full max-w-screen-lg flex justify-between items-center">
            
            <div className="relative"></div>
            <div className="relative">
                {user && <User user={user} />}
            </div>

        </div>

    </div>

}

export default Header;