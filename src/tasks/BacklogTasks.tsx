import React from "react"

const BacklogTasks = () => {
  return (
    <ul>
      <li className="backlog-task">
        <input 
          type="checkbox" 
          className="checkbox-input"
        />未着手タスク1
      </li>
      <li className="backlog-task">
        <input 
          type="checkbox" 
          className="checkbox-input"
        />未着手タスク2
      </li>
    </ul>
  )
}

export default BacklogTasks