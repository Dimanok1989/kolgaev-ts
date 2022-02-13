import React from "react";
import { UserTypes } from "../../store/types/app";
import { useActions } from "../../hooks/useActions";
import { Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined, SettingOutlined, LoadingOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface UserPropsTypes {
    user: null | UserTypes;
}

const User: React.FC<UserPropsTypes> = props => {

    const { user }: UserPropsTypes = props;
    const { fetchAppUserLogout } = useActions();
    const [logout, setLogout] = React.useState<boolean>(false);

    React.useEffect(() => {

        if (logout) {
            fetchAppUserLogout(null, null, () => setLogout(false));
        }

    }, [logout]);

    const userMenu = (
        <Menu>
            <Menu.Item key="0" disabled icon={<UserOutlined />}>Мои данные</Menu.Item>
            <Menu.Item key="1" disabled icon={<SettingOutlined />}>Настройки</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3" icon={<FontAwesomeIcon icon={["fas", "arrow-right-from-bracket"]} />} onClick={() => setLogout(true)}>Выход</Menu.Item>
        </Menu>
    );

    if (user === null) {
        return <div>
            <Link to="/login" className="opacity-60 text-white hover:opacity-100 hover:text-white">
                <FontAwesomeIcon
                    icon={['fas', 'arrow-right-to-bracket']}
                    size="lg"
                    title="Авторизация"
                />
            </Link>
        </div>
    }

    return <div>
        <div title={user.name}>
            <Dropdown
                overlay={userMenu}
                trigger={['click']}
                placement="bottomRight"
                className={logout ? "opacity-80" : "cursor-pointer opacity-80 hover:opacity-100"}
                arrow
                disabled={logout}
            >
                <Avatar
                    className="flex justify-center items-center bg-cyan-900"
                    icon={logout ? <LoadingOutlined /> : <UserOutlined />}
                />
            </Dropdown>
        </div>
    </div>

}

export default User;