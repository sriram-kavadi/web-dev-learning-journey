import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
export default function AddForm(){
    let dispatch=useDispatch();
    let [value,setValue]=useState("")
    const onsubmit=(event)=>{
        event.preventDefault();
    }
    const onchange=(event)=>{
        setValue(event.target.value);
    }
    const onclick=(event)=>{
        if(value===""){return}
        dispatch(addTodo(value))
        console.log(value)
        setValue("");
    }
    return <>
    <form onSubmit={onsubmit}>
        <input onChange={onchange} value={value} type="text" />
        <button onClick={onclick}>Add</button>
    </form>
    </>
}