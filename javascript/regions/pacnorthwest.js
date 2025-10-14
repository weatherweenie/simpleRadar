console.log("pacnorthwest.js loaded");


var katx = document.createElement('a');
katx.id="katxanchor";;
//keep in mind where the href is referenced from- i think it'll be the location of the html file where the script is ran?
katx.href="./station.html?station=katx";
//add to the page - and then the css stylesheet should position it
document.body.appendChild(katx);
