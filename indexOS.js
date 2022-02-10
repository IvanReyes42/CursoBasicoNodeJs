//Libreria o Modulos nativo del NodeJS
//Importamos modulo para el manejo del sistema operativo
const os = require('os')

console.log(os.platform()) //Saber la plataforma de trabajo
console.log(os.release()) //Saber la vesrion del sistema
console.log('free mem ',os.freemem(), ' bytes') //conocer la memoria libre
console.log('total mem ',os.totalmem(), ' bytes') //conocer la memoria total