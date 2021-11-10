import Image from './cupobeans.jpeg'

function aboutUsTabClicked(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.title = "Cafe Bonat - About Us"
    let contentABoutUs = document.getElementById("content");
    contentABoutUs.textContent = "";
    //creating the About us background image
    let aboutUsBackgroundImage = document.createElement("div")
    aboutUsBackgroundImage.setAttribute("id", "aboutUsBackgroundImage");
    contentABoutUs.appendChild(aboutUsBackgroundImage);
    console.log("About Us Module worked");
}

export {aboutUsTabClicked};