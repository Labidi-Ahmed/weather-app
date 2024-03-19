/* import renderWeatherCard from './weatherComponent.js'; */

import renderWeatherCard from './weatherComponent';
import errorCard from './errCard';
import './output.css';

async function fetchWeatherData(city) {
	const apiKey = '847ef6e59b914c9694f145907241703';
	try {
		const response = await fetch(
			`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`,
			{
				mode: 'cors',
			}
		);

		const data = await response.json();
		if (response.ok) {
			console.log(data);
			return data;
		}
	} catch (err) {
		console.log(err);
	}
}

const form = document.querySelector('form');
const card = document.querySelector('#card');
const gif = document.querySelector('#gif');

async function DiplayGIf(searchKeyWord) {
	gif.src = '';
	const apiKEy = '90tSbZhL9tkytFOrIoHfIEyfEvIOZwnx';
	try {
		const response = await fetch(
			`https://api.giphy.com/v1/gifs/translate?api_key=${apiKEy}&s=${searchKeyWord}`,
			{
				mode: 'cors',
			}
		);

		const data = await response.json();
		const weatherCard = document.getElementById('weather-card');
		if (response.ok) {
			weatherCard.style.backgroundImage = `url(${data.data.images.original.url})`;
			weatherCard.style.backgroundSize = 'cover';
			weatherCard.style.backgroundPosition = 'center';
			weatherCard.style.backgroundColor = 'rgba(0, 0, 0,3 )';
		}
	} catch (err) {
		console.error(err);
	}
}

async function processWeatherData(location) {
	const data = await fetchWeatherData(location);
	if (data) {
		const city = data.location.name;
		const tempc = data.current.temp_c;
		const tempf = data.current.temp_f;
		const feels = data.current.feelslike_c;
		const {humidity} = data.current;
		const wind = data.current.wind_kph;
		const weatherCard = renderWeatherCard(
			city,
			tempc,
			tempf,
			feels,
			humidity,
			wind
		);
		card.innerHTML = weatherCard;
		DiplayGIf(data.current.condition.text);
	} else {
		card.innerHTML = errorCard(location);
		gif.src = '';
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const location = document.querySelector('#location');
	if (location.value !== '') {
		processWeatherData(location.value);
	}
});
