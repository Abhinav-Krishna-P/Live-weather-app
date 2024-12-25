const apiKey = "914f646c89663b063e7717c83a9ddcbb";
const apiUrl = " https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbar=document.querySelector("#search input");
const searchbtn=document.querySelector("#search button");
const closebtn=document.querySelector("#search img");
const weathericon=document.querySelector("#weather-icon");
const weatherbox=document.querySelector("#weather");
const errbox=document.querySelector("#error")

async function checkweather(cityname) {
    const response = await fetch(apiUrl +cityname+`&appid=${apiKey}`); 

    if(response.status== 404){
        errbox.style.display="block";      
        weatherbox.style.display="none";
    }
   else{
    errbox.style.display="none";
    var data = await response.json();
    document.querySelector("#temp").innerHTML=Math.round(data.main.temp) + "°";
    document.querySelector("#city").innerHTML=data.name.toUpperCase();
    document.querySelector("#discription").innerHTML=data.weather[0].description;
    document.querySelector("#humidity").innerHTML=data.main.humidity + "%";
    document.querySelector("#wind").innerHTML=data.wind.speed + "km/h";
     
    weatherbox.style.display="block";
    
    if(data.weather[0].main=="Clouds"){
       weathericon.src ="./images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src ="./images/clear.png";
     }
     else if(data.weather[0].main=="Rain"){
        weathericon.src ="./images/rain.png";
     }
     else if(data.weather[0].main=="Drizzle"){
        weathericon.src ="./images/drizzle.png";
     }
     else if(data.weather[0].main=="Mist"){
        weathericon.src ="./images/mist.png";
     }
    
 }
   
}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbar.value);
})

closebtn.addEventListener("click",()=>{
    searchbar.value="";
})

