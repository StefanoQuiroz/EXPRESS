const express = require('express'); //require es para importar el modulo express.
const app = express();
const port = 8000;
//Esto es para crear nuestras rutas y enviar algunos datos.
//users seria la base de datos.
const users = [
    {firstName: "Vicente", lastName: "Peralta"},
    {firstName: "Diego", lastName: "Mucientes"},
    {firstName: "Rodrigo", lastName: "Orellana"},
    {firstName: "Caro", lastName: "DaSilva"},
    {firstName: "Stefano", lastName: "Quiroz"},
]

//Post Datos
//Estas lineas siempre deben estar por encima de app.get/app.post
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//app.get("/api/lugos", (req,res) => (
    /* res.json(
        {
            "name": "Stefano",
            "lastName": "Quiroz",
            "nickName": "The Chicaco",
            "ocupation": "developer",
            "languages": [
                "Português",
                "Español",
                "Deutsche",
                "English"
            ],
            "hobby": "Travel arround the world"
        }
    ) */
    /* res.send("Initialized Server") */
//    res.json(users)
//))

//Post datos
/* app.post("/api/users", (req, res)=> {
    console.log(req.body); //req.body contendrá los datos del formulario desde react o postman
    users.push(req.body); //se introducira en el array de usuarios, mas tarde se insertará en una DB
    res.json({status: "ok"});//siempre se tiene que responder con algo
}) */

//Parametros de ruta
/* app.get("/api/users/:id", (req,res)=>{//para obtener un usuarion con un id específico siempre /:id no olvidar
    console.log(req.params.id);//para obtener el valor del id es necesario usar req.params.id
    res.json(users[req.params.id]);//users[req.params.id] => devuelve un {firstName: "dsf", lastName: "dsf"}
}) */

//Update datos
/* app.put("/api/users/:id", (req, res)=>{
    const id= req.params.id;//para obtener la variable id con req.params
    users[id] = req.body;
    res.json({status:ok})
}) */

//Delete
app.delete("/api/user/:id", (req,res) => {
    const id= req.params.id;//para obtener la variable id con req.params
    users.slice(id, 1);//
    res.json({status:ok})
})


app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
})
