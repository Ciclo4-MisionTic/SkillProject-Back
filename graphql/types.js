import { gql } from "apollo-server-core";
import { tiposProyecto } from "../models/proyecto/tipos.js";
import { tiposUsuario } from "../models/usuario/tipos.js";

const tiposGlobales = gql`
  scalar Date
`;
const tipos = [tiposGlobales, tiposProyecto];

export { tipos };
