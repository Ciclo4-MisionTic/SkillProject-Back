import { Enum_EstadoProyecto } from "../models/enums/enums";
import { ProjectModel } from "../models/proyecto/project";
import { UserModel } from "../models/usuario/user";

const resolvers = {
  Query: {
    Usuarios: async () => {
      const usuarios = await UserModel.find();
      return usuarios;
    },
    Usuario: async (parent, args) => {
      const findUser = await UserModel.findOne({ _id: args._id });
      return findUser;
    },
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
    crearUsuario: async (parent, args) => {
      const UsuarioCreado = await UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol,
      });
      if (Object.keys(args).includes("estado")) {
        UsuarioCreado.estado = args.estado;
      }
      return UsuarioCreado;
    },
    eliminarUsuario: async (parent, args) => {
      const usuarioEliminado = await UserModel.findOneAndDelete({
        _id: args._id,
      });
      return usuarioEliminado;
    },
    editarUsuario: async (parent, args) => {
      const editarUsuario = await UserModel.findOneAndUpdate({
        _id: args._id,
      });
    },
    crearProyecto: async (parent, args) => {
      const crearProyecto = await ProjectModel.create({
        nombre: args.nombre,
        estado: args.estado,
        presupuesto: args.presupuesto,
        lider: args.lider,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        faseProyecto: args.faseProyecto,
        // objetivos: args.objetivos,
      });
      return crearProyecto;
    },
  },
};

export { resolvers };
