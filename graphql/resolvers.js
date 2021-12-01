import { resolversProyecto } from "../models/proyecto/resolvers.js";
import { resolversUsuario } from '../models/usuario/resolvers.js';
import { resolversAutenticacion } from './auth/resolvers.js';


const resolvers = [resolversUsuario, resolversProyecto, resolversAutenticacion];

export { resolvers };
