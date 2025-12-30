import { useState } from "react";
export default function List({task,setTask}){
    let [editIndex,setIndex]=useState(null);
    let [editValue,setValue]=useState("");
    let style = { textDecoration: "line-through" };
    let onupdate=(event)=>{
        let index=parseInt(event.target.value);
        setIndex(index);
        setValue(task[index].list);
    }

    const onchange=(event)=>{
        let list=event.target.value;
        setValue(list);
    }

    let submit=(event)=>{
        const updated = [...task];
        updated[editIndex].list = editValue;
        setTask(updated);
        setIndex(null);
        setValue("");
    }

    let ondelete=(event)=>{
        let value=event.target.value;
        task=task.filter((ele,index)=>{
            return index!=value
        })
        setTask([...task]);
    }
    let oncomplete=(event)=>{
        let index=event.target.value;
        let duplicate=[...task];
        duplicate[index].isCompleted=true;
        setTask(duplicate);
    }
    return <>
    <div>
        {
        task.map((ele,index)=>
            index===editIndex?(
                <>
                <div>
                    <input type="text" value={editValue} onChange={onchange} />
                    <button onClick={submit}>Save</button>
                </div>
                </>
            ):(
                <>
                <div>
                    <b style={{textDecoration:ele.isCompleted?"line-through" : "none"}}>{ele.list}</b>
                    {!(ele.isCompleted)?<button onClick={onupdate} value={index}>Update</button>:null}
                    <button onClick={ondelete} value={index}>Delete</button>
                    {!(ele.isCompleted)?<button onClick={oncomplete} value={index}>Completed</button>:null}
                </div>
                </>
            )
            )
        }
    </div>
    </>
}