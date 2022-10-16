const express = require("express");
const app = express();
const port = 3000;

app.use( express.static("public") )

app.get("/home", (req, res) => {
    // el .send es unicamente para enviar data
    // para enviar archivos utilizamos el metodo .sendFile
    console.log(__dirname)
    res.sendFile(__dirname + "/views/home.html")
  })
  
  
  app.get("/about", (req, res) => {
  
    res.sendFile(__dirname + "/views/about-page.html")
  
  })


  app.get("/works",(req, res) => {
    res.sendFile(__dirname + "/views/works-page.html")
  })
  
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  