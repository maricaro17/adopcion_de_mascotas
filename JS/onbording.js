const data = [
  {
    image: "../svg/Adoptado.svg",
    title: "Crea una nueva historia",
    info: "Adoptar puede ser una de las experiencias más grandiosas de tu vida, donde compartirás bellos momentos con estos amiguitos fieles, tiernos y llenos de amor para regalar.",
  },
];
const image = document.getElementById("image")
const title = document.getElementById("title")
const info = document.getElementById("info")
const btnNext = document.getElementById("next")
btnNext.addEventListener("click", (e)=>{
    if(data.length > 0) {
        data.forEach((item)=>{
            image.src = item.image
            title.innerHTML = item.title
            info.innerHTML = item.info
        })
        data.shift()
    } else {
        window.location.href = "categories.html"
    }

    
})