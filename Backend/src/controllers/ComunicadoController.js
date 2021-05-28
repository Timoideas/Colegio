import { ValidateObject } from '../libraries/Validate';
import ComuinicadoSchema from '../models/Comunicado.Schema';

export async function GETComunicados(req, res) {
  try {
    const comunicados = await ComuinicadoSchema.find();
    res.status(200).json({ ok: true, data: comunicados });
  } catch ({ message }) {}
}
export async function POSTComunicado(req, res) {
  try {
    const body = await ValidateObject(req.body, ['name', 'title', 'body']);
    const comunicado = new ComuinicadoSchema(body);
    const comunicadoDB = await comunicado.save();
    res.status(200).json({ ok: true, data: comunicadoDB });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
ComuinicadoSchema.findById;
export async function PUTComunicado(req, res) {
  const body = req.body;
  res.status(200).json({ ok: true, body });
}
export async function DELETEComunicado(req, res) {
  const { id } = req.body;
  Schema.findByIdAndDelete(id, (err, data) => {
    if (err || !data) return res.status(200).json({ ok: false, incorrect: id });
    res.status(200).json({ ok: true, data });
  });
}
