function menuTabClicked(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.title = "Cafe Bonat - Menu"
    let contentMenu = document.getElementById("content");
    contentMenu.textContent = "";
    //creating the homepage image
    let menuBackgroundImage = document.createElement("div")
    menuBackgroundImage.setAttribute("id", "menuBackgroundImage");
    contentMenu.appendChild(menuBackgroundImage);
    console.log("Menu Module worked");
}

export {menuTabClicked}