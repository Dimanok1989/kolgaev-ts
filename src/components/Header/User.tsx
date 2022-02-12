import React from "react";
import { UserTypes } from "../../store/types/app";

interface UserPropsTypes {
    user: UserTypes;
}

const User: React.FC<UserPropsTypes> = props => {

    const { user }: UserPropsTypes = props;

    return <div className="flex items-center relative">
        <div className="absolute right-0">{user.name}</div>
    </div>

}

export default User;