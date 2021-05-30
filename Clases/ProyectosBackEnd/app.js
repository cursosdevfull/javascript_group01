const express = require('express');
const ProjectModel = require('./model');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extendeded: true }));

app.use(express.static('./public'));

app.get('/project', async (req, res) => {
  const projects = await ProjectModel.find();
  res.json(projects);
});

module.exports = app;
