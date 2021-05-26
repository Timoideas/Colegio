import GrupoSchema from '../models/GrupoSchema';

export async function GETGrupo(_, res) {
  try {
    const { nombre } = req.params;
    const grupos = await GrupoSchema.findOne({ name: nombre });
    res.status(200).json({ ok: true, grupos });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function GETGrupos(_, res) {
  try {
    const grupos = await GrupoSchema.find();
    res.status(200).json({ ok: true, grupos });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function POSTGrupo(req, res) {
  try {
    const { name } = req.body;
    const grupo = new GrupoSchema({
      name,
    });
    const grupo = await grupo.save();
    res.status(200).json({ ok: true, grupo });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function PUTGrupo(req, res) {
  const body = req.body;
  res.status(200).json({ ok: true, body });
}
export async function DELETEGrupo(req, res) {
  const { id } = req.body;
  Schema.findByIdAndDelete(id, (err, data) => {
    if (err || !data) return res.status(200).json({ ok: false, incorrect: id });
    res.status(200).json({ ok: true, data });
  });
}
