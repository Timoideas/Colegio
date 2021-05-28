import { Schema, model } from 'mongoose';
import validator from 'mongoose-unique-validator';
import { Fecha } from '../libraries/Fecha';
const ActividadSchema = new Schema({
  name: { type: String },
  fecha: { type: String, default: Fecha },
  vigencia: { type: Boolean, default: true },
});
ActividadSchema.plugin(validator, { message: 'El {PATH} debería ser único' });
export default model('Actividad', ActividadSchema);
