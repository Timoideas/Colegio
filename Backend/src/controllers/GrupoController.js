import { ValidateObject } from '../libraries/Validate';
import GrupoSchema from '../models/GrupoSchema';

export async function GETGrupo(_, res) {
  try {
    const { name } = req.params;
    const grupos = await GrupoSchema.findOne({ name });
    res.status(200).json({ ok: true, grupos });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function GETGrupos(_, res) {
  try {
    const grupos = await GrupoSchema.find()
      .populate({ path: 'cusos', populate: { path: 'docente' } })
      .exec();
    res.status(200).json({ ok: true, grupos });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function POSTGrupo(req, res) {
  try {
    const { name } = req.body;
    const grupo = new GrupoSchema({
      name: name.toUpperCase(),
    });
    const grupoDB = await grupo.save();
    res.status(200).json({ ok: true, data: grupoDB });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}

export async function PUTGrupo(req, res) {
  try {
    const { id } = req.params;
    const body = await ValidateObject(req.body, ['cursos', 'banner', 'name']);
    body.name = body.name.toUpperCase();

    const grupo = await GrupoSchema.findByIdAndUpdate(id, body, {
      new: true,
    });

    res.status(200).json({ ok: true, data: grupo });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}

export async function DELETEGrupo(req, res) {
  const { id } = req.body;
  Schema.findByIdAndDelete(id, (err, data) => {
    if (err || !data) return res.status(200).json({ ok: false, incorrect: id });
    res.status(200).json({ ok: true, data });
  });
}
