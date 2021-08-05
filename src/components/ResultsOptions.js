import React from 'react';

const ResultsOptions = ({ onClick }) => {
    return (
        <div className='results__panel'>
            <div className='results__count-wrap'>
                <p className='results__count'> items left</p>
            </div>
            <div className='results__options-wrap'>
                <button
                    onClick={onClick}
                    name='all'
                    className='results__option active'
                >
                    All
                </button>
                <button
                    onClick={onClick}
                    name='active'
                    className='results__option'
                >
                    Active
                </button>
                <button
                    onClick={onClick}
                    name='completed'
                    className='results__option'
                >
                    Completed
                </button>
            </div>
            <div className='results__clear-wrap'>
                <button className='results__clear'>Clear Completed</button>
            </div>
        </div>
    );
};

export default ResultsOptions;
