import { ProjectModel } from "./project";

const resolversProjects = {
  Query: {
    Proyectos: async (parent, args) => {
      const proyectos = await ProjectModel.find().populate("lider");

      return proyectos;
    },
    Proyecto: async (parent, args) => {
      const findProject = await ProjectModel.findOne({
        _id: args._id,
      })
        .populate("lider")
        .populate("objetivos");
      return findProject;
    },
    ProyectosLider: async (parent, args) => {
      const proyectos = await ProjectModel.find({ lider: args.lider })
        .populate("lider")
        .populate("objetivos");
      return proyectos;
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
        fase: args.faseProyecto,
        objetivos: args.objetivos,
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
          fase: args.faseProyecto,
          objetivos: args.objetivos,
        },
        { new: true }
      );
    },
  },
};
export { resolversProjects };
