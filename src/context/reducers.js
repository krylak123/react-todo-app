export const appActions = {
    ADD_TASK: 'GET_TASKS',
    REMOVE_TASK: 'REMOVE_TASK',
    FINISH_TASK: 'FINISH_TASK',
    CLEAR_FINISH_TASK: 'CLEAR_FINISH_TASK',
    REORDER_STATE: 'REORDER_STATE',
};

const handleAddTask = (state, payload) => {
    const newState = [...state, payload.task];

    localStorage.setItem('TASK_LIST', JSON.stringify(newState));

    return newState;
};

const handleRemoveTask = (state, payload) => {
    const newState = state.filter((item) => item.id !== payload.id);

    localStorage.setItem('TASK_LIST', JSON.stringify(newState));

    return newState;
};

const handleFinishTask = (state, payload) => {
    const newState = [...state];
    newState.forEach((item) => {
        if (item.id === payload.id) {
            item.isFinished = !payload.isFinished;
        }
    });

    localStorage.setItem('TASK_LIST', JSON.stringify(newState));

    return newState;
};

const handleClearFinishTask = (state) => {
    const newState = state.filter((item) => !item.isFinished);

    localStorage.setItem('TASK_LIST', JSON.stringify(newState));

    return newState;
};

const handleReordersState = (state, payload) => {
    if (!payload.result.destination) return state;
    const newState = [...state];
    const [reorderedItem] = newState.splice(payload.result.source.index, 1);
    newState.splice(payload.result.destination.index, 0, reorderedItem);

    localStorage.setItem('TASK_LIST', JSON.stringify(newState));

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

        case appActions.CLEAR_FINISH_TASK:
            return handleClearFinishTask(state);

        case appActions.REORDER_STATE:
            return handleReordersState(state, action.payload);

        default:
            return state;
    }
};
