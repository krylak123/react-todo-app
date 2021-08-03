import React from 'react';
import GlobalStore from '../context/GlobalStore';

const App = () => {
    return (
        <GlobalStore>
            <p>working</p>
        </GlobalStore>
    );
};

export default App;
