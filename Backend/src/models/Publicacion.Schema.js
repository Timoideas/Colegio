import { Schema, model } from 'mongoose';
import validator from 'mongoose-unique-validator';
import { Fecha } from '../libraries/Fecha';
const PublicacionSchema = new Schema({
  title: { type: String },
  banner: { type: String },
  body: { type: String },
  timestamp: { type: String, default: Fecha },
});
PublicacionSchema.plugin(validator, { message: 'El {PATH} debería ser único' });
export default model('Publicacion', PublicacionSchema);
