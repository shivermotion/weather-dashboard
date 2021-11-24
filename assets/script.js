let feature = document.getElementById("feature");
//working api function - need to hook {city} into search bar?
function getOneCall() {
	var requestUrl =
		"https://api.openweathermap.org/data/2.5/forecast?q=Dallas&appid=7de4992e2cec27e41e75e10841c8d6f0";
	fetch(requestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			feature.textContent = data.city.name;
		});
}

// let search = document.getElementById("searchTxt").textContent;
// console.log(search);
