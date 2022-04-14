import "../css/style.scss";
/* Recursos */

import splashLogo from "../../public/svg/leonidasesteban.com.svg";
import dog from "../../public/svg/Categoría=Perros.svg";
import cat from "../../public/svg/Categoría=Gatos.svg";
import homeActive from '../../public/svg/Property 1=home-active.svg'
import messageActive from '../../public/svg/Property 1=message-circle-active.svg'
import favoriteActive from '../../public/svg/Property 1=heart-active.svg'
import profileActive from '../../public/svg/Property 1=user-active.svg'
import home from '../../public/svg/Property 1=home.svg'
import message from '../../public/svg/Property 1=message-circle.svg'
import favorite from '../../public/svg/Property 1=heart.svg'
import profile from '../../public/svg/Property 1=user.svg'




import { onBordingData } from "./onBordingData";
import { onBording } from "./onBording";
import { buildCategory } from "./buildCategory";
import mascotas from "./mascotas";
/* Elementos */
const mainSplash = document.getElementById("main-splash");
const onBordingOne = document.getElementById("onbording-one");
const onBordingTwo = document.getElementById("onbording-two");
const mainCategory = document.getElementById("main-category");
const mascotasMenu = document.getElementById("menu-mascotas");
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
    mascotasMenu.classList.remove("hidden");

    const adoptaUnaMascota = "Adopta una adorable mascota";
    const categoriaMascotas = "Categorías de mascotas";
    mainCategory.innerHTML = `
    <div>
        <div>
            <h1 class="mascotas-title">${adoptaUnaMascota}</h1>
        </div>
        <div>
        <h2 class="mascotas-subtitle">${categoriaMascotas}</h2>
        </div>
        <div class="mascotas-button">
        <button id="btnPerro" class="custom-btn btn-category">
            <span class="category-perro">
            <img src="${dog}" alt="" />
            </span>
            Perros
        </button>
        <button id="btnGato" class="custom-btn btn-category">
            <span class="category-perro">
            <img src="${cat}" alt="" />
            </span>
            Gatos
        </button>
        </div>
    </div> 

    <div id="mascotasCategory" class="mascotas-category pt-24"></div>
    `;
    mainCategory.classList.add(SHOW_RIGHT);
    const btnPerro = document.getElementById("btnPerro");
    const btnGato = document.getElementById("btnGato");
    const mascotasCategory = document.getElementById("mascotasCategory");
    btnPerro.addEventListener("click", (e) => {
      mascotasCategory.innerHTML = "";
      mascotas.getByCategory("perros").then((data) => {
        data.map((item) => {
          mascotasCategory.innerHTML += buildCategory(item);
        });
      });
    });
    btnGato.addEventListener("click", (e) => {
      mascotasCategory.innerHTML = "";
      mascotas.getByCategory("gatos").then((data) => {
        data.map((item) => {
          mascotasCategory.innerHTML += buildCategory(item);
        });
      });
    });
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
