import React, { useEffect } from 'react';
import GlobalStore from '../context/GlobalStore';
import FormPanel from './FormPanel';
import Header from './Header';
import ResultsPanel from './ResultsPanel';

const App = () => {
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', 'dark');
    }, []);

    return (
        <GlobalStore>
            <main className='content'>
                <div className='content__container'>
                    <Header />
                    <FormPanel />
                    <ResultsPanel />
                </div>
            </main>
        </GlobalStore>
    );
};

export default App;
