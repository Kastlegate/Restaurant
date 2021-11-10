function homeTabClicked(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.title = "Cafe Bonat"
    let contentHome = document.getElementById("content");
    contentHome.textContent = "";
    //creating the homepage image
    let pageBackgroundImage = document.createElement("div")
    pageBackgroundImage.setAttribute("id", "pageBackgroundImage");
    contentHome.appendChild(pageBackgroundImage);
    console.log("Home Module worked");
    
    


}

export {homeTabClicked};