export default {
  namespaced: true,
  state: {
    solicitudes: [
      {
        DNI: "78924632",
        Plataforma: "Star Plus",
        FechaInicio: "20 / 12 / 2022",
        TiempoDuracion: "5",
        CapturaPago:
          "https://drive.google.com/file/d/1tdMc_t1s6-8FHsVEgPHFLRt_7We00EEm/view?usp=sharing",
      },
      {
        DNI: "78924632",
        Plataforma: "Movistar Play",
        FechaInicio: "25 / 12 / 2022",
        TiempoDuracion: "6",
        CapturaPago:
          "https://drive.google.com/file/d/1i7tD1U32Ir79aNIGj5jWZfJuCTVlcyUH/view?usp=sharing",
      },
    ],
  },
  mutations: {
    addSolicitud(state, nuevaSolicitud) {
      state.solicitudes.push(nuevaSolicitud);
    },
  },
};
