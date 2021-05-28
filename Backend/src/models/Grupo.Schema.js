import { Schema, model } from 'mongoose';
import validator from 'mongoose-unique-validator';
import { Fecha } from '../libraries/Fecha';
const GrupoSchema = new Schema({
  name: { type: String },
  horario: {
    lunes: [{ type: String }],
    martes: [{ type: String }],
    miercoles: [{ type: String }],
    sabado: [{ type: String }],
    domingo: [{ type: String }],
  },
  cursos: [
    {
      nombre: { type: String },
      docente: { type: Schema.Types.ObjectId, ref: 'Docente' },
      tareas: [
        {
          descripcion: { type: String },
          expiracion: { type: Date, default: Fecha },
        },
      ],
    },
  ],
  alumnos: [{ type: Schema.Types.ObjectId, ref: 'Alumno' }],
  banner: { type: String },
});
GrupoSchema.plugin(validator, { message: 'El {PATH} debería ser único' });
export default model('Grupo', GrupoSchema);
