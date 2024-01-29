import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Требуется имя пользователя'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Требуется пароль'],
  },
}, {
  versionKey: false,
});

const User = mongoose.model('user', userSchema);
export default User;
