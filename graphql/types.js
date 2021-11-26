import { gql } from "apollo-server-core";
import { tiposEnums } from "../models/enums/tipos.js";
import { tiposProyecto } from "../models/proyecto/tipos.js";
// import { tiposUsuario } from "../models/usuario/tipos.js";

const tiposGlobales = gql`
  scalar Date
`;
const tipos = [tiposGlobales, tiposProyecto, tiposEnums];

export { tipos };
