import Image from './cupobeans.jpeg'
import Image2 from './frenchQuarter.jpg'

function aboutUsTabClicked(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.title = "Cafe Bonat - About Us"
    let thisContent = document.getElementById("content");
    thisContent.textContent = "";

    //creating the main content for the page
    let mainContent = document.createElement("div");
    mainContent.setAttribute("id", "mainContent");
    thisContent.appendChild(mainContent);

  let aboutUsBanner = document.createElement("div");
    aboutUsBanner.id = "About Us Banner";
    aboutUsBanner.classList.add("menuBanner")
    aboutUsBanner.textContent = "About Us";
    mainContent.appendChild(aboutUsBanner);

  let menuDivider = document.createElement("div")
    menuDivider.id = "menuDivider"
    menuDivider.classList.add("menuDivider");
    mainContent.appendChild(menuDivider);


  let aboutUsInfo = document.createElement("div");
    aboutUsInfo.id = "About Us"
    aboutUsInfo.classList.add("aboutUsText");
    aboutUsInfo.textContent = "Founded in 1987 by Kendal Bonat, she brought her passion for New" 
     + " Orleans culture to Kentucky.";
    mainContent.appendChild(aboutUsInfo);

    // Container for the contact divs
    let aboutUsContainer = document.createElement("div");
    aboutUsContainer.id = "aboutUsContainer";
    aboutUsContainer.classList.add("menuContainer");
    mainContent.appendChild(aboutUsContainer);

    let aboutUsImage = document.createElement("img");
    aboutUsImage.classList.add('aboutUsImage');
    aboutUsImage.src = Image2;
    aboutUsImage.alt = "aboutUs";
    aboutUsContainer.appendChild(aboutUsImage);

    let contactUsInfo = document.createElement("div");
    contactUsInfo.id = "About Us"
    contactUsInfo.classList.add("aboutUsText");
    contactUsInfo.textContent = "Phone: 555-867-5309\r\nEmail: Kastlegate@cafeBonat.com\r\nAddress: 1234 Bourbon and Toulouse Street";
    aboutUsContainer.appendChild(contactUsInfo);




    //creating the pages footer
    let footer = document.createElement("div");
    footer.id = "footer";
    footer.textContent = "\u00A9 2021 Kasey Martin";
    thisContent.appendChild(footer);
    
    if (document.body.hasChildNodes()) {
        document.body.removeChild(document.body.childNodes[0]);
      }
      
    //creating the About us background image
    let aboutUsBackgroundImage = document.createElement("div")
    aboutUsBackgroundImage.setAttribute("id", "aboutUsBackgroundImage");
    document.body.insertBefore(aboutUsBackgroundImage, navBar);
    console.log("About Us Module worked");
}

export {aboutUsTabClicked};