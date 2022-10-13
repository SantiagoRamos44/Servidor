const express = require("express");
const res = require("express/lib/response");

///crear aplicacion (servidor)
const app = express();

app.get("/", (req,res) => {
    res.send("Server Heroes Vercion 1.0.0.0.0.0");
});

app.listen(8087, () =>{
    console.log("El server esta activo por el port 8087");
});