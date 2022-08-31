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

// Fetch Json Api
function getGroups(){
  return new Promise((res)=>{
    let url ='script/group.json';
    fetch(url).then((response)=>{
      res(response.json());
    });
  });
}
getGroups();
async function displayData(){
  let Groups = document.querySelector('.groups .container');
  try{
    let card =``;
    const data = await getGroups();
    data.forEach((d)=>{
      card+=`
        <div class="box">
          <div class="img">
              <img src="${d.img}" alt="${d.title}-group">
          </div>
          <div class="text">
            <a href="#"><h3>${d.title}</h3></a>
              <p>${d.description}</p>
          </div>
              <a class = "readMap"href="#">Read Map</a>
        </div>
      `;
    });
    Groups.innerHTML = card;
  } catch (e) {
    console.log(e);
  }
  }
  displayData();

  // Loading Page
  window.onload = () => {

    fadeOut();

}
// loader 
function loader() {
    document.querySelector('.loading').classList.add('active-loading');
}
function loaderTwo() {
  document.querySelector('.loading').classList.add('active-loading-2');
}

function fadeOut() {
    setTimeout(loader, 2000);
    setTimeout(loaderTwo, 3000);
}