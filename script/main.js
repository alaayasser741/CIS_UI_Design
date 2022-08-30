let navbarToggle = document.querySelector(".toggle i");
let closeSideMenu = document.querySelector(".close i");
let sideMenu = document.querySelector(".links");
let overlay = document.querySelector(".overlay");

if (navbarToggle) {
  navbarToggle.addEventListener("click", () => {
    sideMenu.style.left = "0";
    overlay.style.display = 'block';
  });
}
if (closeSideMenu) {
  closeSideMenu.addEventListener("click", () => {
    sideMenu.style.left = "-105%";
    overlay.style.display = 'none';
  });
}
if(overlay){
    overlay.addEventListener('click',()=>{
        sideMenu.style.left = "-105%";
        overlay.style.display = 'none';
    })
}

