export default function renderWeatherCard(city, c, f, feels, humidity, wind) {
	return `
    	<div
				id="weather-card"
				class= "backdrop-blur-md  bg-opacity-50 mt-20  min-h-80  sm:min-w-96 bg-gray-100 rounded-lg shadow-xl p-10 flex items-center flex-col"
			>
				<div id="city-name" class="font-bold text-2xl mb-5 bg-white bg-opacity-50 p-2 rounded-xl">${city}</div>
				<div id="c" class="font-semibold text-xl bg-white bg-opacity-50 p-2  rounded-xl">${c}°C</div>
				<div id="f" class="font-semibold text-xl mt-3 bg-white bg-opacity-50 p-2  rounded-xl">${f}°F</div>
				<div class="font-semibold text-xl mt-3 bg-white bg-opacity-50 p-2  rounded-xl">Feels Like: ${feels}°C</div>
				<div id="feels-like"></div>  
				<div class="font-semibold text-xl mt-3 bg-white bg-opacity-50 p-2  rounded-xl">Humidity: ${humidity}%:</div>
				<div id="humidity"></div>
				<div class="font-semibold text-xl mt-3 bg-white bg-opacity-50 p-2  rounded-xl">Wind: ${wind}km/h</div>
				<div id="wind"></div>
			</div>
    `;
}
