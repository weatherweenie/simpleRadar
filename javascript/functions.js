function appendStations(region, regionName, stationArray) {
	console.log("function appendstations()");
	for (station in stationArray) {
		station = stationArray[station];
		var stationanchor = document.createElement('a');
		stationanchor.classList.add("stationanchor");
		stationanchor.id = station + "anchor";
		stationanchor.href = "./station.html?station=" + station + "&region=" + region + "&regionName=" + regionName;
		stationanchor.title = station.toUpperCase();
		document.body.appendChild(stationanchor);
	}
}

function switchImg() {
	//if img is showing velocity, switch it to reflectivity
        if (mainImg.src.includes("base_velocity")) {
		mainImg.src = "https://radar.weather.gov/ridge/standard/" + stationCapitalized + "_loop.gif";
        }

	//if the current img isn't velocity, switch it to that
        else {	
		mainImg.src = "https://radar.weather.gov/ridge/standard/base_velocity/" + stationCapitalized + "_loop.gif";
        }
}

