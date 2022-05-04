import {TiDelete} from 'react-icons/ti'
import React from 'react'
import {PopupW, PopWrapper} from './styles'



interface Props {
  add(
    title: string, 
    description: string, 
  ): void
}

const Popup: React.FC<Props> = ({add}) => {
  const [title, setTitle] = React.useState<string>("New Task")
  const [description, setDescription] = React.useState<string>("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>): void => {
    if (event.target.name === "title") {
      setTitle(event.target.value)
    } else if (event.target.name === "desc") {
      setDescription(event.target.value)
    }
  }

  const cleanInput = () => {
    setTitle("")
    setDescription("")
  }

  return (
    <PopupW id="pop">
      <PopWrapper>
        <a href="#" className="close">&times;</a>
        <h2>Create To Do List</h2>
        <div className="content">
          <div className="container">
            <div>
              <input 
                id="title"
                type="text" 
                value={title}
                name="title"
                placeholder="New Task" 
                onChange={handleChange}
              />
              <textarea 
                id="desc"
                name="desc"
                value={description}
                placeholder="What's on your mind?"
                onChange={handleChange}
              ></textarea>
              <button onClick={() => {
                add(title, description)
                window.location.href = "#"
                cleanInput()
              }}>+ Add Task </button>
            </div>
          </div>
        </div>
      </PopWrapper>
    </PopupW>
  )
}


export default Popup