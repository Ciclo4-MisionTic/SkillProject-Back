import { gql } from 'apollo-server-express';

const tiposAvance = gql`

  type Avance {
    _id: ID!
    fecha: Date!
    descripcion: String!
    observaciones: [String]
    proyecto: Proyecto!
    creadoPor: Usuario!
  }

  type Query {
    Avances: [Avance]
    filtrarAvance(_id: String!): [Avance]
  }
  type Mutation {
    crearAvance(fecha: Date!, descripcion: String!, observaciones: [String], proyecto: String!, creadoPor: String!): Avance
    editarObservaciones(_id:String!, observaciones: String!): Avance
    editarDescripcion(_id:String!, descripcion: String!): Avance
  }
`;

export { tiposAvance };
