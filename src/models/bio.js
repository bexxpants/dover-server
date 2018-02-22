import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true
  },
  githubUsername: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  twitterUsername: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  portfolioLink: {
    type: String,
    required: false,
  },
  linkedinUsername: {
    type: String,
    required: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  }
});

export default mongoose.model('Bio', schema);
