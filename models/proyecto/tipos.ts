import { gql } from "apollo-server-core";

const tipoProyecto = gql`
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

  input Objetivo {
    _id: ID!
    descripcion: String!
    tipo: String!
  }

  type Query {
    Proyectos: [Proyecto]
    Proyecto(_id: String!): Proyecto
  }

  type Mutation {
    crearProyecto(
      _id: ID!
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      estado: Enum_EstadoProyecto
      faseProyecto: Enum_FaseProyecto
      lider: String!
    ): Proyecto

    eliminarProyecto(_id: String!): Proyecto

    actualizarProyecto(
      _id: String!
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
export { tipoProyecto };
