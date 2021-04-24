import { Task } from '../types/task'

const backlogTasks = (tasks: Task[]) => tasks.filter(task => task.status === 'backlog')

type Props = {
  tasks: Task[];
  doneTask: Function;
}

const BacklogTasks: React.VFC<Props> = (props) => {
  return (
    <ul>
      {backlogTasks(props.tasks).map(task => {
        return <li className="backlog-task" key={task.id}>
          <input
            type="checkbox"
            className='checkbox-input'
            onClick={() => props.doneTask(task.id)}
          />{task.name}
        </li>
      })}
    </ul>
  )
}

export default BacklogTasks