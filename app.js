//modulos CORE
var os = require('os');
var fs = require('fs');
//modulos de terceros
var argumento = require('yargs').argv;
var moment =require('moment');
//modulos propios
var [suma, resta, multiplicacion, division] = require('./operaciones');

var cpu = os.cpus();
var cpu_string = JSON.stringify(cpu);

var sistema = os.platform();

var hostname = os.hostname();

var fecha_archivo = moment().format('Do MMMM YYYY, h:mm:ss a');

if(argumento.usuario === 'Sofia'){
    fs.appendFile('salida.txt', `OPERACIONES suma: ${suma(10, 2)}, resta: ${resta(10, 2)}, multiplicacion: ${multiplicacion(10, 2)}, division: ${division(10, 2)}, COMPUTADORA DE ${argumento.usuario}: cpus: ${cpu_string}, SO: ${sistema}, hostname: ${hostname} ---- ARCHIVO GENERADO EL ${fecha_archivo}`, function(error){
        if(error){
            console.log("Error al crear el archivo.");
        }
    });
}else{
    console.log('No tiene acceso.')
}


