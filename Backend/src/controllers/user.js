import { ValidateObject } from '../libraries/Validate';
import AlumnoSchema from '../models/Alumno.Schema';
import GrupoSchema from '../models/Grupo.Schema';

export async function GETAlumnos(req, res) {
  try {
    const AlumnoDB = await AlumnoSchema.find();
    res.status(200).json({ ok: true, data: AlumnoDB });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function GETAlumno(req, res) {
  try {
    const { id } = req.params;
    const AlumnoDB = await AlumnoSchema.findById(id);
    res.status(200).json({ ok: true, data: AlumnoDB });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function POSTAlumno(req, res) {
  try {
    const body = await ValidateObject(req.body, [
      'name',
      'lastname',
      'grupo',
      'username',
      'password',
    ]);
    const Alumno = new AlumnoSchema(body);
    const AlumnoDB = await Alumno.save();
    await GrupoSchema.findByIdAndUpdate(
      { _id: body.grupo },
      { $push: { alumnos: AlumnoDB._id } }
    );
    res.status(200).json({ ok: true, data: AlumnoDB });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function PUTAlumno(req, res) {
  try {
    const { id } = req.params;
    const body = await ValidateObject(req.body, [
      'name',
      'lastname',
      'grupo',
      'username',
      'password',
    ]);
    const Alumno = await AlumnoSchema.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    res.status(200).json({ ok: true, data: Alumno });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function DELETEAlumno(req, res) {
  const { id } = req.body;
  AlumnoSchema.findByIdAndDelete(id, (err, data) => {
    if (err || !data) return res.status(200).json({ ok: false, incorrect: id });
    res.status(200).json({ ok: true, data });
  });
}
