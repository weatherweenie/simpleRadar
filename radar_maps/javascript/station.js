console.log("hello!");

const urlParams = new URLSearchParams(window.location.search);
const region = urlParams.get('region');
const station = urlParams.get('station');
const regionName = urlParams.get('regionName');

console.log(region + ", " + station);

region1anchor = document.getElementById("region1anchor");
region2anchor = document.getElementById("region2anchor");
region1span = document.getElementById("region1span");
region2span = document.getElementById("region2span");
stationspan = document.getElementById("stationspan");

regionCapitalized = region[0].toUpperCase() + region.slice(1);
stationCapitalized = station.toUpperCase();
console.log(stationCapitalized);

if (['guam', 'hawaii', 'alaska', 'tjua'].includes(region)) { //if the region is any of these
	region1anchor.href = "./conus.html";
	region1anchor.innerText = "CONUS";
	region1span.innerText = " | ";
	region2anchor.href = "./region.html?region=" + region;
	region2anchor.innerText = regionName;
	region2span.innerText = " > ";
	stationspan.innerText = stationCapitalized;
	
}

else { //if it's any of the regions within conus
	region1anchor.href = "./conus.html";
	region1anchor.innerText = "CONUS";
	region1span.innerText = " > ";
	region2anchor.href = "./region.html?region=" + region;
	region2anchor.innerText= regionName;
	region2span.innerText = " > ";
	stationspan.innerText = stationCapitalized;
}

document.getElementById("mainImg").src = "https://radar.weather.gov/ridge/standard/" + stationCapitalized + "_loop.gif";
