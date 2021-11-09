import './style.css';
import HomeImage from './home1.jpg';

console.log('You got webpack working! Wow!')

// Title of the current page
document.title = "Cafe Bonat"

//creating the Navigation Bar 
let navBar = document.createElement("div");
navBar.setAttribute("id", "navBar")
document.body.appendChild(navBar);

//creating the logo and adding it to the navigation bar
let logo = document.createElement("div");
logo.setAttribute("id", "logo");
logo.textContent = "Cafe Bonat";
navBar.appendChild(logo);

let navList = document.createElement("div");
navList.setAttribute("id", "navList");
// navList.textContent= "DELETE MEEEEEEEE!!!!!!!";
navBar.appendChild(navList);

let homeLink = document.createElement("div");
homeLink.setAttribute("id", "homeLink");
homeLink.textContent = "|Home|";
// homeLink.setAttribute("href", "file:///home/kasey/GitProjects/the_odin_project/Restaurant/dist/index.html");
homeLink.classList.add("navLink");
navList.appendChild(homeLink);

let menuLink = document.createElement("div");
menuLink.textContent = "|Menu|";
// menuLink.setAttribute("href", "file:///home/kasey/GitProjects/the_odin_project/Restaurant/dist/index.html");
menuLink.classList.add("navLink");
navList.appendChild(menuLink);

let aboutUsLink = document.createElement("div");
aboutUsLink.textContent = "|About Us|";
// aboutUsLink.setAttribute("href", "file:///home/kasey/GitProjects/the_odin_project/Restaurant/dist/index.html");
aboutUsLink.classList.add("navLink");
navList.appendChild(aboutUsLink);



//creating the content div that stores the current layout of the page
let content = document.createElement("div");
content.setAttribute("id", "content");
// document.getElementById("content").classList.add("content");

//creating the homepage image
const myPicture = new Image();
myPicture.src = HomeImage;
content.appendChild(myPicture);

document.body.appendChild(content);