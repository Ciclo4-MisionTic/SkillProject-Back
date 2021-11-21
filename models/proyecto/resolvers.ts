import { ProjectModel } from "./project";

const resolversProjects = {
  Query: {
    Proyectos: async () => {
      const proyectos = await ProjectModel.find();
      return proyectos;
    },
    Proyecto: async (parent, args) => {
      const findProject = await ProjectModel.findOne({
        _id: args._id,
      }).populate("lider");
      return findProject;
    },
  },
  Mutation: {
    crearProyecto: async (parent, args) => {
      const proyectoCreado = await ProjectModel.create({
        nombre: args.nombre,
        estado: args.estado,
        presupuesto: args.presupuesto,
        lider: args.lider,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        faseProyecto: args.faseProyecto,
        // objetivos: args.objetivos,
      });
      return proyectoCreado;
    },
    eliminarProyecto: async (parent, args) => {
      const proyectoEliminado = await ProjectModel.findByIdAndDelete({
        _id: args._id,
      });
      return proyectoEliminado;
    },
    actualizarProyecto: async (parent, args) => {
      const proyectoActualizado = await ProjectModel.findByIdAndUpdate(
        {
          _id: args._id,
        },
        {
          nombre: args.nombre,
          estado: args.estado,
          presupuesto: args.presupuesto,
          lider: args.lider,
          fechaInicio: args.fechaInicio,
          fechaFin: args.fechaFin,
          faseProyecto: args.faseProyecto,
          // objetivos: args.objetivos,
        },
        { new: true }
      );
    },
  },
};
export { resolversProjects };
