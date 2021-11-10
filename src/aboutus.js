import AboutUsImage from './cupobeans.jpeg'

function aboutUsTabClicked(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.title = "Cafe Bonat - About Us"
    let contentABoutUs = document.getElementById("content");
    contentABoutUs.textContent = "";
    //creating the About us background image
    const myPicture = new Image();
    myPicture.src = AboutUsImage;
    contentABoutUs.appendChild(myPicture);
    console.log("About Us Module worked");
}

export {aboutUsTabClicked};