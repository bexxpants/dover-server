import express from 'express';
import authenticate from '../middlewares/authenticate';
import Proposal from '../models/proposal';

const router = express.Router();
router.use(authenticate);

router.get('/:id', (req, res) => {
  Proposal.find({ projectId: req.params.id }).then((proposals) => {
    res.json({ proposals });
  });
});

router.post('/', (req, res) => {
  const { details, budget, time, projectId } = req.body.proposal;
  const proposal = new Proposal({
    details,
    budget,
    time,
    projectId,
  });
  proposal
    .save()
    .then((proposal) => {
      res.json({ proposal });
    })
    .catch((err) => {
      res.status(400).json({ errors: err });
    });
});

export default router;
