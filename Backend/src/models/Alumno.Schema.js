import { Schema, model } from 'mongoose';
import validator from 'mongoose-unique-validator';
const AlumnoSchema = new Schema({
  name: { type: String },
  lastname: { type: String },
  grupo: { type: Schema.Types.ObjectId, ref: 'Grupo' },
  username: { type: String },
  horario: { type: Schema.Types.ObjectId, ref: 'Horario' },
  // Las evidencias no son publicas, excepto para el docente y el director, solo la cantidad de evidencias presentadas,
  evidencias: { type: [{ type: String }] },
  password: { type: String },
  perfil: { type: String },
  // Cada tarea tiene fecha de expiracion
  tareas: [
    { tarea: { type: Schema.Types.ObjectId }, completada: { type: Boolean } },
  ],
});
AlumnoSchema.plugin(validator, { message: 'El {PATH} debería ser único' });
export default model('Alumno', AlumnoSchema);
