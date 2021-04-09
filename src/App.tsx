import React from 'react';
import './App.css';
import InputTask from './tasks/InputTask'
import BacklogTasks from './tasks/BacklogTasks'
import DoneTasks from './tasks/DoneTasks'

function App() {
  return (
    <main>
      <h1>Todo</h1>
      <InputTask/>
      <h1>Backlog</h1>
      <BacklogTasks/>
      <h1>Done</h1>
      <DoneTasks/>
    </main>
  );
}

export default App;