let navbarToggle = document.querySelector(".toggle svg");
let closeSideMenu = document.querySelector(".close i");
let sideMenu = document.querySelector(".links");
let overlay = document.querySelector(".overlay");

if (navbarToggle) {
  navbarToggle.addEventListener("click", () => {
    sideMenu.style.left = "0";
    overlay.style.display = "block";
  });
}
if (closeSideMenu) {
  closeSideMenu.addEventListener("click", () => {
    sideMenu.style.left = "-105%";
    overlay.style.display = "none";
  });
}
if (overlay) {
  overlay.addEventListener("click", () => {
    sideMenu.style.left = "-105%";
    overlay.style.display = "none";
  });
}

// Fetch Json Api
function getGroups() {
  return new Promise((res) => {
    let url = "script/group.json";
    fetch(url).then((response) => {
      res(response.json());
    });
  });
}
getGroups();
async function displayData() {
  let Groups = document.querySelector(".groups .container");
  try {
    let card = ``;
    const data = await getGroups();
    data.forEach((d) => {
      card += `
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
};
// loader
function loader() {
  document.querySelector(".loading").classList.add("active-loading");
}
function loaderTwo() {
  document.querySelector(".loading").classList.add("active-loading-2");
}

function fadeOut() {
  setTimeout(loader, 2000);
  setTimeout(loaderTwo, 3000);
}
const tableInner = document.querySelector(".table__scrollContainer");
const schedule = document.querySelectorAll(".schedule button");
const Activity = document.getElementById("Activity");
const Roadmap = document.getElementById("Roadmap");
schedule.forEach((el)=>{
el.addEventListener('click',AddActiveClassToggle)
});
function AddActiveClassToggle(){
  schedule.forEach((el)=>{
    el.classList.remove('active');
    this.classList.add('active')
  })
}
if(Roadmap){
  Roadmap.addEventListener("click", () => {
    tableInner.innerHTML = `
    <table>
    <thead>
        <tr>
            <th>Date</th>
            <th>Topic</th>
            <th>Deadline</th>
            <th>Slide</th>
            <th>Notes</th>
            <th>Video</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="shadowText">Aug 02, 2021</td>
            <td class="--width-Td">What is the different between
                UI & UX? </td>
            <td class="shadowText">1 Day</td>
            <td><i class="fa-solid fa-file-pdf"></i></td>
            <td><i class="fa-solid fa-file-lines"></i></td>
            <td><i class="fa-solid fa-file-video"></i></td>
        </tr>
        <tr>
            <td class="shadowText">Aug 03, 2021</td>
            <td>What is the different between
                UI & UX? </td>
            <td class="shadowText">1 Day</td>
            <td><i class="fa-solid fa-file-pdf"></i></td>
            <td><i class="fa-solid fa-file-lines"></i></td>
            <td><i class="fa-solid fa-file-video"></i></td>
        </tr>
        <tr>
            <td class="shadowText">Aug 05, 2021</td>
            <td>What is the different between
                UI & UX? </td>
            <td class="shadowText">1 Day</td>
            <td><i class="fa-solid fa-file-pdf"></i></td>
            <td><i class="fa-solid fa-file-lines"></i></td>
            <td><i class="fa-solid fa-file-video"></i></td>
        </tr>
        <tr>
            <td class="shadowText">Aug 07, 2021</td>
            <td>What is the different between
                UI & UX? </td>
            <td class="shadowText">1 Day</td>
            <td><i class="fa-solid fa-file-pdf"></i></td>
            <td><i class="fa-solid fa-file-lines"></i></td>
            <td><i class="fa-solid fa-file-video"></i></td>
        </tr>
        <tr>
            <td class="shadowText">Aug 10, 2021</td>
            <td>What is the different between
                UI & UX? </td>
            <td class="shadowText">1 Day</td>
            <td><i class="fa-solid fa-file-pdf"></i></td>
            <td><i class="fa-solid fa-file-lines"></i></td>
            <td><i class="fa-solid fa-file-video"></i></td>
        </tr>
        <tr>
            <td class="shadowText">Aug 12, 2021</td>
            <td>What is the different between
                UI & UX? </td>
            <td class="shadowText">1 Day</td>
            <td><i class="fa-solid fa-file-pdf"></i></td>
            <td><i class="fa-solid fa-file-lines"></i></td>
            <td><i class="fa-solid fa-file-video"></i></td>
        </tr>
        <tr>
            <td class="shadowText">Aug 13, 2021</td>
            <td>What is the different between
                UI & UX? </td>
            <td class="shadowText">1 Day</td>
            <td><i class="fa-solid fa-file-pdf"></i></td>
            <td><i class="fa-solid fa-file-lines"></i></td>
            <td><i class="fa-solid fa-file-video"></i></td>
        </tr>
        <tr>
            <td class="shadowText">Aug 15, 2021</td>
            <td>What is the different between
                UI & UX? </td>
            <td class="shadowText">1 Day</td>
            <td><i class="fa-solid fa-file-pdf"></i></td>
            <td><i class="fa-solid fa-file-lines"></i></td>
            <td><i class="fa-solid fa-file-video"></i></td>
        </tr>
    </tbody>
  </table>
    `;
  });
}
if(Activity){
  Activity.addEventListener("click", () => {
    tableInner.innerHTML = `
    <table>
    <thead>
        <tr>
            <th>Assignment</th>
            <th>Solution</th>
            <th>Release Date</th>
            <th>Due Date</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="--width-Td">What is the different between
                UI & UX? </td>
            <td class="shadowText"><a href="#">Answer</a></td>
            <td class="shadowText">Aug 03, 2021</td>
            <td>Sep 11, 2019 @ 11:59pm</td>
        </tr>
        <tr>
            <td class="--width-Td">What is the different between
                UI & UX? </td>
            <td class="shadowText"><a href="#">Answer</a></td>
            <td class="shadowText">Aug 03, 2021</td>
            <td>Sep 11, 2019 @ 11:59pm</td>
        </tr>
        <tr>
            <td class="--width-Td">What is the different between
                UI & UX? </td>
            <td class="shadowText"><a href="#">Answer</a></td>
            <td class="shadowText">Aug 03, 2021</td>
            <td>Sep 11, 2019 @ 11:59pm</td>
        </tr>
        <tr>
            <td class="--width-Td">What is the different between
                UI & UX? </td>
            <td class="shadowText"><a href="#">Answer</a></td>
            <td class="shadowText">Aug 03, 2021</td>
            <td>Sep 11, 2019 @ 11:59pm</td>
        </tr>
        <tr>
            <td class="--width-Td">What is the different between
                UI & UX? </td>
            <td class="shadowText"><a href="#">Answer</a></td>
            <td class="shadowText">Aug 03, 2021</td>
            <td>Sep 11, 2019 @ 11:59pm</td>
        </tr>
        <tr>
            <td class="--width-Td">What is the different between
                UI & UX? </td>
            <td class="shadowText"><a href="#">Answer</a></td>
            <td class="shadowText">Aug 03, 2021</td>
            <td>Sep 11, 2019 @ 11:59pm</td>
        </tr>
        <tr>
            <td class="--width-Td">What is the different between
                UI & UX? </td>
            <td class="shadowText"><a href="#">Answer</a></td>
            <td class="shadowText">Aug 03, 2021</td>
            <td>Sep 11, 2019 @ 11:59pm</td>
        </tr>
        <tr>
            <td class="--width-Td">What is the different between
                UI & UX? </td>
            <td class="shadowText"><a href="#">Answer</a></td>
            <td class="shadowText">Aug 03, 2021</td>
            <td>Sep 11, 2019 @ 11:59pm</td>
        </tr>
    </tbody>
  </table>
    `;
  });
}
