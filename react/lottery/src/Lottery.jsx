import { useState } from "react"
import GetLottery from "./GetLottery"
import LotteryTicket from "./LotteryTicket"
import Display from "./Display";
import Data from "./Data";
export default function Lottery(){
    let [number,setNumber]=useState(null);
    let [won,setWon]=useState(false);
    let [n,setN]=useState(null);
    let [winData,setWinData]=useState(null);
    return<>
        <Data number={n} setNumber={setN} name={"Enter no of digit to generate"}></Data>
        <br />
        <Data number={winData} name={"Enter winning number"} setNumber={setWinData}></Data>
        <Display won={won} ></Display>
        <LotteryTicket number={number}></LotteryTicket>
        <GetLottery setNumber={setNumber} setWon={setWon} n={n} winData={winData}></GetLottery>
    </>
}