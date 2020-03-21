const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");
const { ObjectID } = require("mongodb");

// var id = "5e6d21d39cc63c57c0d69a24";
var id = "5e4d372d9644d3b4ba7f7034";

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos", todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Todo", todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!ObjectID.isValid(id)) {
//       return console.log("Id not valid");
//     }
//     console.log("Todo By Id", todo);
//   })
//   .catch(e => console.log(e));

User.findById("5e4d372d9644d3b4ba7f7034").then(
  user => {
    if (!user) {
      console.log("Unable to find user");
    }
    console.log(JSON.stringify(user, undefined, 2));
  },
  e => {
    console.log(e);
  }
);
