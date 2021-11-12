import Image from './baker.png';

function homeTabClicked(){
    // brings the focus back to the top of the screen when loaded
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    // Creates the page title
    document.title = "Cafe Bonat"

    //creates a variable for the content element in html
    let thisContent = document.getElementById("content");
    //resets the content div to be empty
    thisContent.textContent = "";
    
    //creating the main content for the page
    let mainContent = document.createElement("div");
    mainContent.setAttribute("id", "mainContent");

    let paragraphOne = document.createElement("p");
    // paragraphOne.setAttribute("id", "paragrah"); THIS NEEDS TO BE A CLASS INSTEAD
    paragraphOne.textContent = "Serving Kentucky coffee and pastries since 1987"
    mainContent.appendChild(paragraphOne);

    thisContent.appendChild(mainContent);

    let introductionImage = document.createElement("img");
    introductionImage.src = Image;
    introductionImage.id = "introductionImage";
    mainContent.appendChild(introductionImage)

    let paragraphTwo = document.createElement("p");
    // paragraphtwo.setAttribute("id", "paragrah");
    paragraphTwo.textContent = "Come by and try our world famous beignets!"
    mainContent.appendChild(paragraphTwo);



    //creating the pages footer
    let footer = document.createElement("div");
    footer.id = "footer";
    footer.textContent = "\u00A9 2021 Kastlegate Designs";
    thisContent.appendChild(footer);

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