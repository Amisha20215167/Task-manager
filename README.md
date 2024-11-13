# Task Manager Application

## Overview

This is a Task Manager application developed using **ReactJS**. It allows users to manage tasks efficiently by adding, editing, and deleting tasks. The application supports features such as setting task priority, searching tasks, and filtering tasks by their status (Completed or Pending). Task data is stored locally in the browser using `localStorage`.

### Features:
- **Dashboard**: Displays a list of tasks with sections for upcoming, overdue, and completed tasks.
- **Task Management**: Allows users to add, edit, and delete tasks.
- **Task Attributes**:
  - **Title**: Name of the task.
  - **Description**: Detailed description of the task.
  - **Due Date**: Date when the task is due.
  - **Priority**: Priority level of the task (High, Medium, Low).
- **Search & Filter**: Users can search tasks by title and filter them based on their priority and completion status.

### Technologies Used:
- **Frontend**: ReactJS
- **State Management**: React's useState and useEffect hooks
- **Storage**: localStorage for persisting task data in the browser.

### Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/task-manager.git
Navigate to the project directory:

bash
Copy code
cd task-manager
Install dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
npm start
The app will open in your default browser at http://localhost:3000.

Assumptions:
The app stores tasks only in the browser using localStorage. If the browser storage is cleared, all tasks will be lost.
The priority levels are fixed to High, Medium, and Low.
Screenshots:

Demo:
Click here to view the live demo

