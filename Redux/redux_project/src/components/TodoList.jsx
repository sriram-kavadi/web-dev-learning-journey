import { useSelector } from "react-redux"
import AddForm from "./AddForm"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteTodo } from "../features/todo/todoSlice"
import { markDone } from "../features/todo/todoSlice"
export default function TodoList(){
    const todo=useSelector((state)=>{
        return state.todo.value
    })
    console.log(todo)
    const dispatch=useDispatch();
    const onDelete=(event)=>{
        dispatch(deleteTodo(event.target.value))
    }
    const onMarkDone=(event)=>{
        dispatch(markDone(event.target.value))
    }
    return <>
    <AddForm></AddForm>
    <h2>Todos</h2>
    <ul>
    {todo.map(ele=>{
        return <li style={ele.isDone?{textDecoration: "line-through"}:null} key={ele.id}>{ele.task} <button value={ele.id} onClick={onDelete}>Delete</button> <button value={ele.id} onClick={onMarkDone}>mark as done</button></li>
    })}
    </ul>
    </>
}