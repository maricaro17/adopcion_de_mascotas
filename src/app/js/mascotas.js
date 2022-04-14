const urlBase = "https://adopciondemascotas.herokuapp.com";

const getByCategory = async (category)=>{
    let endpoint = category
    const response  = await fetch(`${urlBase}/${endpoint}`)
    return await response.json()
}


const mascotas = {getByCategory}
export default mascotas