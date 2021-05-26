import UserSchama from '../models/AlumnoSchama';

export async function GETusers(req, res) {
  UserSchama.find()
    .then((users) => res.status(200).json({ ok: true, users }))
    .catch((err) => res.status(200).json({ ok: false, err }));
}
export async function GETuser(req, res) {
  const id = req.params.id;
  UserSchama.findOne({ username: id.toLowerCase() })
    .then((user) => res.status(200).json({ ok: true, user }))
    .catch((err) => res.status(200).json({ ok: false, err }));
}
export async function POSTuser(req, res) {
  let { name, username } = req.body;
  const user = new UserSchama({
    name: name.toLowerCase(),
    username: username.toLowerCase(),
  });
  user
    .save()
    .then((user) => res.status(200).json({ ok: true, user }))
    .catch((err) => res.status(200).json({ ok: false, err }));
}
export async function PUTuser(req, res) {
  const body = req.body;
  res.status(200).json({ ok: true, body });
}
export async function DELETEuser(req, res) {
  const { id } = req.body;
  UserSchama.findByIdAndDelete(id, (err, data) => {
    if (err || !data) return res.status(200).json({ ok: false, incorrect: id });
    res.status(200).json({ ok: true, data });
  });
}
