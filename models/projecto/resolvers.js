import { ProjectModel } from "../proyecto/project";
const resolversProyecto = {
  Query: {
    Proyectos: async (parent, args) => {
      const proyectosEncontrados = await ProjectModel.find();
      return proyectosEncontrados;
    },
    Proyecto: async (parent, args) => {
      const proyectoEncontrado = await ProjectModel.findOne({
        _id: _id,
      });
    },
  },
  Mutation: {},
};

export { resolversProyecto };
