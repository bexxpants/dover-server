import express from 'express';
import authenticate from '../middlewares/authenticate';
import Project from '../models/project';

const router = express.Router();
router.use(authenticate);

router.get('/', (req, res) => {
  Project.find({ userId: req.currentUser._id }).then(projects => res.json({ projects }));
});

router.post('/', (req, res) => {
  const userId = req.currentUser;
  const { name, description, budget, pay } = req.body.project;
  const project = new Project({ name, description, budget, pay, userId });

  project.save().then(project => {
    res.json({ project });
  }).catch(err => {
    res.status(400).json({ errors: err });
  })
});

router.post('/delete', (req, res) => {
  const id = req.body.id;
  Project.deleteOne({ _id: id}).then(deleted =>
    res.json({ data: deleted, message: 'deleted' }))
    .catch(err => {
      res.status(401).json({ errors: err})
    });
});

export default router;
