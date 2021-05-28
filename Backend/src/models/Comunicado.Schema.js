import { Schema, model } from 'mongoose';
import validator from 'mongoose-unique-validator';
import { Fecha } from '../libraries/Fecha';
const ComunicadoSchema = new Schema({
  name: { type: String },
  title: { type: String },
  body: { type: String },
  date: { type: String, default: Fecha },
});
ComunicadoSchema.plugin(validator, { message: 'El {PATH} debería ser único' });
export default model('Comunicado', ComunicadoSchema);
