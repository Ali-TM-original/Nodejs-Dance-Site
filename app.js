const express = require("express");
const path = require("path");
const app = express();
const port = 80;



// EXPRESS Config
app.use("/static", express.static("static")) //serving static files
app.use(express.urlencoded())

// PUG CONFIR
app.set("view engine", "pug") // setting pug as view engine
app.set("views", path.join(__dirname, "views")) // Templates or models

//ROUTES

app.get("/", (req, res)=>{
    const params = {}
    res.status(200).render('index.pug', params)
})


//STARTING SV

app.listen(port, ()=>{
    console.log(`App Running at port: ${port}`)
});