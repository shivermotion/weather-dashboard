let feature = document.getElementById("feature");
let currentTemp = document.getElementById("currentTemp");
let currentHumidity = document.getElementById("currentHumidity");
let currentWindSpeed = document.getElementById("currentWindSpeed");
// getOneCall is a working api function when clicking search button - still need to pass {city} input calue from  search bar into API
function getOneCall() {
	var requestUrl =
		//TODO://currently can only search "Dallas". Need to be able to pass an input value into the url for the api to search any city
		"https://api.openweathermap.org/data/2.5/forecast?q=Dallas&appid=7de4992e2cec27e41e75e10841c8d6f0";
	fetch(requestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			feature.textContent = data.city.name;
			console.log(data.city.name);
			currentTemp.textContent =
				"Temperature: " + data.list[0].main.temp;
			console.log(data.list[0].main.temp);
			currentHumidity.textContent =
				"Humidity: " + data.list[0].main.humidity;
			console.log(data.list[0].main.humidity);
			currentWindSpeed.textContent =
				"Wind Speed: " + data.list[0].wind.speed;
			console.log(data.list[0].wind.speed);
		});
}

// let search = document.getElementById("searchTxt").textContent;
// console.log(search);
