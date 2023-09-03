import React from 'react';
import "./weather.css";
import cloud from "../images/cloud.png"

const weather=()=> {

  let apiKey="c197500f97fec2157d38a5f327bd5b45";

  const search=async()=>{
     const element=document.getElementsByClassName("city");
 
     if(element[0].value===''){
       return 0;
     }
     
     let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;
 
     let response=await fetch(url);
     let data=await response.json();
 
     const humidity=document.getElementsByClassName("humidity-percent");
     const temp=document.getElementsByClassName("weather_temp");
 
     const location=document.getElementsByClassName("weather_location");

     const windspeed=document.getElementsByClassName("windspeed");
 
     humidity[0].innerHTML=data.main.humidity+"% humidity";
     windspeed[0].innerHTML=data.wind.speed+"Km/hr windspeed";
     temp[0].innerHTML=data.main.temp+"°C";
     location[0].innerHTML=data.name;
     console.log(data);
 
  }
 
 
   return (
     <div className="Weather">
       <h1>Weather</h1>
       <div className='input'>
         <input className="city" type="text" placeholder="Search" aria-label="Search"/>
         <button className="Search-icon" type="submit" onClick={()=>search()}>Search</button>
        </div>
        <div><img src={cloud}/></div>
        <div className='details'>
          <div className="weather_temp" style={{fontSize: "xx-large"}}>24 °C</div>
          <div className="weather_location" style={{fontSize: "xxx-large"}}>Pune</div>
          <div className="data-container">
            <div className="data">
              <div className="humidity-percent" style={{fontSize: "x-large"}}>
                64 % humididty
              </div>
              <div className="windspeed" style={{fontSize: "x-large"}}>74 windspeed</div>
            </div>
          </div>
       </div>
 
     </div>
   )
}

export default weather