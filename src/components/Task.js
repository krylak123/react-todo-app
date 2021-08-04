import React, { useContext } from 'react';
import { AppContext } from '../context/GlobalStore';

import deleteIcon from '../images/icon-cross.svg';

const Task = ({ id, name, dateAdd }) => {
    const { removeTask } = useContext(AppContext);

    const handleOnClick = (id) => {
        removeTask(id);
    };

    return (
        <div className='task'>
            <div className='task__info-wrap'>
                <h2 className='task__name'>{name}</h2>
                <p className='task__date'>added: {dateAdd}</p>
            </div>
            <div className='task__actions-wrap'>
                <button
                    className='task__delete'
                    onClick={() => handleOnClick(id)}
                >
                    <img
                        src={deleteIcon}
                        alt='delete icon'
                        className='task__delete-icon'
                    />
                </button>
            </div>
        </div>
    );
};

export default Task;
