import { useState } from "react"

export default function Data({number,setNumber,name}){
    let style={color:"green"}
    let [value,setValue]=useState(null);
    const input=(event)=>{
        value=parseInt(event.target.value);
        setValue(value);
    }
    const button=(event)=>{
        setNumber(value);
        console.log("saved!!")
    }
    return <>
    <input type="number" placeholder={`${name}`} onChange={input} value={value}/>
    <button onClick={button}>Save</button>
    {number!=null?<i style={style}>saved!!</i>:null}
    </>
}