export default {
  namespaced: true,
  state: {
    perfiles: [
      {
        Perfil: "Cris MS",
        Plataforma: "Netflix",
        Correo: "zorriteNet@gmail.com",
        Contrasenia: "1598624zp*",
        FechaInicio: "10 / 12 / 2022",
        TiempoDuracion: "4",
        PIN: "2189",
        DNI: "78924632",
      },
      {
        Perfil: "Cris15",
        Plataforma: "Disney Plus",
        Correo: "zorriteNet@gmail.com",
        Contrasenia: "159753*zp",
        FechaInicio: "08 / 12 / 2022",
        TiempoDuracion: "5",
        PIN: "7892",
        DNI: "78924632",
      },
    ],
  },
  getters: {
    getPerfilesDeUsuario: (state) => (DNI, Filtro) => {
      const perfilesDeUsuario = state.perfiles.filter(
        (perfil) => perfil.DNI === DNI
      );
      if (Filtro == "Todas") {
        return perfilesDeUsuario;
      } else {
        return perfilesDeUsuario.filter(
          (perfil) => perfil.Plataforma === Filtro
        );
      }
    },
  },
  mutations: {
    addPerfil(state, nuevoPerfil) {
      state.perfiles.push(nuevoPerfil);
    },
  },
};
