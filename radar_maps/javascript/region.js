console.log("hello!");

const urlParams = new URLSearchParams(window.location.search);
const region = urlParams.get('region');

console.log(region);

regionanchor = document.getElementById("regionanchor");
regionspan = document.getElementById("regionspan");

//lookup table for region ids, a bit tedious
if (region == "pacnorthwest") { regionName = "Pacific Northwest";}
if (region == "northrockies") { regionName = "North Rockies";}
if (region == "uppermissvly") { regionName = "Upper Mississippi Valley";}
if (region == "centgrlakes") { regionName = "Central Great Lakes";}
if (region == "northeast") { regionName = "Northeast";}
if (region == "pacsouthwest") { regionName = "Pacific Southwest";}
if (region == "southrockies") { regionName = "Southern Rockies";}
if (region == "southplains") { regionName = "Southern Plains";}
if (region == "southmissvly") { regionName = "Southern Mississippi Valley";}
if (region == "southeast") { regionName = "Southeast";}

if (region == "alaska") { regionName = "Alaska";}
if (region == "guam") { regionName = "Guam";}
if (region == "hawaii") { regionName = "Hawaii";}
if (region == "tjua") { regionName = "Puerto Rico";}
console.log(regionName);

if (['guam', 'hawaii', 'alaska', 'tjua'].includes(region)) { //if the region is any of these
	conusanchor.href = "./conus.html";
	conusanchor.innerText = "CONUS";
	conusspan.innerText = " | ";
	regionspan.innerText = regionName;
}

else { //if it's any of the regions within conus
	conusanchor.href = "./conus.html";
	conusanchor.innerText = "CONUS";
	conusspan.innerText = " > ";
	regionspan.innerText = regionName;
}

regionCapitalized = region.toUpperCase();

document.getElementById("mainImg").src = "https://radar.weather.gov/ridge/standard/" + regionCapitalized + "_loop.gif";
