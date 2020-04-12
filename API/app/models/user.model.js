//app/models/user.models.js
const sql = require("./db.js");
const User = function (user) {
 this.username = user.username;
 this.password = user.password;
 this.name = user.name;
};
//Mengambil semua data user
User.getAll = result => { 
    sql.query("SELECT id, username, name, created_at FROM users", (err, res) => {
 if (err) {
 console.log("error: ", err);
 result(null, err);
 return;
 }
 console.log("result: ", res);
 result(null, res);
 });
};
// Mengambil user yang memiliki id = UserId
User.findById = (id, result) => {
 sql.query(`SELECT id, username, name, created_at FROM users WHERE id = ${id}`, (err, res) => {
 if (err) {
 console.log("error: ", err);
 result(err, null);
 return;
 }
 if (res.length) {
 console.log(res[0]);
 result(null, res[0]);
 return;
 }
 result({ kind: "not_found" }, null);
 });
};
// Membuat data user baru
User.create = (newUser, result) => {
 console.log(newUser);
 sql.query("INSERT INTO users (username, password, name) VALUES (?,MD5(?),?)", [newUser.username, newUser.password, newUser.name], (err,
    res) => {
     if (err) {
     console.log("error: ", err);
     result(err, null);
     return;
     }
     console.log(res);
     console.log("buat user: ", { id: res.insertId, ...newUser
    });
     result(null, { id: res.insertId, ...newUser });
     });
    };
    // Mengupdate data user yang memiliki id = id
    User.updateById = ( id, User, result) => {
       console.log(User.password);
      if (User.password == undefined) {
         sql.query(
            "UPDATE users SET username = ?, name = ? WHERE id = ?", [User.username, User.name, id],
            (err, res) => {
            if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
            }
            if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
            }
            console.log("update user: ", { id: id, ...User });
            result(null, { id: id, ...User });
            }
            );
      }
      else if (User.password != '') {
         sql.query(
            "UPDATE users SET username = ?, password = MD5(?), name = ? WHERE id = ?", [User.username, User.password, User.name, id],
            (err, res) => {
            if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
            }
            if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
            }
            console.log("update user: ", { id: id, ...User });
            result(null, { id: id, ...User });
            }
            );
      }
     
    };
    // Menghapus user yang memiliki id = id
    User.remove = (id, result) => {
     sql.query("DELETE FROM users WHERE id = ?", id, (err, res) =>
    {
     if (err) {
     console.log("error: ", err);
     result(null, err)
     return;
     }
     if (res.affectedRows == 0) {
     // not found User with the id
     result({ kind: "not_found" }, null);
     return;
     }
     console.log("hapus user dengan id: ", id);
     result(null, res);
     });
    };
    // Menghapus semua user
    User.removeAll = result => {
     sql.query("DELETE FROM users", (err, res) => {
     if (err) {
     console.log("error: ", err);
     result(null, err);
     return;
     }
     console.log(`Menghapus ${res.affectedRows} user`);
     result(null, res);
     });
    };
    module.exports = User;