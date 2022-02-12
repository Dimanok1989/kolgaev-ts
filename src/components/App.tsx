import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import Header from "./Header";
import MainPage from "./MainPage";
import { AppState } from "../store/types/app";
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons";
import AppLoading from "./AppLoading";

library.add(fas, far, fab);

const App: React.FC = () => {

    const { fetchApp } = useActions();
    const { loading }: AppState = useTypedSelector(state => state.app);

    useEffect(() => {
        fetchApp();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return <AppLoading />
    }

    return <>

        <Header />

        <MainPage />
    
    </>

}

export default App;