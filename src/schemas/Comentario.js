import { Schema, model } from "mongoose";

const Comentario = new Schema({
  user: String,
  idproduto: String,
  comentario: String,
  printcomentario: String,
  star: String,
  data: String,
});
export default model("Comentario", Comentario);
