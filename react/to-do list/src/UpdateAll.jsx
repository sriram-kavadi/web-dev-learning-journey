import { useState } from "react"

export default function UpdateAll({task,setTask}){
    let [update,setUpdate]=useState(false);
    let [value,setValue]=useState("");
    let onclick=()=>{
        setUpdate(!update);
    }
    const onchange=(event)=>{
        setValue(event.target.value);
    }
    const submit=()=>{
        task=task.map(ele=>{
            return {list:value,
                isCompleted:false
            };
        })
        setTask([...task]);
        setValue("");
        setUpdate(!update)
    }
    return<>
    <div>
        {update?
            <>
                <input type="text" value={value} onChange={onchange} />
                <button onClick={submit}>Add</button>
            </>
        :<>
        <button onClick={onclick}>Update All</button>
        </>}
    </div>
    </>
}