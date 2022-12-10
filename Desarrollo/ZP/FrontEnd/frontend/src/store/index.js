import { createStore } from "vuex";
import autorizacion from "./modules/autorizacion";
import usuarios from "./modules/usuarios";
import perfiles from "./modules/perfiles";
export default createStore({
  modules: {
    autorizacion,
    usuarios,
    perfiles,
  },
});
