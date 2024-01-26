import mongoose from 'mongoose';

const schoolSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Требуется название школы'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'Требуется описание школы'],
  },
});

const School = mongoose.model('school', schoolSchema);
export default School;
