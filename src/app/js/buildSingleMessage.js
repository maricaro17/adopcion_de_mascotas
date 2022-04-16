import arrow from "../../public/svg/arrow-right.svg"
import mariaDolores from "../../public/svg/maria-dolores.jpg"
export const buildSingleMessage = () => {
    return `
    <div>
        <div>
            <h1 class="mascotas-title">Mensajes</h1>
        </div>
        <div class="container-message">
            <div class="perfil-message">
                <img src="${mariaDolores}" alt="">
            </div>
            <div class="bandeja">
                <div class="message-title">
                    <h3>Maria Dolores</h3>
                    <p>4:36</p>
                </div>
                <div class="message-text">
                    <p>¡Hola! claro, podemos acordar un lugar y hora para que conoscas...</p>
                </div>
            </div>
            <div class="message-icon">
                <img src="${arrow}" alt="">
            </div>
        </div>
    </div>
    `
}