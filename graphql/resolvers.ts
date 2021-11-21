import { resolversAdvancement } from "../models/avance/resolvers";
import { resolversInscription } from "../models/inscripcion/resolvers";
import { resolversProjects } from "../models/proyecto/resolvers";
import { resolversUsers } from "../models/usuario/resolvers";

const resolvers = {
  resolversUsers,
  resolversProjects,
  resolversInscription,
  resolversAdvancement,
};

export { resolvers };
