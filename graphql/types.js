import { gql } from "apollo-server-core";

const tiposGlobales = gql`
  scalar Date
`;
const tipos = [tiposGlobales];

export { tipos };
