import back from "../../public/svg/back.svg";
import mSex from "../../public/svg/Property 1=male.svg";
import fSex from "../../public/svg/Property 1=female.svg";
import edad from "../../public/svg/Property 1=edad.svg";
import raza from "../../public/svg/Property 1=raza.svg";
import favoriteActive from "../../public/svg/Property 1=Guardado.png";
import favoriteNormal from "../../public/svg/Property 1=No guardado.svg";
import location from "../../public/svg/Property 1=map-pin.svg";
import carinoso from "../../public/svg/Property 1=Cariñoso.svg";
import inquieto from "../../public/svg/Property 1=Inquieto.svg";
import jugueton from "../../public/svg/Property 1=Jugueton.svg";
import tierno from "../../public/svg/Property 1=Tierno.svg";
import mariaDolores from "../../public/svg/maria-dolores.jpg"
import juanJesus from "../../public/svg/juan-jesus.jpg"

export const buildDetails = (item) => {
  const sexo = item.sexo === "macho" ? mSex : fSex;
  let favorite
  if (item.favorito) {
      favorite = favoriteActive
  } else {
    favorite = favoriteNormal
  }
  
  let publicado

  switch (item.publicado) {
    case "Maria Dolores":
        publicado = mariaDolores
          break;
  
    case "Juan Jesus":
        publicado = juanJesus
          break;
  }

  return `
    <div class="card-image-container-details">
    <div id="back" class="back">
        <img src="${back}" alt="back">
    </div>
    <img
      src="${item.image}"
      class="img-card-details"
      alt="Mascota"
    />
  </div>
  <div class="container-body-details">
    <div class="container-title">
      <div class="name-and-sex">
        <h1>${item.name}</h1>
        <img
          class="icon-sex"
          src="${sexo}"
          alt="sexo"
        />
      </div>
      <div id="favorite" class="favoritos-add">
        <img id="favoriteIcon" src="${favorite}" alt="favoritos" />
      </div>
    </div>
    <div class="raza-edad">
      <div class="raza">
        <img
          class="icon"
          src="${raza}"
          alt="raza"
        />
        <p>${item.raza}</p>
      </div>
      <div class="edad">
        <img
          class="icon"
          src="${edad}"
          alt="edad"
        />
        <p>${item.edad}</p>
      </div>
    </div>
    <div class="location">
      <img class="icon" src="${location}" alt="" />
      <p>${item.ubicacion}</p>
    </div>
    <h1>Personalidad</h1>
    <div id="personality" class="personality">
    </div>
    <div class="history">
      <h1>Historia de ${item.name}</h1>
      <p>
        ${item.history}
      </p>
    </div>
    <div class="published-user">
      <div class="published">
        <img id="image-published" src="${publicado}" alt="" />
        <div class="published-name">
          <h4>Publicado por</h4>
          <h3>${item.publicado}</h3>
        </div>
      </div>
      <button class="custom-btn btn-radius custom-btn-dark">Contactar</button>
    </div>
  </div>
    `;
};

export const buildPersonality = (item) => {
  let personalidad;
  switch (item.name) {
    case "cariñoso":
      personalidad = carinoso;
      break;
    case "jugueton":
      personalidad = jugueton;
      break;
    case "tierno":
      personalidad = tierno;
      break;
    case "inquieto":
      personalidad = inquieto;
      break;
  }
  return `
        <div class="item-personality">
            <div class="item-personality-hijo">
                <img src="${personalidad}" alt="personalidad" />
                <p>${item.name}</p>
            </div>
        </div>
        `;
};
