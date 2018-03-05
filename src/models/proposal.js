import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  details: {
    type: String,
    required: true,
  },
  budget: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

export default mongoose.model('Proposal', schema);
