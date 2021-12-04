import { gql } from "apollo-server-core";
import { tiposAvance } from "../models/avance/tipos.js";
import { tiposEnums } from "../models/enums/tipos.js";
import { tiposProyecto } from "../models/proyecto/tipos.js";
import { tiposUsuario } from "../models/usuario/tipos.js";
import { tiposAutenticacion } from "./auth/tipos.js";

const tiposGlobales = gql`
  scalar Date
`;
const tipos = [
  tiposGlobales,
  tiposUsuario,
  tiposProyecto,
  tiposEnums,
  tiposAutenticacion,
  tiposAvance,
];

export { tipos };
