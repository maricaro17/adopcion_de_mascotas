const urlBase = "https://adopciondemascotas.herokuapp.com";

export const getPerfil = async()=>{
    let endpoint = "user";
    const response = await fetch(`${urlBase}/${endpoint}/1`);
    return await response.json();
}