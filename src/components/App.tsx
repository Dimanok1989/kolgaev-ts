import React, { useEffect } from 'react';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import Header from './Header';

const App: React.FC = () => {

    const { fetchUser } = useActions();

    useEffect(() => {
        fetchUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>

        <Header />
    
    </>

}

export default App;