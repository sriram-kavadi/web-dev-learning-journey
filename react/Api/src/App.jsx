import { useEffect } from "react";
import { useState } from "react";

export default function App(){
  let [joke,setJoke]=useState("");
  const url="https://api.api-ninjas.com/v1/dadjokes";
  async function getJoke() {
    const config={headers:{"X-Api-Key":"F/docVGxx13U/TakwLwYGA==I1zCKjaCstlIBZsq"}}
    try{
      let res=await axios.get(url,config);
      return res.data[0].joke;
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{async function call(){
    try{
      const newJoke = await getJoke();
      setJoke(newJoke);

    }catch(err){
      console.log(err);
    }
  }
  call()}
  ,[])
  return <>
  <h1>{joke}</h1>
  <button onClick={async () => {
    const newJoke = await getJoke();
    setJoke(newJoke);
  }}>
    Get Joke
  </button>

  </>
}