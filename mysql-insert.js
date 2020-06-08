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

    var sql = "INSERT INTO product(id_product, nama_product, gambar_product, harga_product, des_product, createdate) VALUES ?";
    // ('', 'Sepatu Sneaker', 'sneaker.jpg', '200000', 'kami menjual sepatu berkualitas semua ukuran', '2020-01-17')";
    // var sql = "INSERT INTO product(id_product, nama_product, gambar_product, harga_product, des_product, createdate) VALUES ('', 'Sepatu Pantofel', 'pantofel.jpg', '500000', 'kami menjual sepatu pantofel 2020', '2020-01-30')";
    var values = [
        ['', 'Sepatu Sneaker', 'sneaker.jpg', '200000', 'kami menjual sepatu berkualitas semua ukuran', '2020-01-17'],
        ['', 'Sepatu Pantofel', 'pantofel.jpg', '500000', 'kami menjual sepatu pantofel 2020', '2020-01-30']
    ];
    connection.query(sql, [values], function (err, result)
    {
        if (err)
        {
            throw err;
        }

        console.log("2 record berhasil di-insert");
        connection.destroy();
    });
});