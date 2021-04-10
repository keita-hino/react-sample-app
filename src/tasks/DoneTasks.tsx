import { Task } from '../types/task'

const doneTasks = (tasks: Task[]) => tasks.filter(task => task.status === 'done')

type Props = {
  tasks: Task[]
}

const DoneTasks = (props: Props) => {  
  return (
    <ul>
      {doneTasks(props.tasks).map(task => {
        return <li className="done-task" key={ task.id }>{ task.name }</li>
      })}
    </ul>
  )
}

export default DoneTasks