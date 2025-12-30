import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import viteLogo from '/vite.svg'
import Input from './Input'
import List from './List'
import Todolist from './Todolist'
import DeleteAll from './DeleteAll'
import UpdateAll from './UpdateAll'
function App() {
  let [task,setTask]=useState([]);
  return <>
  <Input task={task} setTask={setTask}></Input>
  <Todolist></Todolist>
  <List task={task} setTask={setTask}></List>
  <DeleteAll task={task} setTask={setTask} ></DeleteAll>
  <br />
  <UpdateAll task={task} setTask={setTask}></UpdateAll>
  </>
}

export default App
