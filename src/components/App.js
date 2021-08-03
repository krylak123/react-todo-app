import React, { useEffect } from 'react';
import GlobalStore from '../context/GlobalStore';
import Header from './Header';

const App = () => {
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', 'dark');
    }, []);

    return (
        <GlobalStore>
            <main className='content'>
                <div className='content__container'>
                    <Header />
                </div>
            </main>
        </GlobalStore>
    );
};

export default App;
