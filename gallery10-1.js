"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Coding Challenge 1

   Debug
   Author: Coding Challenge 1
   Date:   2022-03-01


*/

var captions = new Array(14);
captions[0]="International Space Station fourth expansion [2009]";
captions[1]="Assembling the International Space Station [1998]";
captions[2]="The Atlantis docks with the ISS [2001]"; 
captions[3]="The Atlantis approaches the ISS [2000]"; 
captions[4]="The Atlantis approaches the ISS [2000]"; 
captions[5]="International Space Station over Earth [2002]";
captions[6]="The International Space Station first expansion [2002]";
captions[7]="Hurricane Ivan from the ISS [2008]";
captions[8]="The Soyuz spacecraft approaches the ISS [2005]";
captions[9]="The International Space Station from above [2006]";
captions[10]="Maneuvering in space with the Canadarm2 [2006]";
captions[11]="The International Space Station second expansion [2006]";
captions[12]="The International Space Station third expansion [2007]";
captions[13]="The ISS over the Ionian Sea [2007]";

var htmlCode = "";

for (var i=0; i<14; i++) {
   htmlCode += "<figure>";
   htmlCode += "<img alt='' src='slide" + i + ".jpg' />";
   htmlCode += "<figcaption>" + captions[i] + "</figcaption>";
   htmlCode += "</figure>";
}

console.log(htmlCode)
// document.getElementById("gallery").innerHTML = htmlCode;
function myFunction(imgs) {
   // Get the expanded image
   var expandImg = document.getElementById("expandedImg");
   // Get the image text
   var imgText = document.getElementById("imgtext");
   // Use the same src in the expanded image as the image being clicked on from the grid
   expandImg.src = imgs.src;
   // Use the value of the alt attribute of the clickable image as text inside the expanded image
   imgText.innerHTML = imgs.alt;
   // Show the container element (hidden with CSS)
   expandImg.parentElement.style.display = "block";
 }