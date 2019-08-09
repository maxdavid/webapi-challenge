const express = require('express');
const server = express();
const cors = require('cors');

const actionRouter = require('./routes/actionRouter');
const projectRouter = require('./routes/projectRouter');

server.use(express.json());
server.use(cors());

const logger = (req, res, next) => {
  console.log(`${req.method} request made to ${req.url} at ${Date.now()}`);
  next();
};

server.use(logger);

server.get('/', (req, res) => {
  res.status(200).json('nice');
});

server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

module.exports = server;
