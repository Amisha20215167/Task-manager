// import React, { useState, useEffect } from 'react';
// import './App.css';
// import TaskForm from './components/TaskForm';
// import TaskList from './components/TaskList';

// function App() {
//   const [tasks, setTasks] = useState(() => {
//     const savedTasks = localStorage.getItem('tasks');
//     return savedTasks ? JSON.parse(savedTasks) : [];
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentTask, setCurrentTask] = useState(null);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortOption, setSortOption] = useState('');

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }, [tasks]);

//   const addOrUpdateTask = (task) => {
//     if (isEditing) {
//       const updatedTasks = tasks.map(t => (t.id === task.id ? task : t));
//       setTasks(updatedTasks);
//       setIsEditing(false);
//       setCurrentTask(null);
//       setSuccessMessage('Task updated successfully!');
//     } else {
//       setTasks([...tasks, task]);
//       setSuccessMessage('Task added successfully!');
//     }
//     setTimeout(() => setSuccessMessage(''), 3000);
//   };

//   const deleteTask = (taskId) => {
//     const updatedTasks = tasks.filter(task => task.id !== taskId);
//     setTasks(updatedTasks);
//     setSuccessMessage('Task deleted successfully!');
//     setTimeout(() => setSuccessMessage(''), 3000);
//   };

//   const editTask = (task) => {
//     setCurrentTask(task);
//     setIsEditing(true);
//   };

//   const toggleCompletion = (taskId) => {
//     const updatedTasks = tasks.map(task =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     );
//     setTasks(updatedTasks);
//   };

//   const removeCompletedTasks = () => {
//     const updatedTasks = tasks.filter(task => !task.completed);
//     setTasks(updatedTasks);
//     setSuccessMessage('Completed tasks removed!');
//     setTimeout(() => setSuccessMessage(''), 3000);
//   };

//   const remainingTasksCount = tasks.filter(task => !task.completed).length;

//   // Define priority levels for sorting
//   const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };

//   // Filtered and sorted tasks based on search and sort option
//   const filteredTasks = tasks
//     .filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()))
//     .sort((a, b) => {
//       if (sortOption === 'alphabetical') {
//         return a.title.localeCompare(b.title);
//       } else if (sortOption === 'completed') {
//         return a.completed - b.completed;
//       } else if (sortOption === 'priority') {
//         return priorityOrder[a.priority] - priorityOrder[b.priority];
//       }
//       return 0;
//     });

//   return (
//     <div className="App">
//       <header>
//         <h1>Task Manager</h1>
//         <p>!! Stay organized and manage your tasks efficiently !!</p>
//       </header>

//       <div className="search-sort">
//         <input 
//           type="text" 
//           placeholder="Search tasks..." 
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="search-bar"
//         />
//         <select 
//           value={sortOption} 
//           onChange={(e) => setSortOption(e.target.value)} 
//           className="sort-dropdown"
//         >
//           <option value="">Sort by...</option>
//           <option value="alphabetical">Alphabetical</option>
//           <option value="completed">Completed status</option>
//           <option value="priority">Priority</option>
//         </select>
//       </div>

//       <TaskForm 
//         addOrUpdateTask={addOrUpdateTask} 
//         isEditing={isEditing} 
//         currentTask={currentTask}
//       />

//       <TaskList 
//         tasks={filteredTasks} 
//         deleteTask={deleteTask} 
//         editTask={editTask} 
//         toggleCompletion={toggleCompletion}
//       />

//       <div className="task-count">
//         <p>Remaining Tasks: {remainingTasksCount}</p>
//       </div>

//       <button onClick={removeCompletedTasks} className="remove-completed-button">
//         Remove Completed Tasks
//       </button>

//       {successMessage && (
//         <div className="success-message">{successMessage}</div>
//       )}
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [showFormFields, setShowFormFields] = useState(false); // New state

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addOrUpdateTask = (task) => {
    if (isEditing) {
      const updatedTasks = tasks.map(t => (t.id === task.id ? task : t));
      setTasks(updatedTasks);
      setIsEditing(false);
      setCurrentTask(null);
      setSuccessMessage('Task updated successfully!');
    } else {
      setTasks([...tasks, task]);
      setSuccessMessage('Task added successfully!');
    }
    setTimeout(() => setSuccessMessage(''), 3000);
    setShowFormFields(false); // Hide the form after adding/updating the task
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    setSuccessMessage('Task deleted successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const editTask = (task) => {
    setCurrentTask(task);
    setIsEditing(true);
    setShowFormFields(true); // Show form for editing
  };

  const toggleCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeCompletedTasks = () => {
    const updatedTasks = tasks.filter(task => !task.completed);
    setTasks(updatedTasks);
    setSuccessMessage('Completed tasks removed!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const remainingTasksCount = tasks.filter(task => !task.completed).length;

  // Define priority levels for sorting
  const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };

  // Filtered and sorted tasks based on search and sort option
  const filteredTasks = tasks
    .filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'alphabetical') {
        return a.title.localeCompare(b.title);
      } else if (sortOption === 'completed') {
        return a.completed - b.completed;
      } else if (sortOption === 'priority') {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      return 0;
    });

  return (
    <div className="App">
      <header>
        <h1>Task Manager</h1>
        <p>!! Stay organized and manage your tasks efficiently !!</p>
      </header>

      {/* "Add Task" button at the top */}
      {!showFormFields && ( // Only show "Add Task" button if form is hidden
        <button onClick={() => setShowFormFields(true)} className="add-task-button">
          Add Task
        </button>
      )}

      {/* Task form, conditionally rendered */}
      {showFormFields && (
        <TaskForm 
          addOrUpdateTask={addOrUpdateTask} 
          isEditing={isEditing} 
          currentTask={currentTask} 
        />
      )}

      <div className="search-sort">
        <input 
          type="text" 
          placeholder="Search tasks..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <select 
          value={sortOption} 
          onChange={(e) => setSortOption(e.target.value)} 
          className="sort-dropdown"
        >
          <option value="">Sort by...</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="completed">Completed status</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      <TaskList 
        tasks={filteredTasks} 
        deleteTask={deleteTask} 
        editTask={editTask} 
        toggleCompletion={toggleCompletion}
      />

      <div className="task-count">
        <p>Remaining Tasks: {remainingTasksCount}</p>
      </div>

      <button onClick={removeCompletedTasks} className="remove-completed-button">
        Remove Completed Tasks
      </button>

      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
    </div>
  );
}

export default App;
