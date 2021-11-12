function menuTabClicked(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.title = "Cafe Bonat - Menu"
    let thisContent = document.getElementById("content");
    thisContent.textContent = "";

    //creating the main content for the page
    let mainContent = document.createElement("div");
    mainContent.setAttribute("id", "mainContent");
    thisContent.appendChild(mainContent);

    let foodItems = document.createElement("div")
    foodItems.classList.add("menuBanner");
    foodItems.textContent = "Food"
    mainContent.appendChild(foodItems);

    //container to hold each menu item's div
    let menuContainer = document.createElement("div");
    menuContainer.id = "menuContainer";
    mainContent.appendChild(menuContainer)
    
    // Divs for each item on the menu
    let menuItem1 = document.createElement("div")
    menuItem1.id = "menuItem1";
    menuItem1.classList.add("menuItem");
    menuContainer.appendChild(menuItem1);

    let menuItem2 = document.createElement("div")
    menuItem2.id = "menuItem2";
    menuItem2.classList.add("menuItem");
    menuContainer.appendChild(menuItem2);

    let menuItem3 = document.createElement("div")
    menuItem3.id = "menuItem3";
    menuItem3.classList.add("menuItem");
    menuContainer.appendChild(menuItem3);

    let menuItem4 = document.createElement("div")
    menuItem4.id = "menuItem4";
    menuItem4.classList.add("menuItem");
    menuContainer.appendChild(menuItem4);

    let menuItem5 = document.createElement("div")
    menuItem5.id = "menuItem5";
    menuItem5.classList.add("menuItem");
    menuContainer.appendChild(menuItem5);

    //creating the pages footer
    let footer = document.createElement("div");
    footer.id = "footer";
    footer.textContent = "\u00A9 2021 Kastlegate Designs";
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