export const buildCategory = (item)=>{
    return `
    <div class="mascota">
        <div class="mascota-card">
        <img
            src="${item.image}"
            alt=""
        />
        </div>
        <div class="mascota-info">
        <div>
            <h3 class="mascota-name">${item.name}</h3>
            <p class="mascota-raza">${item.raza}</p>
        </div>
        </div>
    </div>
    `
}