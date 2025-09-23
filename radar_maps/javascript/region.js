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
	appendStations(region, regionName, ['katx', 'klgx', 'krtx', 'kmax', 'kbhx', 'kbbx', 'kdax', 'kmux', 'khnx', 'kpdt', 'krgx', 'kotx', 'kcbx', 'klrx', 'kmsx', 'ksfx', 'kmtx', 'kicx', 'ktfx']);
}
else if (region == "northrockies") { 
	regionName = "North Rockies";
	stylesheet.href = "./stylesheets/regions/northrockies.css";
	appendStations(region, regionName, ['kcbx', 'klrx', 'kmsx', 'ksfx', 'kmtx', 'ktfx', 'kblx', 'kriw', 'kggw', 'kcys', 'kudx', 'kmbx', 'kbis', 'klnx', 'kgjx', 'kftg', 'kgld', 'kicx', 'kpux']);
}
else if (region == "uppermissvly") { 
	regionName = "Upper Mississippi Valley";
	stylesheet.href = "./stylesheets/regions/uppermissvly.css";
	appendStations(region, regionName, ['kmbx', 'kudx', 'kbis', 'kmvx', 'kabr', 'kfsd', 'klnx', 'kuex', 'koax', 'kgld', 'kddc', 'kvnx', 'kict', 'ktwx', 'kinx', 'ksgf', 'keax', 'klsx', 'kilx', 'kdvn', 'kdmx', 'karx', 'kmpx', 'kdlh']);
}
else if (region == "centgrlakes") { 
	regionName = "Central Great Lakes";
	stylesheet.href = "./stylesheets/regions/centgrlakes.css";
	appendStations(region, regionName, ['karx', 'kmkx', 'kgrb', 'kmqt', 'kdvn', 'kilx', 'klsx', 'kpah', 'kvwx', 'klot', 'kiwx', 'kgrr', 'kdtx', 'kapx', 'kcle', 'kiln', 'kiwx', 'kind', 'kvwx', 'khpx', 'klvx', 'kjkl', 'krlx', 'kpbz', 'kccx', 'kbuf', 'klwx', 'kfcx', 'kmrx', 'kohx']);
}
else if (region == "northeast") { regionName = "Northeast";}
else if (region == "pacsouthwest") { regionName = "Pacific Southwest";}
else if (region == "southrockies") { regionName = "Southern Rockies";}
else if (region == "southplains") { regionName = "Southern Plains";}
else if (region == "southmissvly") { regionName = "Southern Mississippi Valley";}
else if (region == "southeast") { regionName = "Southeast";}

else if (region == "alaska") { regionName = "Alaska";}
else if (region == "guam") { regionName = "Guam";}
else if (region == "hawaii") { regionName = "Hawaii";}
else if (region == "tjua") { regionName = "Puerto Rico";}
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


