var faker = require('faker');
const express = require ('express');
const app = express();
const port = 8000;

class Usuario{
    constructor(){
        this.carneDeIdentidad = faker.datatype.number();
        this.primerNombre = faker.name.firstName();
        this.apellido = faker.name.lastName();
        this.numeroDeTelefono= faker.phone.phoneNumber();
        this.email= faker.internet.email();
        this.contraseña= faker.internet.password();
    }
}

const usuario = new Usuario()
console.log(usuario);

class Direccion{
    constructor(){
        this.calle = faker.address.streetAddress();
        this.ciudad = faker.address.city();
        this.estado = faker.address.state();
        this.codigoPostal = faker.address.zipCode();
        this.pais = faker.address.country();
    }
}

const direccion = new Direccion();

class Empresa{
    constructor(){
        this.carneDeIdentidad= faker.datatype.number();
        this.nombre= faker.company.companyName();
        this.direccion= direccion;
    }
} 

const empresa = new Empresa()
console.log(empresa);

app.get("/api/users/new", (req, res) => {
    res.json(usuario);
});

app.get("/api/companies/new", (req, res) => {
    res.json(empresa);
})

app.get("/api/user/company", (req,res) =>{
    const array = [];
    array.push(usuario, empresa);
    res.json(array);
})

app.listen(8000, ()=>{
    console.log(`Listening on Port: ${port}`)
});