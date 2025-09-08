function appendStations(stationArray) {
	for (station in stationArray) {
		station = stationArray[station];
		var stationanchor = document.createElement('a');
		stationanchor.classList.add("stationanchor");
		stationanchor.id = station + "anchor";
		stationanchor.href = "./station.html?station=" + station;
		document.body.appendChild(stationanchor);
	}
}
