import Image from './cupobeans.jpeg'

function aboutUsTabClicked(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.title = "Cafe Bonat - About Us"
    let contentABoutUs = document.getElementById("content");
    contentABoutUs.textContent = "";
    
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