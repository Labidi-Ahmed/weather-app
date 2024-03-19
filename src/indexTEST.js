function fetchWeatherData() {
	const x = prompt('give a country name ');
	const apiKey = '847ef6e59b914c9694f145907241703';
	fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${x}`, {
		mode: 'cors',
	})
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
		})
		.catch((err) => {
			console.log(err);
		});
}

// without async await

/* function fetchImageData(searchKeyWord) {
	const apiKEy = '90tSbZhL9tkytFOrIoHfIEyfEvIOZwnx';
	fetch(
		`https://api.giphy.com/v1/gifs/translate?api_key=${apiKEy}&s=${searchKeyWord}`,
		{
			mode: 'cors',
		}
	)
		.then((response) => response.json())
		.then((response) => {
			// data destructuring
			const { images } = response.data;

			img.src = images.original.url;
			document.body.append(img);
		})
		.catch((err) => {
			console.log(err);
		});
}

fetchWeatherData();

const img = document.createElement('img');

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const search = document.querySelector('#search');
	if (search.value !== '') {
		fetchImageData(search.value);
	}
});
img.style.cssText = 'height:500px;width:500px;'; */

// First, get the user's location coordinates using the Geolocation API

// Then, pass the location coordinates to a Geocoding API to get the city name

/* const googleApiKey = 'AIzaSyC6t5fHg7zI_Sxp7AAbkCKve9TAji6wu2Y';
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(
		(position) => {
			const { latitude } = position.coords;
			const { longitude } = position.coords;

			// Make a request to a reverse geocoding API to get the city name
			const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleApiKey}`;

			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					// Parse the city name from the API response
					const city = data.results[0].address_components.find((component) =>
						component.types.includes('locality')
					).long_name;

					console.log(`Your current city is: ${city}`);
				})
				.catch((error) => console.error('Error fetching city:', error));
		},
		(error) => {
			console.error('Error getting current position:', error);
		}
	);
} else {
	console.error('Geolocation is not supported by this browser.');
}
 */

/* fetchWeatherData(); */

/* const img = document.createElement('img');

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const search = document.querySelector('#search');
	if (search.value !== '') {
		fetchImageData(search.value);
	}
});
img.style.cssText = 'height:500px;width:500px;';
 */
