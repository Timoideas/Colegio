import { Schema, model } from 'mongoose';
import validator from 'mongoose-unique-validator';
const UserSchema = new Schema({
  name: { type: String },
  username: { type: String },
});
UserSchema.plugin(validator, { message: 'El {PATH} debería ser único' });
export default model('User', UserSchema);
