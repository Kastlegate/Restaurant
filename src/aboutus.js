import Image from './cupobeans.jpeg'

function aboutUsTabClicked(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.title = "Cafe Bonat - About Us"
    let thisContent = document.getElementById("content");
    thisContent.textContent = "";

    //creating the main content for the page
    let mainContent = document.createElement("div");
    mainContent.setAttribute("id", "mainContent");
    mainContent.textContent = "HEEEEEEY HEEEEEEEY HEEEEEEY"
    thisContent.appendChild(mainContent);

    //creating the pages footer
    let footer = document.createElement("div");
    footer.id = "footer";
    footer.textContent = "\u00A9 2021 Kastlegate Designs";
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