function menuTabClicked(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.title = "Cafe Bonat - Menu"
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
    footer.textContent = "Design by Kastlegate";
    thisContent.appendChild(footer);

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