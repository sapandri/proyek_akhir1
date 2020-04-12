//app/controllers/user.controller.js
const User = require("../models/user.model");
//Mengambil semua data user
exports.findAll = (req, res) => {
   User.getAll((err, data) => {
 if (err) {
 res.status(500).send({
 message:
 err.message || "Terjadi kesalahan"
 });
 } else {
 res.send(data);
 }
 });
};
// Mengambil user yang memiliki id = id
exports.findOne = (req, res) => {
 User.findById(req.params.id, (err, data) => {
 if (err) {
 if (err.kind === "not_found") {
 res.status(404).send({
 message: `User dengan id ${req.params.id} tidak ditemukan`
 });
 } else {
 res.status(500).send({
    message: `Error ketika mengambil user dengan id ${req.params.id}`
     });
     }
    } else {
     res.send(data);
     }
   });
};
    // Membuat data user baru
    exports.create = (req, res) => {
     if (!req.body) {
     res.status(400).send({
     message: "Content tidak boleh kosong"
     });
     }
     const user = new User({
     username: req.body.username,
     password: req.body.password,
     name: req.body.name
     });
     User.create(user, (err, data) => {
     if (err) {
     res.status(500).send({
     message:
     err.message || "Terjadi kesalahan"
     });
     }
     else {
     res.send(data);
     }
     });
    };
    // Mengupdate data user yang memiliki id = id
    exports.update = (req, res) => {
     if (!req.body) {
     res.status(400).send({
     message: "Content tidak boleh kosong"
     });
     }
     User.updateById(
     req.params.id,
     new User(req.body), (err, data) => {
     if (err) {
     if (err.kind === "not_found") {
     res.status(404).send({
     message: `User dengan id ${req.params.id} tidak ditemukan`
     });
     } else {
     res.status(500).send({
        message: `Error ketika mengupdate user dengan id ${req.params.id}`
         });
         }
         } else {
         res.send(data);
         }
         }
         );
        };
        // Menghapus user yang memiliki id = id
        exports.delete = (req, res) => {
         User.remove(req.params.id, (err, data) => {
         if (err) {
         if (err.kind === "not_found") {
         res.status(404).send({
         message: `User dengan id ${req.params.id} tidak ditemukan`
         });
         } else {
         res.status(500).send({
         message: `Error ketika menghapus user dengan id ${req.params.id}`
         });
         }
         } else res.send({ message: `Berhasil menghapus data user!`
        });
         });
        };
        // Menghapus semua user
        exports.deleteAll = (req, res) => {
         User.removeAll((err, data) => {
         if (err) {
         res.status(500).send({
         message:
         err.message || "Terjadi kesalahan"
         });
         }
         else {
         res.send({ message: `Berhasil menghapus seluruh data user!` });
         }
         });
        };