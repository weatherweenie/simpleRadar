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
else if (region == "northeast") { 
	regionName = "Northeast";
	stylesheet.href = "./stylesheets/regions/northeast.css";
	appendStations(region, regionName, ['kpbz', 'kakq', 'klwx', 'kccx', 'kbuf', 'ktyx', 'kbgm', 'kdox', 'kdix', 'kenx', 'kcxx', 'kokx', 'kbox', 'kgyx', 'kcbw', 'kfcx']);
}
else if (region == "pacsouthwest") { 
	regionName = "Pacific Southwest";
	stylesheet.href = "./stylesheets/regions/pacsouthwest.css";
	appendStations(region, regionName, ['kiwa', 'kyux', 'kicx', 'kmtx', 'klrx', 'kesx', 'krgx', 'kmax', 'kbhx', 'kbbx', 'kdax', 'kmux', 'khnx', 'kvbx', 'kvtx', 'keyx', 'ksox', 'knkx']);
}
else if (region == "southrockies") { 
	regionName = "Southern Rockies";
	stylesheet.href = "./stylesheets/regions/southrockies.css";
	appendStations(region, regionName, ['kpux', 'kgjx', 'kfdx', 'khdx', 'kabx', 'kepz', 'kemx', 'kiwa', 'kfsx', 'kicx', 'kesx', 'kyux', 'knkx', 'ksox', 'keyx', 'khnx', 'kvtx']);
}
else if (region == "southplains") { 
	regionName = "Southern Plains";
	stylesheet.href = "./stylesheets/regions/southplains.css";
	appendStations(region, regionName, ['kbro', 'kcrp', 'kdfx', 'kewx', 'khgx', 'klch', 'kgrk', 'kpoe', 'ksjt', 'kmaf', 'kepz', 'kdyx', 'kfws', 'kshv', 'khdx', 'klbb', 'kfdr', 'kfdx', 'klzk', 'ksrx', 'ktlx', 'kama', 'kabx', 'kinx', 'kvnx', 'ksgf', 'kict', 'kddc']);
}
else if (region == "southmissvly") { 
	regionName = "Southern Mississippi Valley";
	stylesheet.href = "./stylesheets/regions/southmissvly.css";
	appendStations(region, regionName, ['ktbw', 'ktlh', 'kvax', 'kjgx', 'kffc', 'kgsp', 'kmrx', 'kjkl', 'klvx', 'khpx', 'kvwx', 'kpah', 'khtx', 'kgwx', 'kbmx', 'kmxx', 'keox', 'kevx', 'kmob', 'kdgx', 'knqa', 'ksgf', 'klzk', 'khdc', 'klch', 'kpoe', 'kshv', 'ksrx', 'kinx', 'khgx', 'kcrp', 'kgrk', 'kfws', 'ktlx', 'kict', 'kbro', 'kohx']);
}
else if (region == "southeast") { 
	regionName = "Southeast";
	stylesheet.href = "./stylesheets/regions/southeast.css";
	appendStations(region, regionName, ['kmhx', 'krax', 'kltx', 'kclx', 'kcae', 'kgsp', 'kmrx', 'kohx', 'khtx', 'kffc', 'kjgx', 'kvax', 'kjax', 'kmlb', 'kamx', 'ktbw', 'ktlh', 'keox', 'kmxx', 'kbmx', 'kevx', 'kmob', 'kgwx', 'kdgx', 'khdc', 'knqa', 'kbyx']);
}

else if (region == "alaska") { 
	regionName = "Alaska";
	stylesheet.href = "./stylesheets/regions/alaska.css";
	appendStations(region, regionName, ['pacg', 'paih', 'papd', 'pahg', 'pakc', 'pabc', 'paec']);
}
else if (region == "guam") { 
	regionName = "Guam";
	stylesheet.href = "./stylesheets/regions/guam.css";
	appendStations(region, regionName, ['pgua']);
}
else if (region == "hawaii") { 
	regionName = "Hawaii";
	stylesheet.href = "./stylesheets/regions/hawaii.css";
	appendStations(region, regionName, ['phwa', 'phkm', 'phmo', 'phki']);
}
else if (region == "tjua") { 
	regionName = "Puerto Rico";
	stylesheet.href = "./stylesheets/regions/tjua.css";
	appendStations(region, regionName, ['tjua']);
}
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


