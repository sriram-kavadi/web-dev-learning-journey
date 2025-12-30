import { useState } from "react"

export default function Input({task,setTask}){
    let [value,setvalue]=useState("");
    const onchange=(event)=>{
        let list=event.target.value;
        setvalue(list);
        console.log(value)
    }
    const submit=()=>{
        if(value===""){
            return
        }
        let task1=[...task,{
            list:value,
            isCompleted:false
        }];
        setTask(task1);
        setvalue("");
    }
    return <>
    <input type="text" value={value} onChange={onchange} />
    <button onClick={submit}>Add</button>
    </>
}