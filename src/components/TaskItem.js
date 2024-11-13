import React from 'react';

function TaskList({ tasks, deleteTask, editTask }) {
  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
            <div className="task-details">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p><strong>Due Date:</strong> {task.dueDate}</p>
              <p><strong>Priority:</strong> {task.priority}</p>
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
