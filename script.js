const hamburgerMenu = document.getElementById("hamburger-menu");

const showMenu = function () {
   let menuLinksA = document.getElementById("sidebar__links-a");
   let menuLinksB = document.getElementById("sidebar__links-b");
   
   let cssObj = window.getComputedStyle(menuLinksA, "display");
   let displayValue = cssObj.getPropertyValue("display");

   console.log(displayValue)
   if (displayValue === "grid") {
    menuLinksA.style.display = "none";
    menuLinksB.style.display = "none"
   } else {
    menuLinksA.style.display = "grid";
    menuLinksB.style.display = "grid";
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