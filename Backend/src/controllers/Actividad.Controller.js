import { ValidateObject } from '../libraries/Validate';
import ActividadSchema from '../models/Actividad.Schema';

export async function GETActividades(req, res) {
  try {
    const ActividadDB = await ActividadSchema.find();
    res.status(200).json({ ok: true, data: ActividadDB });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function GETActividad(req, res) {
  try {
    const { id } = req.params;
    const ActividadDB = await ActividadSchema.findById(id);
    res.status(200).json({ ok: true, data: ActividadDB });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function POSTActividad(req, res) {
  try {
    const body = await ValidateObject(req.body, ['name', 'fecha', 'vigencia']);
    const Actividad = new ActividadSchema(body);
    const ActividadDB = await Actividad.save();
    res.status(200).json({ ok: true, data: ActividadDB });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function PUTActividad(req, res) {
  try {
    const { id } = req.params;
    const body = await ValidateObject(req.body, ['name', 'fecha', 'vigencia']);
    const Actividad = await ActividadSchema.findOneAndUpdate(
      { _id: id },
      body,
      { new: true }
    );
    res.status(200).json({ ok: true, data: Actividad });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function DELETEActividad(req, res) {
  const { id } = req.body;
  ActividadSchema.findByIdAndDelete(id, (err, data) => {
    if (err || !data) return res.status(200).json({ ok: false, incorrect: id });
    res.status(200).json({ ok: true, data });
  });
}
