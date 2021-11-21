import express from "express";
import cors from "cors";
//import { ApolloServer } from 'apollo-server-express';
import dotenv from "dotenv";
import conectarBD from "./db/db.js";
import { projectModel } from "./modelos_esquemas/models/project/project.js";
//import { tipos } from './graphql/types.js';
//import { resolvers } from './graphql/resolvers.js';

dotenv.config();

// const server = new ApolloServer({
//   typeDefs: tipos,
//   resolvers: resolvers,
// });

const app = express();

app.use(express.json());

app.use(cors());

app.listen({ port: process.env.PORT || 4000 }, async () => {
  await conectarBD();
  // await server.start();

  // server.applyMiddleware({ app });

  // creacion Proyecto
  // const proyectoX = await projectModel
  //   .create({
  //     nombre: "test Project",
  //     fechaInicio: Date.now(),
  //     fechaFin: new Date("2022/11/10"),
  //     presupuesto: 12000,
  //     lider: "daniel", // aqui se pone el usuario a la hora de crear o el _id
  //     objetivos: [
  //       {
  //         descripcion: "objetivo especifico1",
  //         tipo: "ESPECIFICO",
  //       },
  //     ],
  //   })
  //   .then((p) => {
  //     console.log("proyecto Creado", p);
  //   })
  //   .catch((e) => {
  //     console.error("Error Creando proyecto", e);
  //   });

  console.log("servidor listo");
});
