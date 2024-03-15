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