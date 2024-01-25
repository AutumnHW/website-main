var backgroundURL = 0;
var backgroundID = Math.floor(Math.random() * 7);
backgroundURL = "url(microsoft/" + backgroundID + ".jpg)";
document.getElementById('background').style.backgroundImage = backgroundURL;