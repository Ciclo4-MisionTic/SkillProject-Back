import { gql } from "apollo-server-express";

const typeDefs = gql`
  scalar Date

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
    EN_DESARROLLO
    TERMINADO
  }

  enum Enum_TipoObjetivo {
    GENERAL
    ESPECIFICO
  }

  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario
  }

  input Objetivo {
    _id: ID!
    descripcion: String!
    tipo: String!
  }

  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto
    faseProyecto: Enum_FaseProyecto
    lider: Usuario!
  }

  type Query {
    Usuarios: [Usuario]
    Usuario(_id: String!): Usuario
    Proyectos: [Proyecto]
    Proyecto(_id: String!): Proyecto
  }

  type Mutation {
    crearUsuario(
      _id: ID
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      estado: Enum_EstadoUsuario
      rol: Enum_Rol!
    ): Usuario

    eliminarUsuario(_id: String!, correo: String): Usuario

    editarUsuario(
      _id: ID
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      estado: Enum_EstadoUsuario
    ): Usuario

    crearProyecto(
      _id: ID
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      estado: Enum_EstadoProyecto
      faseProyecto: Enum_FaseProyecto
      lider: String!
    ): Proyecto
  }
`;
export { typeDefs };
