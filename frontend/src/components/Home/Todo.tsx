import {ITask} from './interfaces'
import {Task} from './styles'
import {BsCircle, BsCheck2Circle, BsTrash} from 'react-icons/bs'
import React from 'react'


interface Props {
  task: ITask
  remove(taskToDelete: number): void
}

const Todo: React.FC<Props> = ({task, remove}) => {
  const [isDone, setIsDone] = React.useState<boolean>(false)
  const [isDelete, setIsDelete] = React.useState<boolean>(false)

  return (
    <Task>
      {
        isDone
        ? <BsCheck2Circle onClick={() => { 
            setIsDone(false) 
          }} />
        : <BsCircle onClick={() => { 
            setIsDone(true) 
          }} />
      }
      <h4 style={{
        textDecoration: isDone
        ? 'line-through'
        : ''
      }} onClick={() => {
        window.location.href = `#desc=${task.id.toString()}`
      }}>{task.title}</h4>
      <BsTrash onClick={() => remove(task.id)} />
      <div className="desc" id={"desc="+task.id.toString()}>
        <a className="close" href="#" >&times;</a>
        <h4 className="descTitle">Description</h4>
        {task.description}
      </div>
    </Task>  
  )
}


export default Todo