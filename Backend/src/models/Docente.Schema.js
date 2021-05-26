import { Schema, model } from 'mongoose';
import validator from 'mongoose-unique-validator';
const DocenteSchema = new Schema({
  name: { type: String },
});
DocenteSchema.plugin(validator, { message: 'El {PATH} debería ser único' });
export default model('Docente', DocenteSchema);
