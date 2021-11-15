import Image1 from './beignets.jpg';
import Image2 from './gumbo.jpg';
import Image3 from './muffaletta.jpg';
import Image4 from './cafeaulait.jpg';
import Image5 from './latte.jpg';
import Image6 from './tea.jpg';
import Image7 from './italianSoda.jpg';
import Image8 from './blueStallion.jpg';
import Image9 from './ethereal.png';
import Image10 from './westsixth.jpg';
import Image11 from './lexBrew.jpg';

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

    let menuDivider = document.createElement("div")
    menuDivider.id = "menuDivider"
    menuDivider.classList.add("menuDivider");
    mainContent.appendChild(menuDivider);

    //container to hold each menu item's div
    let menuContainer = document.createElement("div");
    menuContainer.id = "menuContainer";
    menuContainer.classList.add("menuContainer");
    mainContent.appendChild(menuContainer)
    
    

    //the divs and images for each food inside the menu. Beignets, gumbo, and muffaletta
    // Beignets
    let beignets = document.createElement("div")
    beignets.id = "beignets";
    beignets.classList.add("menuItem");
    let beignetsImage = document.createElement("img");
    beignetsImage.classList.add('menuImage');
    beignetsImage.src = Image1;
    beignetsImage.alt = "Beignets";
    beignets.appendChild(beignetsImage);
    let beignetsDivider = document.createElement("div")
    beignetsDivider.id = "beignetsDivider"
    beignetsDivider.classList.add("menuDivider");
    let beignetsText = document.createElement("div");
    beignetsText.textContent = "Beignets\r\n 3.99";
    beignetsText.classList.add("menuText");
    beignets.appendChild(beignetsText);
    menuContainer.appendChild(beignets);
    beignets.appendChild(beignetsDivider);  
    // gumbo
    let gumbo = document.createElement("div")
    gumbo.id = "gumbo";
    gumbo.classList.add("menuItem");
    let gumboImage = document.createElement("img");
    gumboImage.classList.add('menuImage');
    gumboImage.src = Image2;
    gumboImage.alt = "Gumbo"
    gumbo.appendChild(gumboImage);
    let gumboDivider = document.createElement("div")
    gumboDivider.id = "gumboDivider"
    gumboDivider.classList.add("menuDivider");
    let gumboText = document.createElement("div");
    gumboText.textContent = "Chicken Andouille Gumbo\r\n Cup 4.99 Bowl 9.99";
    gumboText.classList.add("menuText");
    gumbo.appendChild(gumboText);
    menuContainer.appendChild(gumbo);
    gumbo.appendChild(gumboDivider);
    //muffaletta
    let muffaletta = document.createElement("div")
    muffaletta.id = "muffaletta";
    muffaletta.classList.add("menuItem");
    let muffalettaImage = document.createElement("img");
    muffalettaImage.classList.add('menuImage');
    muffalettaImage.src = Image3;
    muffalettaImage.alt = "muffaletta";
    muffaletta.appendChild(muffalettaImage);
    let muffalettaDivider = document.createElement("div")
    muffalettaDivider.id = "muffalettaDivider"
    let muffalettaText = document.createElement("div");
    muffalettaText.textContent = "Muffaletta\r\n 9.99";
    muffalettaText.classList.add("menuText");
    muffaletta.appendChild(muffalettaText);
    menuContainer.appendChild(muffaletta);
    muffalettaDivider.classList.add("menuDivider");
    // muffaletta.appendChild(muffalettaDivider);  

    // Menu Banner for the coffee
    let menuCoffee = document.createElement("div")
    menuCoffee.id = "menuCoffee";
    menuCoffee.classList.add("menuBanner");
    menuCoffee.textContent = "Coffee and Tea";
    mainContent.appendChild(menuCoffee);

    //coffee and tea Divider
    let coffeeDivider = document.createElement("div")
    coffeeDivider.id = "coffeeDivider"
    coffeeDivider.classList.add("menuDivider");
    mainContent.appendChild(coffeeDivider);

    // Container for the coffee divs
    let coffeeMenuContainer = document.createElement("div");
    coffeeMenuContainer.id = "coffeeMenuContainer";
    coffeeMenuContainer.classList.add("menuContainer");
    mainContent.appendChild(coffeeMenuContainer)

    // Cafe Au Lait
    let cafeAuLait = document.createElement("div")
    cafeAuLait.id = "cafeAuLait";
    cafeAuLait.classList.add("menuItem");
    let cafeAuLaitImage = document.createElement("img");
    cafeAuLaitImage.classList.add('menuImage');
    cafeAuLaitImage.src = Image4;
    cafeAuLaitImage.alt = "Cafe Au Lait";
    cafeAuLait.appendChild(cafeAuLaitImage);
    let cafeAuLaitDivider = document.createElement("div")
    cafeAuLaitDivider.id = "cafeAuLaitDivider"; 
    cafeAuLaitDivider.classList.add("menuDivider"); 
    let cafeAuLaitText = document.createElement("div");
    cafeAuLaitText.textContent = "Cafe Au Lait\r\n Hot or Iced\r\n3.99";
    cafeAuLaitText.classList.add("menuText");
    cafeAuLait.appendChild(cafeAuLaitText);
    coffeeMenuContainer.appendChild(cafeAuLait);
    cafeAuLait.appendChild(cafeAuLaitDivider);  

    // latte
    let latte = document.createElement("div")
    latte.id = "latte";
    latte.classList.add("menuItem");
    let latteImage = document.createElement("img");
    latteImage.classList.add('menuImage');
    latteImage.src = Image5;
    latteImage.alt = "Latte";
    latte.appendChild(latteImage);
    let latteDivider = document.createElement("div")
    latteDivider.id = "latteDivider"; 
    latteDivider.classList.add("menuDivider"); 
    let latteText = document.createElement("div");
    latteText.textContent = "Latte\r\nHazelnut, Vannilla, Caramel\r\n4.99";
    latteText.classList.add("menuText");
    latte.appendChild(latteText);
    coffeeMenuContainer.appendChild(latte);
    latte.appendChild(latteDivider);  

    // Teas
    let tea = document.createElement("div")
    tea.id = "tea";
    tea.classList.add("menuItem");
    let teaImage = document.createElement("img");
    teaImage.classList.add('menuImage');
    teaImage.src = Image6;
    teaImage.alt = "Tea";
    tea.appendChild(teaImage);
    let teaDivider = document.createElement("div")
    teaDivider.id = "teaDivider"; 
    teaDivider.classList.add("menuDivider"); 
    let teaText = document.createElement("div");
    teaText.textContent = "Tea\r\nEarl Grey, Green Tea, Black\r\n3";
    teaText.classList.add("menuText");
    tea.appendChild(teaText);
    coffeeMenuContainer.appendChild(tea);
    // tea.appendChild(teaDivider);
    
    // italian soda
    let italianSoda = document.createElement("div")
    italianSoda.id = "italianSoda";
    italianSoda.classList.add("menuItem");
    let italianSodaImage = document.createElement("img");
    italianSodaImage.classList.add('menuImage');
    italianSodaImage.src = Image7;
    italianSodaImage.alt = "Italian Soda";
    italianSoda.appendChild(italianSodaImage);
    let italianSodaDivider = document.createElement("div")
    italianSodaDivider.id = "italianSodaDivider"; 
    italianSodaDivider.classList.add("menuDivider"); 
    let italianSodaText = document.createElement("div");
    italianSodaText.textContent = "Italian Soda\r\nVarious Flavors\r\n4.50";
    italianSodaText.classList.add("menuText");
    italianSoda.appendChild(italianSodaText);
    coffeeMenuContainer.appendChild(italianSoda);
    // italianSoda.appendChild(italianSodaDivider);  

    // Menu Banner for the local Beers
    let menuBeers = document.createElement("div")
    menuBeers.id = "Beers Menu";
    menuBeers.classList.add("menuBanner");
    menuBeers.textContent = "Local Draft Beer";
    mainContent.appendChild(menuBeers);

    //Beer
    let BeersDivider = document.createElement("div")
    BeersDivider.id = "BeersDivider"
    BeersDivider.classList.add("menuDivider");
    mainContent.appendChild(BeersDivider);

    let beerPrices = document.createElement("div");
    beerPrices.id = "beerPrices";
    beerPrices.textContent = "4.99";
    mainContent.appendChild(beerPrices);

    // Container for the Beer divs
    let beersMenuContainer = document.createElement("div");
    beersMenuContainer.id = "BeersMenuContainer";
    beersMenuContainer.classList.add("menuContainer");
    mainContent.appendChild(beersMenuContainer)

    // Blue Stallion
    let blueStallion = document.createElement("div")
    blueStallion.id = "blueStallion";
    blueStallion.classList.add("menuItem");
    let blueStallionImage = document.createElement("img");
    blueStallionImage.classList.add('menuImage');
    blueStallionImage.src = Image8;
    blueStallionImage.alt = "blueStallion";
    blueStallion.appendChild(blueStallionImage);
    // let blueStallionText = document.createElement("div");
    // blueStallionText.textContent = "Blue Stallion";
    // blueStallionText.classList.add("menuText");
    // blueStallion.appendChild(blueStallionText);
    beersMenuContainer.appendChild(blueStallion);
    
    // Ethereal
    let ethereal = document.createElement("div")
    ethereal.id = "ethereal";
    ethereal.classList.add("menuItem");
    let etherealImage = document.createElement("img");
    etherealImage.classList.add('menuImage');
    etherealImage.src = Image9;
    etherealImage.alt = "ethereal";
    ethereal.appendChild(etherealImage);
    // let etherealText = document.createElement("div");
    // etherealText.textContent = "Ethereal";
    // etherealText.classList.add("menuText");
    // ethereal.appendChild(etherealText);
    beersMenuContainer.appendChild(ethereal); 

    // West Sixth
    let westSixth = document.createElement("div")
    westSixth.id = "westSixth";
    westSixth.classList.add("menuItem");
    let westSixthImage = document.createElement("img");
    westSixthImage.classList.add('menuImage');
    westSixthImage.src = Image10;
    westSixthImage.alt = "westSixth";
    westSixth.appendChild(westSixthImage);
    // let westSixthText = document.createElement("div");
    // westSixthText.textContent = "West Sixth";
    // westSixthText.classList.add("menuText");
    // westSixth.appendChild(westSixthText);
    beersMenuContainer.appendChild(westSixth);

    // Blue Stallion
    let lexingtonBrewery = document.createElement("div")
    lexingtonBrewery.id = "lexingtonBrewery";
    lexingtonBrewery.classList.add("menuItem");
    let lexingtonBreweryImage = document.createElement("img");
    lexingtonBreweryImage.classList.add('menuImage');
    lexingtonBreweryImage.src = Image11;
    lexingtonBreweryImage.alt = "lexingtonBrewery";
    lexingtonBrewery.appendChild(lexingtonBreweryImage);
    // let lexingtonBreweryText = document.createElement("div");
    // lexingtonBreweryText.textContent = "Lexington Brewing and Distillery Co.";
    // lexingtonBreweryText.classList.add("menuText");
    // lexingtonBrewery.appendChild(lexingtonBreweryText);
    beersMenuContainer.appendChild(lexingtonBrewery); 

    //creating the pages footer
    let footer = document.createElement("div");
    footer.id = "footer";
    footer.textContent = "\u00A9 2021 Kasey Martin";
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