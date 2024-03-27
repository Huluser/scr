import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from './redux/actions';

const TaskDetail = ({ task }) => {
  const dispatch = useDispatch();
  const { id, title, description, completed } = task;
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  const handleToggle = () => {
    dispatch(toggleTask(id));
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    dispatch(editTask(id, editedTitle, editedDescription));
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          ></textarea>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleToggle}>{completed ? 'Undo' : 'Complete'}</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default TaskDetail;
