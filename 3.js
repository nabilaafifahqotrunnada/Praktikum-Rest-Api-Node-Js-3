const express = require("express") //memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})

app.post("/convert/binary", (req,res) => {
    let angka = Number(req.body.angka) // mengambil nilai angka dari body

    let decimal = parseInt(angka,2)
    let octal = parseInt(angka,2).toString(8)
    let hexadecimal = parseInt(angka,2).toString(16)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        binary: angka,
        decimal: decimal,
        octal: octal,
        hexadecimal: hexadecimal
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

app.post("/convert/decimal", (req,res) => {
    let angka = Number(req.body.angka) // mengambil nilai angka dari body

    let binary = angka.toString(2)
    let octal = angka.toString(8)
    let hexadecimal = angka.toString(16)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        decimal: angka,
        binary: binary,
        octal: octal,
        hexadecimal: hexadecimal
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

app.post("/convert/octal", (req,res) => {
    let angka = Number(req.body.angka) // mengambil nilai angka dari body

    let decimal = parseInt(angka,8)
    let binary = parseInt(angka,8).toString(2)
    let hexadecimal = parseInt(angka,8).toString(16)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        octal: angka,
        decimal: decimal,
        binary: binary,
        hexadecimal: hexadecimal
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

app.post("/convert/hexadecimal", (req,res) => {
    let angka = Number(req.body.angka) // mengambil nilai angka dari body

    let decimal = parseInt(angka,16)
    let binary = parseInt(angka,16).toString(2)
    let octal = parseInt(angka,16).toString(8)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        hexadecimal: angka,
        decimal: decimal,
        binary: binary,
        octal: octal
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})