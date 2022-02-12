import React from "react";
import { UserTypes } from "../../store/types/app";
import { Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined, SettingOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface UserPropsTypes {
    user: UserTypes;
}

const User: React.FC<UserPropsTypes> = props => {

    const { user }: UserPropsTypes = props;

    const menu = (
        <Menu>
            <Menu.Item key="0" disabled icon={<UserOutlined />}>Мои данные</Menu.Item>
            <Menu.Item key="1" disabled icon={<SettingOutlined />}>Настройки</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3" icon={<FontAwesomeIcon icon={["fas", "arrow-right-from-bracket"]} />}>Выход</Menu.Item>
        </Menu>
    );

    return <div>
        <div title={user.name}>
            <Dropdown overlay={menu} trigger={['click']} placement="bottomRight" className="cursor-pointer opacity-80 hover:opacity-100" arrow>
                <Avatar
                    className="flex justify-center items-center bg-cyan-900"
                    icon={<UserOutlined />}
                />
            </Dropdown>
        </div>
    </div>

}

export default User;