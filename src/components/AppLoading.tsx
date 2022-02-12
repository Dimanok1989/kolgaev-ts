import React from "react";

const AppLoading: React.FC = () => {

    return <div className="flex justify-center items-center fixed inset-0">
        <code className="loading-text">{'>>>'} Загрузка...</code>
    </div>
}

export default AppLoading;