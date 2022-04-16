const urlBase = "https://adopciondemascotas.herokuapp.com";

const getByCategory = async (category) => {
  let endpoint = category;
  const response = await fetch(`${urlBase}/${endpoint}`);
  return await response.json();
};

const getByIdForCategory = async (id, category) => {
  let endpoint = category;
  const response = await fetch(`${urlBase}/${endpoint}/${id}`);
  return await response.json();
};

const postFavorites = async (data) => {
  let endpoint = "favoritos";
  const url = `${urlBase}/${endpoint}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  console.log("Se ha registrado en favoritos");
  return await response.json();
};

const removeFavorites = async (id) => {
  let endpoint = "favoritos";
  const url = `${urlBase}/${endpoint}/${id}`;
  const response = await fetch(url, {
    method: "DELETE",
  });
  console.log("Se ha eliminado de favoritos");
  return await response.json();
};

const addOrRemoveFavorites = async (id, category, datos) => {
  let endpoint = category;
  const url = `${urlBase}/${endpoint}/${id}`;

  if (!datos.favorito) {
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...datos, favorito: true }),
    });
    const mascotaActualizada = await response.json();
    postFavorites(mascotaActualizada);
    return mascotaActualizada;
  } else {
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...datos, favorito: false}),
    });
    const mascotaActualizada = await response.json();
    removeFavorites(mascotaActualizada.id);
    return mascotaActualizada;
  }
};
const mascotas = { getByCategory, getByIdForCategory, addOrRemoveFavorites };
export default mascotas;
