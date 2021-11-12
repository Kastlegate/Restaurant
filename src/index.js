import './style.css';
import { homeTabClicked } from './home';
import { menuTabClicked } from './menu';
import { aboutUsTabClicked } from './aboutus';

// Title of the current page
document.title = "Cafe Bonat"

//creating the Navigation Bar 
let navBar = document.createElement("div");
navBar.setAttribute("id", "navBar")

//creating the logo and adding it to the navigation bar
let logo = document.createElement("div");
logo.setAttribute("id", "logo");
logo.textContent = "Cafe Bonat";
navBar.appendChild(logo);

let navList = document.createElement("div");
navList.setAttribute("id", "navList");
// navList.textContent= "DELETE MEEEEEEEE!!!!!!!";
navBar.appendChild(navList);

//creating the content div that stores the current layout of the page
let content = document.getElementById("content");
document.body.insertBefore(navBar, content);


//creates the 'home' tab
let homeLink = document.createElement("div");
homeLink.setAttribute("id", "homeLink");
homeLink.textContent = "|Home|";
homeLink.classList.add("navLink");
homeLink.addEventListener("click", homeTabClicked);
navList.appendChild(homeLink);

//creates the 'menu' tab
let menuLink = document.createElement("div");
menuLink.setAttribute("id", "menuLink");
menuLink.textContent = "|Menu|";
menuLink.classList.add("navLink");
menuLink.addEventListener("click", menuTabClicked);
navList.appendChild(menuLink);

//creates the 'about us' tab
let aboutUsLink = document.createElement("div");
aboutUsLink.setAttribute("id", "aboutUsLink");
aboutUsLink.textContent = "|About Us|";
aboutUsLink.classList.add("navLink");
aboutUsLink.addEventListener("click", aboutUsTabClicked);
navList.appendChild(aboutUsLink);

// calling the home page function for the initial pageload
homeTabClicked();

// document.body.appendChild(content);