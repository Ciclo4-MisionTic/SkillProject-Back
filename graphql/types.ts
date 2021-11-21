import { gql } from "apollo-server-express";
import { tipoAvance } from "../models/avance/tipos";
import { tipoEnums } from "../models/enums/tipos";
import { tipoInscripcion } from "../models/inscripcion/tipos";
import { tipoProyecto } from "../models/proyecto/tipos";
import { tipoUsuario } from "../models/usuario/tipos";

const typeDefs = gql`
  scalar Date
`;
const tipos = [
  tipoUsuario,
  tipoProyecto,
  tipoInscripcion,
  tipoEnums,
  tipoAvance,
];

export { typeDefs, tipos };
