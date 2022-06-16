const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const API_KIY = "a6b47aa7af0f71a61dedddc4d4a3f5e7";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KIY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.querySelector(".weather span:last-child");
      const city = document.querySelector(".weather span:first-child");
      city.innerText = data.name + " /";
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}˚C`;
    });
};

const onGeoError = () => {
  alert("Can't find you. No weather for you");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
