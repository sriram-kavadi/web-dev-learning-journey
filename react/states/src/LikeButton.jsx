import { useState } from "react";

export default function LikeButton(){
    let [check,setCheck]=useState(false);
    const changeBackground = (event) => {
        setCheck(!check);
        console.log(check);
        !check?event.target.style.color="red":event.target.style.color="white"
    };
    <i class="fa-solid fa-heart"></i>
    return <>
    <h1 ><i onClick={changeBackground} class={check?`fa-solid fa-heart`:`fa-regular fa-heart`}></i></h1>
    </>
}