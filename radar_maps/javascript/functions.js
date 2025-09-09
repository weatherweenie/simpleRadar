function appendStations(region, stationArray) {
	for (station in stationArray) {
		station = stationArray[station];
		var stationanchor = document.createElement('a');
		stationanchor.classList.add("stationanchor");
		stationanchor.id = station + "anchor";
		stationanchor.href = "./station.html?station=" + station + "&region=" + region;
		stationanchor.title = station.toUpperCase();
		document.body.appendChild(stationanchor);
	}
}
