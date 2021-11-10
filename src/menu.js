import MenuImage from './menu2.jpg';

function menuTabClicked(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.title = "Cafe Bonat - Menu"
    let contentMenu = document.getElementById("content");
    contentMenu.textContent = "";
    //creating the homepage image
    const myPicture = new Image();
    myPicture.src = MenuImage;
    contentMenu.appendChild(myPicture);
    console.log("Menu Module worked");
}

export {menuTabClicked}