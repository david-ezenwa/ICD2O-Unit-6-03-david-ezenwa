document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5&units=metric';

  async function getWeather() {
    try {
      console.log('Fetching weather data...');
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Weather data:', data);

      const weatherDescription = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      const temperature = data.main.temp;
      const cityName = data.name;

      document.getElementById('description').textContent = weatherDescription;
      document.getElementById('icon').src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
      document.getElementById('temperature').textContent = `${temperature}°C`;
      document.getElementById('city').textContent = cityName;
    } catch (error) {
      console.error('Error fetching the weather data:', error);
      document.getElementById('description').textContent = 'Error fetching the weather data';
    }
  }

  getWeather();
});
