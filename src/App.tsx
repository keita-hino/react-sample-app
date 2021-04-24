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
    const collection = await db.collection('tasks').orderBy("id").get();
    setTasks(collection.docs.map(doc => doc.data()) as Task[]);
  }

  return { tasks, getTasks }
}

function App() {
  const { tasks, getTasks } = useTasks()

  const addTask = async (name: string) => {
    await db.collection("tasks").add({
      id: tasks.length + 1,
      name: name,
      status: 'backlog'
    })

    getTasks();
  }

  const doneTask = async (id: number) => {
    // FIXME: ここでドキュメントIDを取得するために通信してるが、もっと良い方法がありそう。
    const collection = await db.collection('tasks').where("id", "==", id).get();
    const docId = collection.docs[0].id
    await db.collection("tasks").doc(docId).set({
      status: "done"
    }, { merge: true })

    getTasks();
  }

  useEffect(() => {
    getTasks();
  }, [])

  return (
    <main>
      <h1>Todo</h1>
      <InputTask addTask={addTask}/>

      <h1>Backlog</h1>
      <BacklogTasks tasks={tasks} doneTask={doneTask}/>

      <h1>Done</h1>
      <DoneTasks tasks={tasks}/>
    </main>
  );
}

export default App;