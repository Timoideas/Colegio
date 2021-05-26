import { Schema, model } from 'mongoose';
import validator from 'mongoose-unique-validator';
const cursos = ['MATEMATICA', 'COMUNICACION', 'CIENCIAS', 'ARTE'];
const DocenteSchema = new Schema({
  nombres: { type: String, requiered: [true, 'Este campo es requerido'] },
  apellidos: { type: String, requiered: [true, 'Este campo es requerido'] },
  curso: { type: String, enum: cursos },
  username: { type: String, unique: true },
});
DocenteSchema.plugin(validator, { message: 'El {PATH} debería ser único' });
export default model('Docente', DocenteSchema);
