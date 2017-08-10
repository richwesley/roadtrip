var db = require("../models");
var record = db.User.username;
// [
//     { id: 1, username: 'jack', password: 'secret', displayName: 'Jack', emails: [ { value: 'jack@example.com' } ] }
//   , { id: 2, username: 'jill', password: 'birthday', displayName: 'Jill', emails: [ { value: 'jill@example.com' } ] }
// ];

// exports.findById = function(id, cb) {
//   process.nextTick(function() {
//     var idx = id - 1;
//     if (records[idx]) {
//       cb(null, records[idx]);
//     } else {
//       cb(new Error('User ' + id + ' does not exist'));
//     }
//   });
// }

// exports.findByUsername = function(username, cb) {
//   process.nextTick(function() {
//       if (record === username) {
//         return cb(null, record);
//       }
//     return cb(null, null);
//   });
// }

exports.findByUsername = function(username, cb) {
  db.User.findAll({
    where: {
      username: username
    }
  });
}