const hamburgerMenu = document.getElementById("hamburger-menu");

const showMenu = function () {
   let menuLinks = document.getElementById("sidebar__links");
   
   let cssObj = window.getComputedStyle(menuLinks, "display");
   let displayValue = cssObj.getPropertyValue("display");

   if (displayValue === "grid") {
    menuLinks.style.display = "none";

   } else {
    menuLinks.style.display = "grid";
   }
}

hamburgerMenu.addEventListener("click", showMenu)

const expandButton = document.getElementById("expand-button");
const collapseButton = document.getElementById("collapse-button");
const sideFeatures = document.getElementById("side-features");

const expandSection = function () {
   sideFeatures.classList.add("expanded");
   sideFeatures.classList.remove("fade");
   expandButton.classList.remove("visible");
   collapseButton.classList.add("visible");
}

const collapseSection = function () {
   sideFeatures.classList.remove("expanded");
   sideFeatures.classList.add("fade");
   expandButton.classList.add("visible");
   collapseButton.classList.remove("visible");
}

expandButton.addEventListener("click", expandSection);
collapseButton.addEventListener("click", collapseSection);