import { connect } from "mongoose";
const conectarBD = async () => {
  return await connect(process.env.DB_URL)
    .then(() => {
      console.log("conexion exitosa");
    })
    .catch((e) => {
      console.error("error conectando a la BD", e);
    });
};

export { conectarBD };
