import express from 'express';
import authenticate from '../middlewares/authenticate';
import Project from '../models/project';

const router = express.Router();
router.use(authenticate);

router.get('/', (req, res) => {
  res.json({message: 'it works!!'});
});

router.post('/', (req, res) => {
  const userId = req.currentUser;
  const { name, description, budget, pay } = req.body.project;
  const project = new Project({ name, description, budget, pay, userId });

  project.save().then(project => {
    res.json({ project });
    console.log(project);
  }).catch(err => {
    res.status(400).json({ errors: err });
  })
});

export default router;
