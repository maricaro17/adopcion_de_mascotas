export const onBording =(item)=>{
    return `
    <div class="onbording-container">
        <div class="onbording-container-image">
            <img id="image" src="${item.info.image}" alt="" />
        </div>
        <div class="info-onbording">
            <h2 id="title" class="title-onbording">${item.info.title}</h2>
            <p id="info">
                ${item.info.description}
            </p>
        </div>
    </div>
    `
}