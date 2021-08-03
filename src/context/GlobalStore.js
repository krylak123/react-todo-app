import React, { createContext, useReducer } from 'react';
import { appActions, appReducer } from './reducers';

export const AppContext = createContext(null);

const GlobalStore = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, []);

    const addTask = (task) => {
        dispatch({ type: appActions.ADD_TASK, payload: { task } });
    };

    const removeTask = (id) => {
        dispatch({ type: appActions.REMOVE_TASK, payload: { id } });
    };

    return (
        <AppContext.Provider
            value={{
                state,
                addTask,
                removeTask,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default GlobalStore;
