import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { AppState } from "../store/types/app";
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter } from "react-router-dom";
import AppLoading from "./AppLoading";
import Header from "./Header";
import Router from "./Router";

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

    return <BrowserRouter>

        <Header />

        <Router />

    </BrowserRouter>

}

export default App;