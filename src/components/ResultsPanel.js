import React, { useState } from 'react';
import ResultsList from './ResultsList';
import ResultsOptions from './ResultsOptions';

const ResultsPanel = () => {
    const [filter, setFilter] = useState('all');

    const handleOnClickOption = (e) => {
        document
            .querySelectorAll('.results__option')
            .forEach((btn) => btn.classList.remove('active'));

        e.target.classList.add('active');
        const currentFilter = e.target.name;

        setFilter(currentFilter);
    };

    return (
        <>
            <section className='results'>
                <ResultsList currentFilter={filter} />
                <ResultsOptions onClickFilters={handleOnClickOption} />
            </section>
            <p className='results__info'>Drag and drop to reorder list</p>
        </>
    );
};

export default ResultsPanel;
