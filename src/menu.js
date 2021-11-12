function menuTabClicked(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.title = "Cafe Bonat - Menu"
    let contentMenu = document.getElementById("content");
    contentMenu.textContent = "";
    //creating the homepage image
    if (document.body.hasChildNodes()) {
        document.body.removeChild(document.body.childNodes[0]);
      } 
    let menuBackgroundImage = document.createElement("div")
    menuBackgroundImage.setAttribute("id", "menuBackgroundImage");
    document.body.insertBefore(menuBackgroundImage, navBar);
    console.log("Menu Module worked");
}

export {menuTabClicked}