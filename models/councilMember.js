import mongoose from 'mongoose';

const councilMemberSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Требуется имя участника совета'],
  },
  jobPosition: {
    type: String,
    required: [true, 'Требуется должность участника совета'],
  },
});

const CouncilMember = mongoose.model('councilMember', councilMemberSchema);
export default CouncilMember;
