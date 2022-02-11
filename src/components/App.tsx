import React, { useEffect } from 'react';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import Header from './Header';
import MainPage from './MainPage';

const App: React.FC = () => {

    const { fetchUser } = useActions();

    useEffect(() => {
        fetchUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>

        {/* <Header /> */}

        <MainPage />
    
    </>

}

export default App;