import mongoose from 'mongoose';
import validator from 'validator';

const youngScientistSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Требуется имя участника'],
  },
  position: {
    type: String,
    required: [true, 'Требуется должность участника'],
  },
  cellNumber: {
    type: String,
  },
  email: {
    type: String,
    validate: {
      validator(v) {
        if (v === null || v === undefined || v === '') {
          return true;
        }
        return validator.isEmail(v);
      },
      message: 'Некорректный адрес электронной почты',
    },
  },
  description: {
    type: String,
    required: [true, 'Требуется описание участника'],
  },
});

const YoungScientist = mongoose.Schema('youngScientist', youngScientistSchema);
export default YoungScientist;
