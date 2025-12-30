export default function DeleteAll({task,setTask}){
    let onclick=()=>{
        let task1=[];
        setTask(task1);
    }
    return <>
    <button onClick={onclick}>Delete All List</button>
    </>
}