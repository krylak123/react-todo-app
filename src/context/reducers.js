export const appActions = {
    ADD_TASK: 'GET_TASKS',
    REMOVE_TASK: 'REMOVE_TASK',
    FINISH_TASK: 'FINISH_TASK',
};

const handleAddTask = (state, payload) => {
    const newState = [...state, payload.task];

    return newState;
};

const handleRemoveTask = (state, payload) => {
    const newState = state.filter((item) => item.id !== payload.id);

    return newState;
};

const handleFinishTask = (state, payload) => {
    const newState = [...state];
    newState.forEach((item) => {
        if (item.id === payload.id) {
            item.isFinished = !payload.isFinished;
        }
    });

    return newState;
};

export const appReducer = (state, action) => {
    switch (action.type) {
        case appActions.ADD_TASK:
            return handleAddTask(state, action.payload);

        case appActions.REMOVE_TASK:
            return handleRemoveTask(state, action.payload);

        case appActions.FINISH_TASK:
            return handleFinishTask(state, action.payload);

        default:
            return state;
    }
};
