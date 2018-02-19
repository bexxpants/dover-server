import express from 'express';
import authenticate from '../middlewares/authenticate';
import Bio from '../models/bio';

const router = express.Router();
router.use(authenticate);

router.get('/', (req, res) => {
  Bio.find({ userId: req.currentUser._id }).then(userinfo => res.json({ userinfo }));
});

router.post('/', (req, res) => {
  const userId = req.currentUser;
  const { firstName, lastName, companyName, githubUsername, twitterUsername, about, portfolioLink } = req.body.userinfo;
  const userinfo = new Bio({ firstName, lastName, companyName, githubUsername, twitterUsername, about, portfolioLink, userId });

  userinfo.save().then(userinfo => {
    res.json({ userinfo });
  }).catch(err => {
    res.status(400).json({ errors: err });
  })
});

export default router;
