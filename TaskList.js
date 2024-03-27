import React from 'react';
import { useSelector } from 'react-redux';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <Droppable droppableId="task-list">
      {(provided) => (
        <ul {...provided.droppableProps} ref={provided.innerRef}>
          {tasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
              {(provided) => (
                <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {task.title}
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default TaskList;