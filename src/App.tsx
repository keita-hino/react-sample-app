import { useState, useEffect } from 'react';
import './App.css';
import InputTask from './tasks/InputTask'
import BacklogTasks from './tasks/BacklogTasks'
import DoneTasks from './tasks/DoneTasks'
import { Task } from './types/task'
import { db } from './lib/firebase'

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const getTasks = async () => {
    const collection = await db.collection('tasks').get();
    setTasks(collection.docs.map(doc => doc.data()) as Task[]);
  }

  return { tasks, getTasks }
}

function App() {
  const { tasks, getTasks } = useTasks()

  useEffect(() => {
    getTasks();
  }, [])

  return (
    <main>
      <h1>Todo</h1>
      <InputTask/>

      <h1>Backlog</h1>
      <BacklogTasks tasks={tasks}/>

      <h1>Done</h1>
      <DoneTasks tasks={tasks}/>
    </main>
  );
}

export default App;