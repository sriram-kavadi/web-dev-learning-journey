import { useState ,useEffect} from "react"

export default function Counter(){
    let [countVariable,setCountVariable]=useState(0);
    let increase=()=>{
        setCountVariable(countVariable+1);
    }
    useEffect(function call(){
        console.log("updating the count")
    })
    return <>
    <h1>count : {countVariable}</h1>
    <button onClick={increase} >Increase</button>
    </>
}