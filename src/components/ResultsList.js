import React, { useContext } from 'react';
import { AppContext } from '../context/GlobalStore';
import Task from './Task';

const ResultsList = ({ currentFilter }) => {
    const { state } = useContext(AppContext);

    let taskList = state;

    if (currentFilter === 'active') {
        taskList = taskList.filter((item) => !item.isFinished);
    } else if (currentFilter === 'completed') {
        taskList = taskList.filter((item) => item.isFinished);
    }

    const taskListMap = taskList.map((task) => (
        <Task key={task.id} {...task} />
    ));

    return (
        <>
            {taskList.length ? (
                <div className='results__tasks'>{taskListMap}</div>
            ) : (
                <p className='results__empty'>You don't have any tasks :D</p>
            )}
        </>
    );
};

export default ResultsList;
