export default {
  namespaced: true,
  state: {
    autorizado: "no-autorizado",
    usuarioAutorizado: {
      Nombres: "",
      Apellidos: "",
      Correo: "",
      Contrasenia: "",
      TelefonoContacto: "",
      DNI: "",
      Tipo: "",
    },
  },
  mutations: {
    setUsuarioAutorizado(state, usuario) {
      state.usuarioAutorizado = usuario;
    },
    deleteUsuarioAutorizado(state) {
      state.usuarioAutorizado.Nombres = "";
      state.usuarioAutorizado.Apellidos = "";
      state.usuarioAutorizado.Correo = "";
      state.usuarioAutorizado.Contrasenia = "";
      state.usuarioAutorizado.TelefonoContacto = "";
      state.usuarioAutorizado.DNI = "";
      state.usuarioAutorizado.Tipo = "";
    },
    setAutorizado(state, value) {
      if (value == "usuario") {
        state.autorizado = "usuario";
      } else if (value == "administrador") {
        state.autorizado = "administrador";
      } else {
        state.autorizado = "no-autorizado";
      }
    },
  },
};
