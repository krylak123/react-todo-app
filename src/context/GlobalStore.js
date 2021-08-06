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

    const finishTask = (id, isFinished) => {
        dispatch({ type: appActions.FINISH_TASK, payload: { id, isFinished } });
    };

    const clearFinishTask = () => {
        dispatch({ type: appActions.CLEAR_FINISH_TASK });
    };

    const reorderState = (result) => {
        dispatch({ type: appActions.REORDER_STATE, payload: { result } });
    };

    return (
        <AppContext.Provider
            value={{
                state,
                addTask,
                removeTask,
                finishTask,
                clearFinishTask,
                reorderState,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default GlobalStore;
