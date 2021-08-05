import React, { useContext } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { AppContext } from '../context/GlobalStore';
import Task from './Task';

const ResultsList = ({ currentFilter }) => {
    const { state, reorderState } = useContext(AppContext);

    const handleOnDragEnd = (result) => {
        reorderState(result);
    };

    let taskList = state;

    if (currentFilter === 'active') {
        taskList = taskList.filter((item) => !item.isFinished);
    } else if (currentFilter === 'completed') {
        taskList = taskList.filter((item) => item.isFinished);
    }

    const taskListMap = taskList.map((task, index) => (
        <Task key={task.id} {...task} index={index} />
    ));

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='tasks'>
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className='results__tasks'
                    >
                        {taskListMap}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default ResultsList;
