import React, { useState, useContext } from 'react';
import { AppContext } from '../context/GlobalStore';
import ResultsList from './ResultsList';
import ResultsOptions from './ResultsOptions';

const ResultsPanel = () => {
    const { clearFinishTask } = useContext(AppContext);
    const [filter, setFilter] = useState('all');
    const [count, setCount] = useState(0);

    const handleOnClickOption = (e) => {
        document
            .querySelectorAll('.results__option')
            .forEach((btn) => btn.classList.remove('active'));

        e.target.classList.add('active');
        const currentFilter = e.target.name;

        setFilter(currentFilter);
    };

    const handleOnClickClear = () => {
        clearFinishTask();

        document
            .querySelectorAll('.results__option')
            .forEach((btn) => btn.classList.remove('active'));

        document.querySelector('.results__option').classList.add('active');

        setFilter('all');
    };

    return (
        <>
            <section className='results'>
                <ResultsList currentFilter={filter} count={setCount} />
                <ResultsOptions
                    onClickFilters={handleOnClickOption}
                    onClickClear={handleOnClickClear}
                    count={count}
                />
            </section>
            <p className='results__info'>Drag and drop to reorder list</p>
        </>
    );
};

export default ResultsPanel;
