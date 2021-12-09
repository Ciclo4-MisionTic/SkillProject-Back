import { resolversAvance } from "../models/avance/resolvers.js";
import { resolversProyecto } from "../models/proyecto/resolvers.js";
import { resolversUsuario } from "../models/usuario/resolvers.js";
import { resolverInscripciones } from '../models/inscripcion/resolvers.js';
import { resolversAutenticacion } from "./auth/resolvers.js";
import { resolverInscripciones } from "../models/inscripcion/resolvers.js";

const resolvers = [
  resolversUsuario,
  resolversProyecto,
  resolverInscripciones,
  resolversAutenticacion,
  resolversAvance,
  resolverInscripciones,
];

export { resolvers };
