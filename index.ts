import { conectarBD } from "./db/db";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import cors from "cors";
import { tipos } from "./graphql/types";
import { resolvers } from "./graphql/resolvers";
dotenv.config();

const puerto = process.env.PORT;

const server = new ApolloServer({
  typeDefs: tipos,
  resolvers: resolvers,
});

const app = express();

app.use(express.json());

app.use(cors());

app.listen({ port: puerto || 4000 }, async () => {
  await conectarBD();
  await server.start();

  server.applyMiddleware({ app });
  console.log("Servidor encendido");
});

// METODO 1
// const metodo1Consulta = async () => {
//   const proyecto = await ProjectModel.findOne({
//     _id: "61934e1c6ed628a818bc0602",
//   });
//   console.log("el proyecto encontrado es: ", proyecto);
//   const objetivos = await ObjectiveModel.find({
//     project: "61934e1c6ed628a818bc0602",
//   });
//   console.log("los objetivos", objetivos);

//   const proyectosConObjetivos = { ...proyecto, objetivos };
//   console.log("proyecto con objetivos", proyectosConObjetivos);
// };
// METODO 2 (relacion parte one solo para nosql y si se vuelve muy pesado el proyecto puede afectar rendimiento)
// const metodo2Creacion = async () => {
//   const usuarioInicial = await UserModel.create({
//     correo: "da_919@hotmail.com",
//     identificacion: "1007223403",
//     nombre: "Daniel",
//     apellido: "Castaño",
//     rol: Enum_Rol.ADMINISTRADOR,
//     estado: Enum_EstadoUsuario.AUTORIZADO,
//   });

//   const objetivoEspecifico1 = await ObjectiveModel.create({
//     descripcion: "este es el objetivo especifico 1",
//     tipo: Enum_TipoObjetivo.ESPECIFICO,
//   });

//   const objetivoEspecifico2 = await ObjectiveModel.create({
//     descripcion: "este es el objetivo especifico 2",
//     tipo: Enum_TipoObjetivo.ESPECIFICO,
//   });

//   const objetivoGeneral1 = await ObjectiveModel.create({
//     descripcion: "este es el objetivo general 1",
//     tipo: Enum_TipoObjetivo.GENERAL,
//   });
//   const proyectoX = await ProjectModel.create({
//     nombre: "Proyecto X",
//     fechaInicio: Date.now(),
//     fechaFin: new Date("2022/11/10"),
//     presupuesto: 12000,
//     lider: usuarioInicial._id,
//     objetivos: [
//       objetivoEspecifico1._id,
//       objetivoEspecifico2._id,
//       objetivoGeneral1._id,
//     ],
//   });
// };
// const metodo2Consulta = async () => {
//   const proyecto = await ProjectModel.find({
//     id: "61944e75559c9b4d44fb3fa0",
//   }).populate("objetivos");
//   console.log("proyecto encontrado", JSON.stringify(proyecto));
// };
// METODO 3 # ONE TO MANY (se crea el proyecto y se agg los objetivos a mano)
// const metodo3Creacion = async () => {
//   const usuarioInicial = await UserModel.create({
//     correo: "da_919@gmail.com",
//     identificacion: "100722",
//     nombre: "Daniel",
//     apellido: "Castaño Barrera",
//     rol: Enum_Rol.ADMINISTRADOR,
//     estado: Enum_EstadoUsuario.AUTORIZADO,
//   });
//   const proyectoX = await ProjectModel.create({
//     nombre: "Proyecto X V2",
//     fechaInicio: Date.now(),
//     fechaFin: new Date("2022/11/10"),
//     presupuesto: 1200050,
//     lider: usuarioInicial._id,
//     objetivos: [
//       {
//         descripcion: "este es el objetivo especifico 1 de proyecto X V2",
//         tipo: Enum_TipoObjetivo.ESPECIFICO,
//       },
//       {
//         descripcion: "este es el objetivo especifico 2 de proyecto X V2",
//         tipo: Enum_TipoObjetivo.ESPECIFICO,
//       },
//       {
//         descripcion: "este es el objetivo general de proyecto X V2",
//         tipo: Enum_TipoObjetivo.GENERAL,
//       },
//     ],
//   });
// };
// const metodo3Consulta = async () => {
//   const consultaProyecto = await ProjectModel.find({
//     id: "6194550e9d2b56362c2202da",
//   });

//   console.log("el proyecto encontrado es", consultaProyecto);
// };
// CRUD
// CREAR USUARIO
// const crearUsuario = await userModel
//   .create({
//     correo: "dalkn@hotmial.com",
//     identificacion: "1007265",
//     nombre: "Jhonny",
//     apellido: "Walker",
//     rol: Enum_Rol.lider,
//     // estado: Enum_EstadoUsuario.autorizado
//   })
//   .then((u) => {
//     console.log("usuario creado", u);
//   })
//   .catch((e) => {
//     console.error("error creando usuario", e);
//   });

// OBTENER UN USUARIO

// await userModel
// .findOne({ correo: "da_919@hotmial.com" }) //si se le ponen comas es como hacer un and
//   .then((u) => {
//     console.log("usuario encontrado", u);
//   })
//   .catch((e) => {
//     console.error("error buscando usuario", e);
//   });

// OBTENER USUARIOS

// await userModel
//   .find()
//   .then((u) => {
//     console.log("usuario", u);
//   })
//   .catch((e) => {
//     console.error("error buscando user", e);
//   });

// ACTUALIZAR USUARIO

// await userModel
//   .findOneAndUpdate(
//     { correo: "da_919@hotmial.com" },
//     {
//    // aqui va el valor nuevo del campo o campos
//       estado: "da_919@hotmail.com",
//     }
//   )
//   .then((u) => {
//     console.log("actualizacion exitosa", u);
//   })
//   .catch((e) => {
//     console.error("error actualizando", e);
//   });

// ELIMINAR USUARIO

// await userModel
//   .findOneAndDelete({ correo: "da_919@hotmail.com" })
//   .then((u) => {
//     console.log("usuario eliminado", u);
//   })
//   .catch((e) => {
//     console.error("error borrando usuario", e);
//   });

// PROTECTOS

// const crearProyectoconObjetivos = async () => {
//   const usuarioInicial = await UserModel.create({
//     correo: "Jhonny@Walker.com",
//     identificacion: "1007265",
//     nombre: "Jhonny",
//     apellido: "Walker",
//     rol: Enum_Rol.LIDER,
//     estado: Enum_EstadoUsuario.AUTORIZADO,
//   });

//   const proyectoX = await ProjectModel.create({
//     nombre: "Proyecto X",
//     fechaInicio: Date.now(),
//     fechaFin: new Date("2022/11/10"),
//     presupuesto: 1219,
//     lider: usuarioInicial._id,
//   })
//     .then((u) => {
//       console.log("proyecto creado", u);
//     })
//     .catch((e) => {
//       console.error("error creando proyecto", e);
//     });

//   const objetivoEspecifico1 = await ObjectiveModel.create({
//     descripcion: "este es el objetivo especifico 1",
//     tipo: Enum_TipoObjetivo.ESPECIFICO,
//     proyecto: "proyectoX._id",
//   });

//   const objetivoEspecifico2 = await ObjectiveModel.create({
//     descripcion: "este es el objetivo especifico 2",
//     tipo: Enum_TipoObjetivo.ESPECIFICO,
//     proyecto: "proyectoX._id",
//   });

//   const objetivoGeneral1 = await ObjectiveModel.create({
//     descripcion: "este es el objetivo general de proyecto x",
//     tipo: Enum_TipoObjetivo.GENERAL,
//     proyecto: "proyectoX._id",
//   });
// };
//   consultar Proyecto
//   const proyecto = await ProjectModel.find({ nombre: "Proyecto 3" }).populate('lider').populate(
//     "objetivos"
//   );
//   console.log("el proyecto es", JSON.stringify(proyecto));
