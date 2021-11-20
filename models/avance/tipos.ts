import { gql } from "apollo-server-express";

const tipoAvance = gql`
  type Avance {
    fecha: Date!
    descripcion: String!
    observaciones: [String!]
    proyecto: Proyecto!
    creadoPor: Usuario!
  }

  type Query {
    Avances: [Avance]
    Avance(_id: String!): Avance
  }

  type Mutation {
    crearAvance(
      fecha: Date!
      descripcion: String!
      observaciones: [String!]
      proyecto: Proyecto!
      creadoPor: Usuario!
    ): Avance

    eliminarAvance(_id: String!): Avance

    editarAvance(
      fecha: Date!
      descripcion: String!
      observaciones: [String!]
      proyecto: Proyecto!
      creadoPor: Usuario!
    ): Avance
  }
`;
export { tipoAvance };
