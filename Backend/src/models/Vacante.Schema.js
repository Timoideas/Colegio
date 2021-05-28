import { Schema, model } from 'mongoose';
import validator from 'mongoose-unique-validator';
const VacanteSchema = new Schema({
  name: { type: String },
  username: { type: String },
  tefefono: { type: String },
  dni: { type: String },
});
VacanteSchema.plugin(validator, { message: 'El {PATH} debería ser único' });
export default model('Vacante', VacanteSchema);
