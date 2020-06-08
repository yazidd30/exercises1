var mysql = require('mysql');

var connection = mysql.createConnection
({
    host: "localhost",
    user: "root",
    password: "",
    database: "ecommerce"
});

connection.connect(function(err)
{
    if (err)
    {
        throw err;
    }

    console.log("Terkoneksi dengan sukses!");

    var sql = "CREATE TABLE product(id_product int NOT NULL AUTO_INCREMENT, nama_product varchar(60) NOT NULL, gambar_product varchar(200) NOT NULL, harga_product int(13) NOT NULL, des_product text NOT NULL, createdate DATE NOT NULL, PRIMARY KEY (id_product))";
    connection.query(sql, function (err, result)
    {
        if (err)
        {
            throw err;
        }

        console.log("Table berhasil dibuat!");
        connection.destroy();
    });
});