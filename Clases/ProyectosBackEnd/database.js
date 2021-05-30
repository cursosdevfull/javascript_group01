const mongoose = require('mongoose');

const uri =
  'mongodb+srv://usuario-colegio:12345@clustercurso.u8dld.mongodb.net/Colegio?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  poolSize: 10,
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connection to MongoDB established');
});

connection.once('error', (err) => console.log(err));
