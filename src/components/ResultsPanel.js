import React, { useContext } from 'react';
import { AppContext } from '../context/GlobalStore';
import ResultsOptions from './ResultsOptions';
import Task from './Task';

const ResultsPanel = () => {
    const { state } = useContext(AppContext);

    const taskList = state.map((task) => <Task key={task.id} {...task} />);

    return (
        <section className='results'>
            {taskList.length ? (
                taskList
            ) : (
                <p className='results__empty'>You don't have any tasks :D</p>
            )}
            <ResultsOptions />
        </section>
    );
};

export default ResultsPanel;
