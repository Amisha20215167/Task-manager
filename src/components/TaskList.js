import React from 'react';

function TaskList({ tasks, deleteTask, editTask, toggleCompletion }) {
  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompletion(task.id)}
                className="task-checkbox"
              />
              <span className="checkbox-custom"></span>
            </label>

            <div className="task-details">
              <h3>{task.title}</h3>
              <p><strong>Description:</strong> {task.description}</p> {/* Description above Priority */}
              <p><strong>Due Date:</strong> {task.dueDate}</p> {/* Due date above Priority */}
              <p><strong>Priority:</strong> {task.priority}</p> {/* Priority below description and due date */}
            </div>

            <div className="task-actions">
              <button onClick={() => editTask(task)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
