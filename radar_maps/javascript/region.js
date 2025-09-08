console.log("hello!");
const urlParams = new URLSearchParams(window.location.search);
const region = urlParams.get('region');
console.log(region);

regionanchor = document.getElementById("regionanchor");
regionspan = document.getElementById("regionspan");
stylesheet = document.getElementById("stylesheet");
mainImg = document.getElementById("mainImg");

regionCapitalized = region.toUpperCase();


mainImg.src = "https://radar.weather.gov/ridge/standard/" + regionCapitalized + "_loop.gif";

//for these: set the region name,
//and then set the style sheet,
//and then pass an array of each radar station in the region to a function that will add an anchor to the document for each one
//the appendStation function can only be used from the other file if that file is also loaded as a <script> in the document before this file is
if (region == "pacnorthwest") { 
	regionName = "Pacific Northwest";
	stylesheet.href="./stylesheets/regions/pacnorthwest.css";
	appendStations(['katx', 'klgx']);
}
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


