// let isAdmin = true

// // === porównanie
// // == porównanie
// if(isAdmin === true) {
//     console.log("Zalogowano jako admin")
// } 
// else {
//     console.log("Zwykły użytkownik")
// }
// let num = 5;

// //== sprawdzenie wartości 
// //=== sprawdzenie wartości i typu
// if(num == 7) {
//     console.log("Szczęśliwy numerek")
// }
// // większy od
// else if (num > 10) {
//     console.log("Numer jest większy od 10")
// }
// // mniejszy lub równy 5
// else if (num <= 5) {
//     console.log("Numer jest mniejszy od 5")
// }
// else {
//     console.log("ERROR")
// }

// const btn = document.getElementById("LoginBtn");
// const titleText = document.getElementById("Title")

// let isAdmin = false;
// let adult = true;

// const loginUser = () => {
//     idAdmin === true ? titleText.textContent = "Admin" : titleText.textContent = "User";
//     adult === true && console.log("Siema";)
//     //----------------------------------------------------
//     if(isAdmin ===true){
//         titleText.textContent = "Zalogowano jako administrator";
//     }
//     else{
//         titleText.textContent = "Zalogowano jako zwykły uzytkownik";
//     }
// }
// btn.addEventListener("click", loginUser)

const apiKey = "85c0d4be6b6f3e60a8f821be4a183b25";

const convertToCelsius = (temp) => {
    const result = `${(temp - 273.15).toFixed(1)}°C`;
    return result;
}

const showWeather = (weather) => {
    console.log(weather)
    const city = document.getElementById("CityName");
    const country = document.getElementById("Country");
    const clouds = document.getElementById("Clouds");
    const temperature = document.getElementById("Temperature");
    const temperaturemin = document.getElementById("TemperatureMin")
    const temperaturemax = document.getElementById("TemperatureMax");
    city.textContent = weather.name;
    country.textContent = weather.sys.country;
    clouds.textContent = weather.clouds.all;
    temperature.textContent = convertToCelsius(weather.main.temp);
    temperaturemin.textContent = convertToCelsius(weather.main.temp_min);
    temperaturemax.textContent = convertToCelsius(weather.main.temp_max);
    
}


const getWeatherByLocation = (info) => {
    console.log(info)
    const lon = info.coords.longitude;
    const lat = info.coords.latitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
    fetch(url)
    .then((res)=> res.json())
    .then((res)=> showWeather(res))
}

const getMyLocation = () => {
    navigator.geolocation.getCurrentPosition((pos)=>getWeatherByLocation(pos))

}
getMyLocation()

// const city = {
//     name: "Katowice",
//     population: 432500,
//     size: 'Duże miasto',
//     streets: {
//         main: "coś tam",
//         small: "aaaa"
//     }
// }

// console.log(city.population)