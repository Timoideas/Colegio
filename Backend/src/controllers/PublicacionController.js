import { ValidateObject } from '../libraries/Validate';
import PublicaiconSchema from '../models/Publicacion.Schema';

export async function GETPublicaciones(req, res) {
  try {
    const PublicacionDB = await PublicaiconSchema.find();
    res.status(200).json({ ok: true, data: PublicacionDB });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function GETPublicacion(req, res) {
  try {
    const { id } = req.params;
    const PublicacionDB = await PublicaiconSchema.findById(id);
    res.status(200).json({ ok: true, data: PublicacionDB });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function POSTPublicacion(req, res) {
  try {
    const body = await ValidateObject(req.body, ['title', 'banner', 'body']);
    const Publicacion = new PublicaiconSchema(body);
    console.log(body);
    const PublicacionDB = await Publicacion.save();
    res.status(200).json({ ok: true, data: PublicacionDB });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function PUTPublicacion(req, res) {
  try {
    const { id } = req.params;
    const body = await ValidateObject(req.body, ['']);
    const Publicacion = await PublicaiconSchema.findOneAndUpdate(
      { _id: id },
      body,
      { new: true }
    );
    res.status(200).json({ ok: true, data: Publicacion });
  } catch ({ message }) {
    res.status(200).json({ ok: false, message });
  }
}
export async function DELETEPublicacion(req, res) {
  const { id } = req.body;
  PublicaiconSchema.findByIdAndDelete(id, (err, data) => {
    if (err || !data) return res.status(200).json({ ok: false, incorrect: id });
    res.status(200).json({ ok: true, data });
  });
}
