import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from './Player'

function App() {
  let [blueCount,setBlueCount]=useState(0)
  let [yellowCount,setYellowCount]=useState(0)
  let [greenCount,setGreenCount]=useState(0)
  let [redCount,setRedCount]=useState(0)
  let players=[
    {
      playerColor:"blue",
      count:blueCount,
      setCount(){
        setBlueCount(blueCount+1);
      }
    },
    {
      playerColor:"yellow",
      count:yellowCount,
      setCount(){
        setYellowCount(yellowCount+1);
      }
    },
    {
      playerColor:"green",
      count:greenCount,
      setCount(){
        setGreenCount(greenCount+1);
      }
    },
    {
      playerColor:"red",
      count:redCount,
      setCount(){
        setRedCount(redCount+1);
      }
    }
  ]
  return (
    <>
      <Player obj={players[0]}></Player>
      <Player obj={players[1]}></Player>
      <Player obj={players[2]}></Player>
      <Player obj={players[3]}></Player>
    </>
  )
}

export default App
