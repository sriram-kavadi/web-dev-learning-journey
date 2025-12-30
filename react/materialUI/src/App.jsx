import { useState } from "react"
import SearchBox from "./SearchBox"
import Data from "./Data";
import { useEffect } from "react";
export default function App(){
  let style={color:"red"};
  let [place,setPlace]= useState("");
  let [error,setError]=useState(false);
  let [geoCoodinates,setGeoCoodinates]=useState({
    lat:"",
    lon:""
  })
  let [details,setDetails]=useState({});
  function getWeatherState(details) {
    let temp=details.temp
    let humidity=details.humidity
    let pressure=details.pressure
    if (temp >= 30 && humidity < 60) return "Hot_&_Dry";
    if (temp >= 30 && humidity >= 60) return "Hot_&_Humid";

    if (temp >= 20 && temp < 30) return "Warm";

    if (temp >= 10 && temp < 20 && humidity > 70) return "Cool_&_Humid";
    if (temp >= 10 && temp < 20) return "Cool";

    if (temp < 10) return "Cold";

    if (pressure < 1000) return "Stormy";

    return "Moderate";
  }
  useEffect(()=>{async function call(){
    if(place==""){return}
    if(!place){return}
    let tempUrl=`https://api.openweathermap.org/geo/1.0/direct?q=${place}&appid=b70decd180422341e82a1e801a50ff15`
    try{
      const config={Headers:{Accept:"application/json"}};
      let res=await axios.get(tempUrl,config);
      let lats=res.data[0].lat
      let lons=res.data[0].lon
      setGeoCoodinates({
        lat:lats,
        lon:lons
      })
      console.log("check")
      console.log(lats,lons);
    }catch(err){
      setError(true)
      console.log(err);
    }
  }call()},[place])
  useEffect(()=>{
    async function call() {
      if(geoCoodinates.lat==""&&geoCoodinates.lon==""){return}
      try{
      console.log("checking")
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${geoCoodinates.lat}&lon=${geoCoodinates.lon}&appid=b70decd180422341e82a1e801a50ff15&units=metric`;
      const res = await axios.get(url);
      console.log(res.data.main);
      setDetails({...res.data.main,places:place,condition:getWeatherState(res.data.main)});
      }catch(err){
        setError(true)
        console.log(err);
      }
    }
    call()
  },[geoCoodinates])
  return <>
  <h3>Search for weather</h3>
  <SearchBox setPlace={setPlace} setError={setError}></SearchBox>
  <h2>Weather Info</h2>
  {error? <h2 style={style}>Invalid City!</h2>:null}
  <Data place={place} details={details} error={error}></Data>
  </>
}