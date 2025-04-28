const burger = document.getElementById("header_burger_pic");
const nav = document.querySelector("nav");


/* Base classes I want to use in order to enchance preformance:
    menu-open: detect wether the menu has opened
    is-desktop: checking wether the web is used in a desktop width

    in the future:
    dark mode 
*/


function declareStates() {
    document.body.classList.toggle("menu-open", false);
    document.body.classList.toggle("is-desktop", false);
    document.body.classList.toggle("visable-projects", true);
    document.body.classList.toggle("visable-about", false);
}

function listenToDropDown(){
   if(!document.body.classList.contains("is-desktop")){
     burger.addEventListener("click", () => {
        document.body.classList.toggle("menu-open");
     })
   } 
}


declareStates();
listenToDropDown();

/*
    // add functionality for the header burger menu
burger.addEventListener("mousedown", () => {
    nav.classList.toggle("open", true);
});

burger.addEventListener("mouseup", () => {
    nav.classList.toggle("open", false);
});



*/


