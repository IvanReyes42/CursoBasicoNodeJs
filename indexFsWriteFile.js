//Modulo nativo para el manejo de archivos
const fs = require('fs')

//Funciones Asincronas de NodeJs para seguir ejecutanto 
//Nuevas lineas de codigo mientras el primer proceso se realiza
fs.writeFile('./texto.txt','linea uno',function(err){
    if(err){
        console.log(err);
    }
    console.log('Archivo Creado');
})
console.log('ultima linea de codigo')
