import axios from 'axios'


//https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'


const getByName = (lat,lon,apikey) => {
  console.log(`${baseUrl}lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`)
  return axios.get(`${baseUrl}lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`)
}


export default { 
  getByName: getByName
}