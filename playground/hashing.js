const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abc123!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (error, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$SxwImE6NxhmpL3zXYFHetevF70D.3ILYngPQAXZt12zcfbv1bw2q2';

bcrypt.compare(password, hashedPassword, (error, result) => {
  console.log(result);
});

// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log('Decoded: ', decoded);
