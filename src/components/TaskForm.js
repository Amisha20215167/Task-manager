import React, { useState, useEffect } from 'react';

function TaskForm({ addOrUpdateTask, isEditing, currentTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');

  useEffect(() => {
    if (isEditing && currentTask) {
      setTitle(currentTask.title);
      setDescription(currentTask.description);
      setDueDate(currentTask.dueDate);
      setPriority(currentTask.priority);
    }
  }, [isEditing, currentTask]);

  const handleSave = () => {
    if (title.trim() === '') {
      alert("Title can't be empty");
      return;
    }

    const task = {
      id: isEditing ? currentTask.id : Date.now(),
      title,
      description,
      dueDate,
      priority,
      completed: false,
    };

    addOrUpdateTask(task);
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('Medium');
  };

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      
      {/* Save Button */}
      <button onClick={handleSave} className="save-button">
        Save
      </button>
    </div>
  );
}

export default TaskForm;
