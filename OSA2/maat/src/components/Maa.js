import { useEffect, useState } from "react"
//import maaService from './services/maat'
import weatherService from '../services/weather'
const Maa =(props)=>{
  //debugger
  const [weather,setWeather]=useState('')
  //const [latlng,setLatlng]=useState('')
  const api_key = process.env.REACT_APP_API_KEY
  console.log('api_key',api_key)
  useEffect(() => {
    //debugger
    //console.log('effect_weather')
    //console.log('latitude is ',props.maa.latlng)
    //http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID={api_key}
    weatherService
    .getByName(props.maa.latlng[0],props.maa.latlng[1],'app')
    .then(returnedWeather => {
      //console.log('promise weather fulfilled')
      //console.log('returned.data=',returnedWeather.data)
      //console.log('returned weather temp:',returnedWeather.data.main.temp)
      //console.log('returned weather speed:',returnedWeather.data.wind.speed)
      //console.log('returned weather icon:',returnedWeather.data.weather[0].icon)
      const url=`https://openweathermap.org/img/wn/`
      const weather = {temp:returnedWeather.data.main.temp,
                       windspeed: returnedWeather.data.wind.speed,
                       icon: url.concat(returnedWeather.data.weather[0].icon,'@2x.png' )

      }
      //`https://openweathermap.org/img/wn/04d@2x.png`
      //const weather1 = returnedMaa.data.map((item) =>({latlng: item.latlng}))
      //console.log('weather=',weather)
      //console.log('weather1=',weather1[0].latlng)
      setWeather(weather)
      //setLatlng(weather1[0].latlng)
    })
  }, [])
  if (props.maa){
    const lang=[]
   
    //
    //esimerkkiObject.keys(props.maa.languages).forEach((item)=> { console.log("kuku"); console.log(`${props.maa.languages[item]}`) })
    Object.keys(props.maa.languages).forEach((item)=> {
      console.log(`${props.maa.languages[item]}`)
      lang.push(props.maa.languages[item])
    })
    
    
    //console.log('lang=',lang)
    //console.log(JSON.stringify(props.maa.languages))
   return(
   <>
   
   <h1>{props.maa.name}</h1> 
   <p>capital {props.maa.capital}</p>
   <p>area {props.maa.area}</p>
   <h2>languages</h2>
   <>
   
      {lang.map((item,index)=>(<li key={index}> {item}</li>))} 
           
    </>
    <p></p>
    <img src={props.maa.flag} alt='' />
    <h2>Weather in {props.maa.capital}</h2>
     <p>temperature is {weather.temp} Celsius</p> 
     <div className="
     frame">
      <img src={weather.icon}  alt='' />
    </div>
     <p>wind is {weather.windspeed} m/s</p> 
   </>
   )
 }
 return(
  <></>
)
 }
 
export default Maa