import { notification } from "antd";
import { ArgsProps } from "antd/lib/notification";

type Type = 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'open'

interface NotificationConfig extends ArgsProps {
    title?: string;
}

export const useNotification = () => {

    const openNotification = (type: Type = "open", config: NotificationConfig) => {

        // if (!title && config.type === "success")
        //     title = "Выполнено";
        // else if (!title && config.type === "error")
        //     title = "Ошибка";
        // else if (!title && config.type === "info")
        //     title = "Информация";
        // else if (!title && config.type === "warning")
        //     title = "Внимание";

        notification[type]({
            placement: "bottomLeft",
            ...config,
        });

    };

    return openNotification;
}
