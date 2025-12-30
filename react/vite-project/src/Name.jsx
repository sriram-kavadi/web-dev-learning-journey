function hover(){
    console.log("hovered...")
}

export default function Name({name,color}){
    let style={color:`${color}`};
    return<>
    <p onMouseEnter={hover} style={style}>{name}</p>
    </>
}