import Image1 from './beignets.jpg';
import Image2 from './gumbo.jpg';
import Image3 from './muffaletta.jpg';
import Image4 from './cafeaulait.jpg';
import Image5 from './latte.jpg';

function menuTabClicked(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.title = "Cafe Bonat - Menu"
    let thisContent = document.getElementById("content");
    thisContent.textContent = "";

    //creating the main content for the page
    let mainContent = document.createElement("div");
    mainContent.setAttribute("id", "mainContent");
    thisContent.appendChild(mainContent);

    // Menu Banner
    let menu = document.createElement("div")
    menu.id = "menuBanner";
    menu.classList.add("menuBanner");
    menu.textContent = "Menu";
    mainContent.appendChild(menu);

    //Menu Divider

    let menuDivider1 = document.createElement("div")
    menuDivider1.id = "menuDivider-1"
    menuDivider1.classList.add("menuDivider");
    mainContent.appendChild(menuDivider1);

    //container to hold each menu item's div
    let menuContainer = document.createElement("div");
    menuContainer.id = "menuContainer";
    mainContent.appendChild(menuContainer)
    
    // Divs for each item on the menu

    //The food inside the menu. Beignets, gumbo, and muffaletta
    let menuItem1 = document.createElement("div")
    menuItem1.id = "menuItem1";
    menuItem1.classList.add("menuItem");
    let menuItem1Image = document.createElement("img");
    menuItem1Image.classList.add('menuImage');
    menuItem1Image.src = Image1;
    menuItem1.appendChild(menuItem1Image);
    let menuDivider2 = document.createElement("div")
    menuDivider2.id = "menuDivider-2"
    menuDivider2.classList.add("menuDivider");
    let menuItem1Text = document.createElement("div");
    menuItem1Text.textContent = "Beignets\r\n 3.99";
    menuItem1Text.classList.add("menuText");
    menuItem1.appendChild(menuItem1Text);
    menuContainer.appendChild(menuItem1);
    menuItem1.appendChild(menuDivider2);  
    // gumbo
    let menuItem2 = document.createElement("div")
    menuItem2.id = "menuItem2";
    menuItem2.classList.add("menuItem");
    let menuItem2Image = document.createElement("img");
    menuItem2Image.classList.add('menuImage');
    menuItem2Image.src = Image2;
    menuItem2.appendChild(menuItem2Image);
    let menuDivider3 = document.createElement("div")
    menuDivider3.id = "menuDivider-3"
    menuDivider3.classList.add("menuDivider");
    let menuItem2Text = document.createElement("div");
    menuItem2Text.textContent = "Chicken Andouille Gumbo\r\n Cup 4.99 Bowl 9.99";
    menuItem2Text.classList.add("menuText");
    menuItem2.appendChild(menuItem2Text);
    menuContainer.appendChild(menuItem2);
    menuItem2.appendChild(menuDivider3);
    //muffaletta
    let menuItem3 = document.createElement("div")
    menuItem3.id = "menuItem3";
    menuItem3.classList.add("menuItem");
    let menuItem3Image = document.createElement("img");
    menuItem3Image.classList.add('menuImage');
    menuItem3Image.src = Image3;
    menuItem3.appendChild(menuItem3Image);
    let menuDivider4 = document.createElement("div")
    menuDivider4.id = "menuDivider-4"
    let menuItem3Text = document.createElement("div");
    menuItem3Text.textContent = "Muffaletta\r\n 9.99";
    menuItem3Text.classList.add("menuText");
    menuItem3.appendChild(menuItem3Text);
    menuContainer.appendChild(menuItem3);
    menuDivider4.classList.add("menuDivider");
    menuItem3.appendChild(menuDivider4);  

    // Menu Banner for the coffee
    let menuCoffee = document.createElement("div")
    menuCoffee.id = "coffee";
    menuCoffee.classList.add("menuBanner");
    menuCoffee.textContent = "Coffee";
    mainContent.appendChild(menuCoffee);

    //coffee Divider
    let coffeeDivider = document.createElement("div")
    coffeeDivider.id = "coffeeDivider"
    coffeeDivider.classList.add("menuDivider");
    mainContent.appendChild(coffeeDivider);

    // Container for the coffee divs
    let coffeeMenuContainer = document.createElement("div");
    coffeeMenuContainer.id = "menuContainer";
    mainContent.appendChild(coffeeMenuContainer)

    // Cafe Au Lait
    let menuItem4 = document.createElement("div")
    menuItem4.id = "menuItem4";
    menuItem4.classList.add("menuItem");
    let menuItem4Image = document.createElement("img");
    menuItem4Image.classList.add('menuImage');
    menuItem4Image.src = Image4;
    menuItem4.appendChild(menuItem4Image);
    let menuDivider5 = document.createElement("div")
    menuDivider5.id = "menuDivider-5"; 
    menuDivider5.classList.add("menuDivider"); 
    let menuItem4Text = document.createElement("div");
    menuItem4Text.textContent = "Cafe Au Lait\r\n Hot or Iced";
    menuItem4Text.classList.add("menuText");
    menuItem4.appendChild(menuItem4Text);
    coffeeMenuContainer.appendChild(menuItem4);
    menuItem4.appendChild(menuDivider5);  

    // Latte
    let menuItem5 = document.createElement("div")
    menuItem5.id = "menuItem5";
    menuItem5.classList.add("menuItem");
    let menuItem5Image = document.createElement("img");
    menuItem5Image.classList.add('menuImage');
    menuItem5Image.src = Image5;
    menuItem5.appendChild(menuItem5Image);
    let menuDivider6 = document.createElement("div")
    menuDivider6.id = "menuDivider-6"; 
    menuDivider6.classList.add("menuDivider"); 
    let menuItem5Text = document.createElement("div");
    menuItem5Text.textContent = "Latte\r\n Hazelnut, Vannilla, Caramel";
    menuItem5Text.classList.add("menuText");
    menuItem5.appendChild(menuItem5Text);
    coffeeMenuContainer.appendChild(menuItem5);
    menuItem5.appendChild(menuDivider6);  

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