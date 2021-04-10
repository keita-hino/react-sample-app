import { useState, useEffect } from "react"
import { db } from '../lib/firebase'
import { Task } from '../types/task'

const useDoneTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const getTasks = async () => {
    const collection = await db.collection('tasks').get();
    const fetchTasks = collection.docs.map(doc => doc.data()) as Task[];
    setTasks(fetchTasks.filter(task => task.status === 'done'));
  }

  return { tasks, getTasks }
}

const DoneTasks = () => {
  const { tasks, getTasks } = useDoneTasks()

  useEffect(() => {
    getTasks();
  }, [])
  
  return (
    <ul>
      {tasks.map(task => {
        return <li className="done-task" key={ task.id }>{ task.name }</li>
      })}
    </ul>
  )
}

export default DoneTasks