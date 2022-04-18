import "../css/style.scss";
/* Recursos */

import splashLogo from "../../public/svg/leonidasesteban.com.svg";
import dog from "../../public/svg/Categoría=Perros.svg";
import cat from "../../public/svg/Categoría=Gatos.svg";
import homeActive from "../../public/svg/Property 1=home-active.svg";
import messageActive from "../../public/svg/Property 1=message-circle-active.svg";
import favoriteActive from "../../public/svg/Property 1=heart-active.svg";
import profileActive from "../../public/svg/Property 1=user-active.svg";
import home from "../../public/svg/Property 1=home.svg";
import message from "../../public/svg/Property 1=message-circle.svg";
import favorite from "../../public/svg/Property 1=heart.svg";
import profile from "../../public/svg/Property 1=user.svg";
import favoriteIconDetailsActive from "../../public/svg/Property 1=Guardado.png";
import favoriteNormal from "../../public/svg/Property 1=No guardado.svg";

import { onBordingData } from "./onBordingData";
import { onBording } from "./onBording";
import { buildCategory } from "./buildCategory";
import mascotas from "./mascotas";
import { buildDetails, buildPersonality } from "./buildDetails";
import { buildSingleMessage } from "./buildSingleMessage";
import { buildFavorites } from "./buildFavorites";
import { buildProfile } from "./buildProfile";
import { getPerfil } from "./perfile";
/* Elementos */
const mainSplash = document.getElementById("main-splash");
const onBordingOne = document.getElementById("onbording-one");
const onBordingTwo = document.getElementById("onbording-two");
const mainCategory = document.getElementById("main-category");
const mainMessage = document.getElementById("main-message");
const mainFavorite = document.getElementById("main-favorite");
const mainProfile = document.getElementById("main-profile");

const mascotasMenu = document.getElementById("menu-mascotas");
const mascotasDetails = document.getElementById("details");

const btnHome = document.getElementById("btn-home");
const btnMessage = document.getElementById("btn-mensajes");
const btnFavorites = document.getElementById("btn-favoritos");
const btnProfile = document.getElementById("btn-perfil");
const iconHome = document.getElementById("home-icon");
const iconMessage = document.getElementById("mensajes-icon");
const iconFavorites = document.getElementById("favoritos-icon");
const iconProfile = document.getElementById("perfil-icon");
const textHome = document.getElementById("home-text");
const textMessage = document.getElementById("mensajes-text");
const textFavorites = document.getElementById("favoritos-text");
const textProfile = document.getElementById("perfil-text");
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
      mascotas.getByCategory("perros").then((data) => {
        mascotasCategory.innerHTML = "";
        data.map((item) => {
          item.category = "perros";
          mascotasCategory.innerHTML += buildCategory(item);
        });
      });
    });
    btnGato.addEventListener("click", (e) => {
      mascotas.getByCategory("gatos").then((data) => {
        mascotasCategory.innerHTML = "";
        data.map((item) => {
          item.category = "gatos";
          mascotasCategory.innerHTML += buildCategory(item);
        });
      });
    });

    document.addEventListener("click", (e) => {
      let id = e.target.id;
      if (e.target.classList.contains("mascota-info")) {
        mascotasCategory.classList.add(HIDDEN_LEFT);
        mascotasMenu.classList.add("hidden");
        mascotas.getById(id).then((data) => {
          mascotasDetails.innerHTML = buildDetails(data);
          const personality = document.getElementById("personality");

          data.personalidad.map((item) => {
            personality.innerHTML += buildPersonality(item);
          });

          const btnBack = document.getElementById("back");
          btnBack.addEventListener("click", (e) => {
            mascotasCategory.classList.remove(HIDDEN_LEFT);
            mascotasDetails.classList.remove(SHOW_RIGHT);
            mascotasMenu.classList.remove("hidden");
          });

          const btnFavorite = document.getElementById("favorite");
          const favoriteIcon = document.getElementById("favoriteIcon");
          btnFavorite.addEventListener("click", (e) => {
            mascotas.addOrRemoveFavorites(id, data).then((result) => {
              if (result.favorito) {
                favoriteIcon.setAttribute("src", favoriteIconDetailsActive);
              } else {
                favoriteIcon.setAttribute("src", favoriteNormal);
              }
            });
          });
        });

        mascotasDetails.classList.add(SHOW_RIGHT);
      }
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

const tabs = Array.prototype.slice.apply(
  document.querySelectorAll(".tab-item")
);
const tabContainer = document.getElementById("menu-mascotas");

tabContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("tab-item")) {
    let item = tabs.indexOf(e.target);
    tabs.map((tab) => tab.classList.remove("active"));
    tabs[item].classList.add("active");
  }
});

function openTab(e, tabName) {
  let i, tabcontent, tablinks;
  switch (e.target.id) {
    case "home-icon":
    case "btn-home":
    case "home-text":
      textHome.classList.add("active");
      textHome.classList.remove("inactive");
      iconHome.setAttribute("src", homeActive);
      textMessage.classList.add("inactive");
      textMessage.classList.remove("active");
      iconMessage.setAttribute("src", message);
      textFavorites.classList.add("inactive");
      textFavorites.classList.remove("active");
      iconFavorites.setAttribute("src", favorite);
      textProfile.classList.add("inactive");
      textProfile.classList.remove("active");
      iconProfile.setAttribute("src", profile);
      break;
    case "mensajes-icon":
    case "btn-mensajes":
    case "mensajes-text":
      textHome.classList.add("inactive");
      textHome.classList.remove("active");
      iconHome.setAttribute("src", home);
      textMessage.classList.add("active");
      textMessage.classList.remove("inactive");
      iconMessage.setAttribute("src", messageActive);
      textFavorites.classList.add("inactive");
      textFavorites.classList.remove("active");
      iconFavorites.setAttribute("src", favorite);
      textProfile.classList.add("inactive");
      textProfile.classList.remove("active");
      iconProfile.setAttribute("src", profile);
      mainMessage.innerHTML = buildSingleMessage();
      break;
    case "favoritos-icon":
    case "btn-favoritos":
    case "favoritos-text":
      textHome.classList.add("inactive");
      textHome.classList.remove("active");
      iconHome.setAttribute("src", home);
      textMessage.classList.add("inactive");
      textMessage.classList.remove("active");
      iconMessage.setAttribute("src", message);
      textFavorites.classList.add("active");
      textFavorites.classList.remove("inactive");
      iconFavorites.setAttribute("src", favoriteActive);
      textProfile.classList.add("inactive");
      textProfile.classList.remove("active");
      iconProfile.setAttribute("src", profile);
      const favoriteTitle = "Mascotas Favoritas";
      mainFavorite.innerHTML = `
            <div>
              <div>
                  <h1 class="mascotas-title">${favoriteTitle}</h1>
              </div>

            </div>
            <div id="mascotasFavorites" class="mascotas-category pt-24"></div>
          `;
      const mascotasFavorites = document.getElementById("mascotasFavorites");
      mascotas.getFavorites().then((data) => {
        data.forEach((item) => {
          mascotasFavorites.innerHTML += buildFavorites(item);
        });
      });

      break;
    case "perfil-icon":
    case "btn-perfil":
    case "perfil-text":
      textHome.classList.add("inactive");
      textHome.classList.remove("active");
      iconHome.setAttribute("src", home);
      textMessage.classList.add("inactive");
      textMessage.classList.remove("active");
      iconMessage.setAttribute("src", message);
      textFavorites.classList.add("inactive");
      textFavorites.classList.remove("active");
      iconFavorites.setAttribute("src", favorite);
      textProfile.classList.add("active");
      textProfile.classList.remove("inactive");
      iconProfile.setAttribute("src", profileActive);
      getPerfil().then((data) => {
        mainProfile.innerHTML = buildProfile(data);
      });

      break;
  }

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  document.getElementById(tabName).style.display = "flex";
  e.currentTarget.className += " active";
}

btnHome.addEventListener("click", (e) => openTab(e, "main-category"));
btnMessage.addEventListener("click", (e) => openTab(e, "main-message"));
btnFavorites.addEventListener("click", (e) => openTab(e, "main-favorite"));
btnProfile.addEventListener("click", (e) => openTab(e, "main-profile"));
