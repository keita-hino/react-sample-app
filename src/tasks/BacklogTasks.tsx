import React, { useState, useEffect } from 'react';
import { db } from '../lib/firebase'
import { Task } from '../types/task'

const useTask = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const getTasks = async() => {
    const collection = await db.collection('tasks').get();
    const fetchTasks = collection.docs.map( doc => doc.data()) as Task[];
    setTasks(fetchTasks.filter( task => task.status === 'backlog'));
  }

  return { tasks, getTasks }
}

const BacklogTasks = () => {
  const { tasks, getTasks } = useTask()
  
  useEffect(() => {
    getTasks()
  }, []);
  
  return (
    <ul>
      {tasks.map(task => {
        return <li className="backlog-task" key={task.id}>{task.name}</li>
      })}
    </ul>
  )
}

export default BacklogTasks