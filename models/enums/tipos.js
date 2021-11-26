import { gql } from "apollo-server-core";

const tiposEnums = gql`
  enum Enum_EstadoProyecto {
    ACTIVO
    INACTIVO
  }
  enum Enum_FaseProyecto {
    INICIADO
    DESARROLLO
    TERMINADO
    NULO
  }
  enum Enum_TipoObjetivos {
    GENERAL
    ESPECIFICO
  }
`;

export { tiposEnums };
