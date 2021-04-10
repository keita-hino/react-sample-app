import { Task } from '../types/task'

const backlogTasks = (tasks: Task[]) => tasks.filter(task => task.status === 'backlog')

type Props = {
  tasks: Task[]
}

const BacklogTasks = (props: Props) => {
  return (
    <ul>
      {backlogTasks(props.tasks).map(task => {
        return <li className="backlog-task" key={task.id}>{task.name}</li>
      })}
    </ul>
  )
}

export default BacklogTasks