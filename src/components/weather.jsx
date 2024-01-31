import { useState } from "react";
import axios from 'axios'

function Weather(){

    const[city,setcity]=useState("")
    const[weather,setweather]=useState("")
    const[temp,settemp]=useState("")
    const[desc,setdesc]=useState("")
    function handlecity(event){
        setcity(event.target.value)
    }

    function getweather(){
        var weatherdata= axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ecfe433cb679deb0093db7bd10ac35a2`);
    weatherdata.then(function(success){
        console.log(success.data)
        setweather(success.data.weather[0].main)
        settemp(success.data.main.temp)
        setdesc(success.data.weather[0].description)
    })
    }
    return(
        <div className="bg-black p-12">
            <div className="bg-green-600 p-10 rounded-md">
            <h1 className="font-bold text-2xl">Weather Report</h1>
            <p className="py-2">I can give you weather report about your city!</p>
            <input onChange={handlecity} className="border-black rounded-md p-1" placeholder="Enter Your City Name"></input><br></br>
            <button onClick={getweather} className="bg-black text-white p-2 my-2 rounded-md">Get Report</button>
            <p className="font-bold">Weather:  {weather}</p>
            <p className="font-bold">Temperature:  {temp}</p>
            <p className="font-bold">Description:  {desc}</p>
            </div>
        
        </div>
    )


}
export default Weather;