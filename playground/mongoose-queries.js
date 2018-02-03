const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// var id = '5a75ffa048fec60c2dc2e9a6';
//
// if (!ObjectID.isValid) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("Todos: ", todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log("Todo: ", todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log("Todo find by ID: ", todo);
// }).catch((e) => console.log(e));

var id = '5a74007198fcbe7c25c71348'
User.findById(id).then((user) => {
  if (!user) {
    return console.log('User ID not found');
  }
  console.log('User find by ID: ', JSON.stringify(user, undefined, 2));
}, (e) => console.log('User ID is invalid', e));
