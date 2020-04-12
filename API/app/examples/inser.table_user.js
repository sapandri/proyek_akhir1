const sql = require("../models/db");
sql.query("INSERT INTO users VALUES (NULL, 'username', 'password', 'name', current_timestamp());", (err, res) => {
 if (err) {
 console.log(err);
 } else {
 console.log("Data berhasil ditambahkan: " + res.affectedRows
);
 }
}); 