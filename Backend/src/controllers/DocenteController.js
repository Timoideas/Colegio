import { ValidateObject } from '../libraries/Validate';
import DocenteSchema from '../models/Docente.Schema';

export async function GETDocentes(_, res) {
  try {
    const docentes = await DocenteSchema.find();
    res.status(200).json({ ok: true, data: docentes });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function POSTDocente(req, res) {
  try {
    const { nombres, apellidos } = req.body;
    const docente = new DocenteSchema({
      nombres,
      apellidos,
    });
    const docenteDB = await docente.save();
    res.status(200).json({ ok: true, data: docenteDB });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function PUTDocente(req, res) {
  try {
    const { id } = req.params;
    const body = await ValidateObject(req.body, [
      'username',
      'nombres',
      'apellidos',
      'curso',
    ]);
    const docente = await DocenteSchema.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.status(200).json({ ok: true, data: docente });
  } catch ({ message }) {
    res.status(200).json({ ok: true, message });
  }
}
export async function DELETEDocente(req, res) {
  const { id } = req.body;
  Schema.findByIdAndDelete(id, (err, data) => {
    if (err || !data) return res.status(200).json({ ok: false, incorrect: id });
    res.status(200).json({ ok: true, data });
  });
}
