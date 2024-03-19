async function DiplayGIf(searchKeyWord) {
	const apiKEy = '90tSbZhL9tkytFOrIoHfIEyfEvIOZwnx';
	try {
		const response = await fetch(
			`https://api.giphy.com/v1/gifs/translate?api_key=${apiKEy}&s=${searchKeyWord}`,
			{
				mode: 'cors',
			}
		);

		const data = await response.json();
		console.log(data);

		// eslint-disable-next-line no-use-before-define
		img.src = data.data.images.original.url;
		console.log(data.data.images.original.url);
		// eslint-disable-next-line no-use-before-define
		document.body.appendChild(img);
	} catch (err) {
		console.error(err);
	}
}
const img = document.createElement('img');
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const search = document.querySelector('#search');
	if (search.value !== '') {
		DiplayGIf(search.value);
	}
});
