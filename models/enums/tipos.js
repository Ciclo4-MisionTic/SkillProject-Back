import { gql } from "apollo-server-core";

const tiposEnums = gql`
  enum Enum_EstadoUsuario {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }
  enum Enum_Rol {
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
  }
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
