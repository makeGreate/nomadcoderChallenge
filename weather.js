

function success(position){
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const APIKEY = "da0cbf1b5b52647b313a81ace1461d13"
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`
  fetch(URL).then(response=>response.json()).then(data =>{
    const spanWeather = document.querySelector("#weather span:first-child")
    const spancity = document.querySelector("#weather span:last-child")
    const wheather =  data.weather[0].main
    const location = data.name
    spanWeather.innerText = wheather
    spancity.innerText = location
    
  })
}

function error(){
  alert("cant find you")
}

 
navigator.geolocation.getCurrentPosition(success, error)

