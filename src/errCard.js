// errorCard.js

export default function errorCard(location) {
	return `
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Error:</strong>
            <span class="block sm:inline">Failed to fetch weather data for ${location}. Please check the location name and try again.</span>
        </div>
    `;
}
