import { ValidateObject } from '../libraries/Validate';
import VacanteSchema from '../models/Vacante.Schema';

export async function GETVacantes(req, res) {
  try {
    const VacanteDB = await VacanteSchema.find();
    res.status(200).json({ ok: true, data: VacanteDB });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function GETVacante(req, res) {
  try {
    const { id } = req.params;
    const VacanteDB = await VacanteSchema.findById(id);
    res.status(200).json({ ok: true, data: VacanteDB });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function POSTVacante(req, res) {
  try {
    const body = await ValidateObject(req.body, [
      'name',
      'usename',
      'telefono',
      'dni',
    ]);
    const Vacante = new VacanteSchema(body);
    const VacanteDB = await Vacante.save();
    res.status(200).json({ ok: true, data: VacanteDB });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function PUTVacante(req, res) {
  try {
    const { id } = req.params;
    const body = await ValidateObject(req.body, [
      'name',
      'usename',
      'telefono',
      'dni',
    ]);
    const Vacante = await VacanteSchema.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    res.status(200).json({ ok: true, data: Vacante });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function DELETEVacante(req, res) {
  const { id } = req.body;
  VacanteSchema.findByIdAndDelete(id, (err, data) => {
    if (err || !data) return res.status(200).json({ ok: false, incorrect: id });
    res.status(200).json({ ok: true, data });
  });
}
