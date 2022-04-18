const urlBase = "https://adopciondemascotas.herokuapp.com";

const getByCategory = async (category) => {
  let endpoint = "mascotas";
  const response = await fetch(`${urlBase}/${endpoint}/?category=${category}`);
  return await response.json();
};

const getById = async (id) => {
  let endpoint = "mascotas";
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

const addOrRemoveFavorites = async (id, datos) => {
  let endpoint = "mascotas";
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
      body: JSON.stringify({ ...datos, favorito: false }),
    });
    const mascotaActualizada = await response.json();
    removeFavorites(mascotaActualizada.id);
    return mascotaActualizada;
  }
};

const getFavorites = async (id=null) => {
  let endpoint = "favoritos";
  if (!id) {
    const response = await fetch(`${urlBase}/${endpoint}`);
    return await response.json();
  } else {
    const response = await fetch(`${urlBase}/${endpoint}/${id}`);
    return await response.json();
  }
};

const mascotas = { getByCategory, getById, addOrRemoveFavorites, getFavorites };
export default mascotas;
