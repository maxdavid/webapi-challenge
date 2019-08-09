const router = require('express').Router();
const projectModel = require('../data/helpers/projectModel');
const actionModel = require('../data/helpers/actionModel');

router.post('/', validateProject, (req, res) => {
  projectModel.insert(req.body).then(newProject => {
    if (newProject)
      res.status(201).json({ message: 'Project added.', project: newProject });
    else res.status(500).json({ message: 'Error adding project.' });
  });
});

router.post('/:id/actions', validateProjectId, validateAction, (req, res) => {
  actionModel
    .insert({ ...req.body, project_id: req.project.id })
    .then(newAction => {
      if (newAction)
        res.status(201).json({ message: 'Action added.', action: newAction });
      else res.status(500).json({ message: 'Error adding action.' });
    });
});

router.get('/', (req, res) => {
  projectModel.get().then(projects => res.status(200).json(projects));
});

router.get('/:id', validateProjectId, (req, res) => {
  res.status(200).json(req.project);
});

router.get('/:id/completed', validateProjectId, (req, res) => {
  res.status(200).json(req.project.completed);
});

router.get('/:id/actions', validateProjectId, (req, res) => {
  projectModel.getProjectActions(req.project.id).then(actions => {
    if (actions) res.status(200).json(actions);
    else res.status(500).json({ message: 'Error getting project actions.' });
  });
});

router.delete('/:id', validateProjectId, (req, res) => {
  projectModel.remove(req.project.id).then(records => {
    if (records) res.status(200).json({ message: 'Project deleted.' });
    else res.status(500).json({ message: 'Error deleting project.' });
  });
});

router.delete('/', (req, res) => {
  res.status(400).json({ message: 'Project ID required' });
});

router.put('/:id', validateProjectId, validateProject, (req, res) => {
  projectModel.update(req.project.id, req.body).then(project => {
    if (project)
      res.status(200).json({ message: 'Project updated.', project: project });
    else res.status(500).json({ message: 'Error updating project.' });
  });
});

// send {completed: boolean}
router.put('/:id/completed', validateProjectId, (req, res) => {
  projectModel
    .update(req.project.id, {
      name: req.project.name,
      description: req.project.description,
      completed: req.body.completed
    })
    .then(project => {
      if (project)
        res.status(200).json({ message: 'Project updated.', project: project });
      else res.status(500).json({ message: 'Error updating project.' });
    });
});

router.put('/:id/completed/toggle', validateProjectId, (req, res) => {
  const { id, name, description, completed } = req.project;
  projectModel
    .update(id, {
      name: name,
      description: description,
      completed: !completed
    })
    .then(project => {
      if (project)
        res.status(200).json({
          message: `Project now marked as ${completed ? 'not ' : ''}completed.`,
          project: project
        });
      else res.status(500).json({ message: 'Error updating project.' });
    });
});

router.put('/', (req, res) => {
  res.status(400).json({ message: 'Project ID required' });
});

//custom middleware

function validateProjectId(req, res, next) {
  req.project = { id: req.params.id };
  if (req.project.id) {
    projectModel.get(req.project.id).then(project => {
      if (project) {
        req.project = project;
        next();
      } else res.status(401).json({ message: 'Invalid Project ID' });
    });
  } else res.status(400).json({ message: 'Project ID required' });
}

function validateProject(req, res, next) {
  if (req.body && req.body.name && req.body.description) next();
  else if (!req.body.name)
    res.status(400).json({ message: 'Missing required name field' });
  else if (!req.body.description)
    res.status(400).json({ message: 'Missing required description field' });
  else res.status(400).json({ message: 'Missing project data' });
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
