import HomeImage from './home1.jpg';

function homeTabClicked(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.title = "Cafe Bonat"
    let contentHome = document.getElementById("content");
    contentHome.textContent = "";
    //creating the homepage image
    const myPicture = new Image();
    myPicture.src = HomeImage;
    contentHome.appendChild(myPicture);
    console.log("Home Module worked");
    // document.body.appendChild(contentHome);
    


}

export {homeTabClicked};