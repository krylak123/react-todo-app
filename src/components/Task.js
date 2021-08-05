import React, { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { AppContext } from '../context/GlobalStore';

import finishIcon from '../images/icon-check.svg';
import deleteIcon from '../images/icon-cross.svg';

const Task = ({ id, name, isFinished, dateAdd, index }) => {
    const { finishTask, removeTask } = useContext(AppContext);

    const handleOnClickFinish = (id) => {
        finishTask(id, isFinished);
    };

    const handleOnClickDelete = (id) => {
        removeTask(id);
    };

    return (
        <Draggable key={id} draggableId={name} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={isFinished ? 'task finish' : 'task'}
                >
                    <div className='task__finish-wrap'>
                        <button
                            name='finish'
                            className='task__btn-finish'
                            onClick={() => handleOnClickFinish(id)}
                        >
                            <img
                                src={finishIcon}
                                alt='finish icon'
                                className='task__finish-icon'
                            />
                        </button>
                    </div>

                    <div className='task__info-wrap'>
                        <h2 className='task__name'>{name}</h2>
                        <p className='task__date'>added: {dateAdd}</p>
                    </div>

                    <div className='task__delete-wrap'>
                        <button
                            name='delete'
                            className='task__btn-delete'
                            onClick={() => handleOnClickDelete(id)}
                        >
                            <img
                                src={deleteIcon}
                                alt='delete icon'
                                className='task__delete-icon'
                            />
                        </button>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default Task;
