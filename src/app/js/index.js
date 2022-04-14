import "../css/style.scss";
/* Recursos */
import splashLogo from "../../public/svg/leonidasesteban.com.svg";
import dog from "../../public/svg/Categoría=Perros.svg"
import cat from "../../public/svg/Categoría=Gatos.svg"
import { onBordingData } from "./onBordingData";
import { onBording } from "./onBording";

/* Elementos */
const mainSplash = document.getElementById("main-splash");
const onBordingOne = document.getElementById("onbording-one");
const onBordingTwo = document.getElementById("onbording-two");
const mainCategory = document.getElementById("main-category");
const mascotasMenu = document.getElementById("menu-mascotas")
const SHOW_RIGHT = "show-right";
const HIDDEN_LEFT = "hidden-left";

const data = onBordingData();
data.map((item) => {
  if (item.page === 1) {
    onBordingOne.innerHTML = `
        ${onBording(item)}
        <button id="next1" class="custom-btn btn-next-onbording">Siguiente</button>
    `;
  }
  data.shift();
});

const btnNextOneClick = (e) => {
  console.log(e);
  if (data.length > 0) {
    data.map((item) => {
      if (item.page === 2) {
        onBordingTwo.innerHTML = `
              ${onBording(item)}
              <button id="next2" class="custom-btn btn-next-onbording">Siguiente</button>
              `;
      }
    });
    data.shift();

    onBordingOne.classList.add(HIDDEN_LEFT);
    onBordingTwo.classList.add(SHOW_RIGHT);
  }

  const btnNextTwo = document.getElementById("next2");
  btnNextTwo.addEventListener("click", (e) => {
    onBordingTwo.classList.add(HIDDEN_LEFT);
    mascotasMenu.classList.remove("hidden")
    mainCategory.innerHTML = `
    <div>
        <div>
        <h1 class="mascotas-title">Adopta una adorable mascota</h1>
        </div>
        <div>
        <h2 class="mascotas-subtitle">Categorías de mascotas</h2>
        </div>
        <div class="mascotas-button">
        <button class="custom-btn btn-category">
            <span class="category-perro">
            <img src="${dog}" alt="" />
            </span>
            Perros
        </button>
        <button class="custom-btn btn-category">
            <span class="category-perro">
            <img src="${cat}" alt="" />
            </span>
            Gatos
        </button>
        </div>
    </div>
    
    
    
    
    `;
    mainCategory.classList.add(SHOW_RIGHT);
  });
};

const btnNextOne = document.getElementById("next1");
btnNextOne.onclick = () => btnNextOneClick();





document.addEventListener("DOMContentLoaded", (e) => {
  mainSplash.innerHTML = `
        <div class="splash-container-logo">
            <img class="logo-splash" src="${splashLogo}" alt="" />
        </div>
    `;
  setTimeout(() => {
    mainSplash.classList.add(HIDDEN_LEFT);
    onBordingOne.classList.add(SHOW_RIGHT);
  }, 3000);
});
