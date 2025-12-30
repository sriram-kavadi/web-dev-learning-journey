export default function Player({obj}){
    let style={backgroundColor:`${obj.playerColor}`}

    let update=()=>{
        obj.setCount();
    }

    return<>
    <p>{obj.playerColor} moves : {obj.count}</p>
    <button onClick={update} style={style}>+1</button>
    </>

}