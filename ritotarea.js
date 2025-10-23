/*const fechactual = new Date();

document.write(fechactual);
document.write('<br>');

let fecha = new Date();
document.write('Hoy es: ', fecha.getDate());
document.write('<br>');
document.write('El mes es: ', fecha.getMonth()+1);
document.write('<br>');
document.write('El año es: ', fecha.getFullYear());
document.write('<br>');
document.write('la hora es: ', fecha.getHours(), ':',
             fecha.getMinutes(), ':',
             fecha.getSeconds());*
document.write('<br>');*

class Ritotarea {
    constructor(titulo, descripcion, fechaVencimiento) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaVencimiento = fechaVencimiento;
    }
}
module.exports = Ritotarea;*

class animal {
    constructor(nombre,tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido() {
        console.log("El animal emite un sonido")
    }
}
class perro extends animal{// extends heredancia
    constructor(nombre, raza) {
        super(nombre, "perro");// super
        this.raza = raza;
    }
    emitirSonido() {
        console.log("El perro ladra");
    }
    correr() {
        console.log(`${this.nombre} está corriendo`);
    }
}
const perro1 = new perro("Firulais", "Labrador");

console.log(perro1);
perro1.correr();
perro1.emitirSonido();

perro1.nuevometodo = function() {
    console.log("nuevo metodo ");
};
perro1.prototype.segundometodo = function() {
    console.log("segundo metodo");
}*

class persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
    const persona1 = new persona("andres", 30);

    console.log(persona1);*/

    const userdatebase = [
        {username: "rito1", password: "pass1"},
        {username: "rito2", password: "pass2"},
        {username: "rito3", password: "pass3"},
    ];  

   const userstimeline = [
        {username: "rito1", timeline: " rito1"},
        {username: "rito2", timeline: " rito2"},
        {username: "rito3", timeline: " rito3"},
   ];   
   const usernameprompt = prompt("ingrese su nombre de usuario");
   const passwordprompt = prompt("ingrese su contraseña");
    function usuarioexistente(username, password) {
        for (let i = 0; i < userdatebase.length; i++) {
            if (userdatebase[i].username === username &&
                userdatebase[i].password === password) {
                    return true;
                }
                console.log("usuario no encontrado");
        }

        console.log("usuario no encontrado");
        return false;
    }
    