export const buildProfile = (data) => {
  return `
  <div class="perfil">
      <h1>Perfil</h1>
      <div class="name-img-perfil">
          <img
              src="${data.imagen}"
              alt=""
          />
          <p>${data.name} ${data.apellido}</p>
          <button id="editarCuenta">Editar Cuenta</button>
      </div>
      <form class="container-form" action="">
          <div class="item-form">
              <label for="exampleInputEmail1" class="form-label">Nombre</label>
              <input type="text" />
          </div>
          <div class="item-form">
              <label for="exampleInputEmail1" class="form-label">Apellido</label>
              <input type="text" />
          </div>
          <div class="item-form">
              <label for="exampleInputEmail1" class="form-label"
              >Email address</label
              >
              <input type="email" />
          </div>

          <button type="submit" class="btn-form btn-radius custom-btn-dark">
              Guardar
          </button>
      </form>
  </div>
`;
};
