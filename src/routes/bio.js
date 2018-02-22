import express from 'express';
import mongo from 'mongodb';
import assert from 'assert';
import authenticate from '../middlewares/authenticate';
import Bio from '../models/bio';

const router = express.Router();
router.use(authenticate);

router.get('/', (req, res) => {
  Bio.find({ userId: req.currentUser._id }).then(userinfo => res.json({ userinfo }));
});

router.post('/', (req, res) => {
  const userId = req.currentUser;
  const { firstName, lastName, companyName, githubUsername, twitterUsername, about, portfolioLink, linkedinUsername } = req.body.userinfo;
  const userinfo = new Bio({ firstName, lastName, companyName, githubUsername, twitterUsername, about, portfolioLink, linkedinUsername, userId });

  userinfo.save().then(userinfo => {
    res.json({ userinfo });
  }).catch(err => {
    res.status(400).json({ errors: err });
  })
});

router.put('/edit', (req, res) => {
  const updatedInfo = {
    firstName: req.body.userinfo.firstName,
    lastName: req.body.userinfo.lastName,
    companyName: req.body.userinfo.companyName,
    about: req.body.userinfo.about,
    githubUsername: req.body.userinfo.githubUsername,
    twitterUsername: req.body.userinfo.twitterUsername,
    portfolioLink: req.body.userinfo.portfolioLink,
    linkedinUsername: req.body.userinfo.linkedinUsername,

  };
  mongo.connect(process.env.MONGODB_URL, (err, database) => {
    const db = database.db('doverusers');
    db.collection('bios').findOneAndUpdate({userId: req.currentUser._id},{$set: updatedInfo});
  })

});



export default router;
