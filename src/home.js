function homeTabClicked(){
    // brings the focus back to the top of the screen when loaded
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    // Creates the page title
    document.title = "Cafe Bonat"

    //creates a variable for the content element in html
    let contentHome = document.getElementById("content");
    //resets the content div to be empty
    contentHome.textContent = "";
    
    //creating the main content for the page
    let mainContent = document.createElement("div");
    mainContent.setAttribute("id", "mainContent");
    mainContent.textContent = "HEEEEEEY HEEEEEEEY HEEEEEEY"
    contentHome.appendChild(mainContent);

    //creating the pages footer
    let footer = document.createElement("div");
    footer.id = "footer";
    footer.textContent = "Design by Kastlegate";
    contentHome.appendChild(footer);

    //checking for and removing a preexisting background if one exists.
    if (document.body.hasChildNodes()) {
        document.body.removeChild(document.body.childNodes[0]);
      } 

    //creating the homepage image
    let pageBackgroundImage = document.createElement("div")
    pageBackgroundImage.id = "pageBackgroundImage";
    document.body.insertBefore(pageBackgroundImage, navBar);
    
    
    console.log("Home Module worked");
    
    
    


}

export {homeTabClicked};