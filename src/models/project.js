import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  budget: {
    type: String,
    required: true,
    enum: ['Less than USD 50', 'USD 100 - 250', 'USD 250 - 500', 'USD 500 - 1000', 'USD 1000 - 3000', 'More than USD 3000'],
  },
  pay: {
    type: String,
    required: true,
    enum: ['Fixed price project', 'Hourly project'],
  },
  skills: {
    type: [String],
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

export default mongoose.model('Project', schema);
