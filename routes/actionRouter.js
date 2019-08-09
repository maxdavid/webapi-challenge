const express = require('express');
const router = express.Router();
const actionModel = require('../data/helpers/actionModel');

router.get('/', (req, res) => {
  actionModel.get().then(actions => res.status(200).json(actions));
});

router.get('/:id', validateActionId, (req, res) => {
  res.status(200).json(req.action);
});

router.delete('/:id', validateActionId, (req, res) => {
  actionModel.remove(req.action.id).then(records => {
    if (records) res.status(200).json({ message: 'Action deleted.' });
    else res.status(500).json({ message: 'Error deleting action.' });
  });
});

router.put('/:id', validateActionId, validateAction, (req, res) => {
  actionModel.update(req.action.id, req.body).then(action => {
    if (action)
      res.status(200).json({ message: 'Action updated.', action: action });
    else res.status(500).json({ message: 'Error updating action.' });
  });
});

// custom middleware

function validateActionId(req, res, next) {
  req.action = { id: req.params.id };
  if (req.action.id) {
    actionModel.get(req.action.id).then(action => {
      if (action) {
        req.action = action;
        next();
      } else res.status(401).json({ message: 'Invalid Action ID' });
    });
  } else res.status(400).json({ message: 'Action ID required' });
}

function validateAction(req, res, next) {
  if (req.body && req.body.description && req.body.notes) next();
  else if (!req.body.description)
    res.status(400).json({ message: 'Missing required description field' });
  else if (!req.body.notes)
    res.status(400).json({ message: 'Missing required notes field' });
  else res.status(400).json({ message: 'Missing action data' });
}

module.exports = router;
