export default {
  namespaced: true,
  state: {
    usuarios: [
      {
        Nombres: "Luz Cristina",
        Apellidos: "Martinez Santos",
        Correo: "luzcristina.martinez@unmsm.edu.pe",
        Contrasenia: "1234Luz",
        TelefonoContacto: "987654321",
        DNI: "78924632",
        Tipo: "usuario",
      },
      {
        Nombres: "Estiven Salvador",
        Apellidos: "Hurtado Santos",
        Correo: "estiven.hurtado@unmsm.edu.pe",
        Contrasenia: "1234Estiven",
        TelefonoContacto: "987924315",
        DNI: "89562134",
        Tipo: "administrador",
      },
    ],
  },
  getters: {
    getUsuario: (state) => (DNI) => {
      return state.usuarios.find((usuario) => usuario.DNI === DNI);
    },
    verifyExistenciaUsuario: (state) => (usuario) => {
      var existe = state.usuarios.indexOf(usuario);
      if (existe == -1) {
        return false;
      } else {
        return true;
      }
    },
    verifyIniciarSesion: (state) => (usuarioIniciarSesion) => {
      let verificador = {
        Encontrado: false,
        usuarioAutorizado: {
          Nombres: "",
          Apellidos: "",
          Correo: "",
          Contrasenia: "",
          TelefonoContacto: "",
          DNI: "",
          Tipo: "",
        },
      };
      for (let index = 0; index < state.usuarios.length; index++) {
        if (
          state.usuarios[index].Correo == usuarioIniciarSesion.Correo &&
          state.usuarios[index].Contrasenia == usuarioIniciarSesion.Contrasenia
        ) {
          verificador.Encontrado = true;
          verificador.usuarioAutorizado = state.usuarios[index];
          break;
        }
      }
      return verificador;
    },
  },
  mutations: {
    addUsuario(state, nuevoUsuario) {
      state.usuarios.push(nuevoUsuario);
    },
  },
};
