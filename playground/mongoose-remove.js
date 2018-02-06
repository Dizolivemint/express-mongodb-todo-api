const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

Todo.remove().then((result) => {
  console.log(result);
});

Todo.findOneAndRemove({id: '5a75ffa048fec60c2dc2e9a6'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5a75ffa048fec60c2dc2e9a6').then((todo) => {
  console.log(todo);
});
