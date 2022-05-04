import {Container, AddTaskBtn} from './styles'
import React from 'react'
import {ITask} from './interfaces'
import Todo from './Todo'
import Popup from './Popup'





const Home = () => {
  const [task, setTask] = React.useState<ITask[]>([])

  const remove = (taskToDelete: number): void => {
    setTask(task.filter((t) => (
      t.id !== taskToDelete
    )))
  }

  const add = (
    title: string,
    description: string,
  ) => {
    let newTask = {
      id: task.length + 1,
      title: title,
      description: description,
      isCompleted: false
    }
    setTask([...task, newTask])
  }

  return (
    <Container>
      {task.map((t: ITask, key: number) => (
        <Todo key={key} task={t} remove={remove} />
      ))}
      <Popup add={add}/>
      <AddTaskBtn href="#pop">+ New Task</AddTaskBtn>
    </Container>
  )
}


export default Home
