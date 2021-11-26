import { resolversProyecto } from "../models/proyecto/resolvers.js";
import { resolversUsuario } from '../models/usuario/resolvers.js';

const resolvers = [resolversUsuario, resolversProyecto];

export { resolvers };
