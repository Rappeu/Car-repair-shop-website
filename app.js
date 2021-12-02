const hamburgerMenu = document.getElementById("hamburgerMenu");
const navBar = document.getElementById("navLinks");
const hamburgerActiveOverlay = document.createElement("div");

let hamburgerMenuClicked = 0;

hamburgerMenu.addEventListener("click", function() {
  hamburgerMenuClicked++;

  if (hamburgerMenuClicked % 2 == 0) {
      navBar.style.transition = "top 1s";
      navBar.style.top = "-10rem";
    
      const hamLine1 = document.getElementById("hamburgerLine1");
      const hamLine2 = document.getElementById("hamburgerLine2");
      const hamLine3 = document.getElementById("hamburgerLine3");
    
      hamLine1.classList.add("hamburgerLineClose1");
      hamLine2.classList.add("hamburgerLineClose2");
      hamLine3.classList.add("hamburgerLineClose3");

      hamLine1.classList.remove("hamburgerLine1");
      hamLine2.classList.remove("hamburgerLine2");
      hamLine3.classList.remove("hamburgerLine3");

      hamburgerActiveOverlay.removeAttribute("id", "hamburgerActiveOverlay");
      document.querySelector("body").removeChild(hamburgerActiveOverlay);
  } else {
      navBar.style.transition = "top 1s";
      navBar.style.top = "10rem";
    
      const hamLine1 = document.getElementById("hamburgerLine1");
      const hamLine2 = document.getElementById("hamburgerLine2");
      const hamLine3 = document.getElementById("hamburgerLine3");
    
      hamLine1.classList.add("hamburgerLine1");
      hamLine2.classList.add("hamburgerLine2");
      hamLine3.classList.add("hamburgerLine3");

      hamLine1.classList.remove("hamburgerLineClose1");
      hamLine2.classList.remove("hamburgerLineClose2");
      hamLine3.classList.remove("hamburgerLineClose3");
  
      hamburgerActiveOverlay.setAttribute("id", "hamburgerActiveOverlay");
      document.querySelector("body").appendChild(hamburgerActiveOverlay);
  }
})


