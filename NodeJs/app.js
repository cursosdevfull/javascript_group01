const express = require('express');
const UserModel = require('./model');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extendeded: true }));

const persons = [];

app.post('/person', async (req, res) => {
  const data = {
    name: req.body.name,
    age: +req.body.age,
  };

  const user = new UserModel(data);
  await user.save();
  res.send(user);
});

app.get('/person', async (req, res) => {
  const users = await UserModel.find();

  /*   res
    .type("applicaction/json")
    .send(JSON.stringify(users)) */
  res.json(users);
});

app.get('/person/:id', async (req, res) => {
  const id = req.params.id;
  //const user = await UserModel.find({_id: id})
  // const user = await UserModel.findOne({ _id: id });
  const user = await UserModel.findById(id);

  res.json(user);
  // res.send(persons[+req.params.position]);
});

app.put('/person/:id', async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  await UserModel.updateOne({ _id: id }, data);
  res.send('updated');
});

app.delete('/person/:id', async (req, res) => {
  const id = req.params.id;
  await UserModel.deleteOne({ _id: id });
  res.send('deleted');
});

module.exports = app;
