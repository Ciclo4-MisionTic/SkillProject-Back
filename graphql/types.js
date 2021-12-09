import { gql } from "apollo-server-core";
import { tiposAvance } from "../models/avance/tipos.js";
import { tiposEnums } from "../models/enums/tipos.js";
import { tiposProyecto } from "../models/proyecto/tipos.js";
import { tiposUsuario } from "../models/usuario/tipos.js";
import { tiposInscripcion } from '../models/inscripcion/tipos.js';
import { tiposAutenticacion } from "./auth/tipos.js";
import { tiposInscripcion } from "../models/inscripcion/tipos.js";

const tiposGlobales = gql`
  scalar Date
`;
const tipos = [
  tiposGlobales,
  tiposUsuario,
  tiposProyecto,
  tiposEnums,
  tiposInscripcion,
  tiposAutenticacion,
  tiposAvance,
  tiposInscripcion
];

export { tipos };
